"use strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../models");
const User = db.user;

class AuthController {


  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email) {
        return res.json({ status: false, message: "Email is required" });
      }
      if (!password) {
        return res.json({ status: false, message: "Password is required" });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ status: false, message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.json({ status: false, message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.SECRET,
        { expiresIn: "1h" }
      );

      res.cookie("token", token, {
        httpOnly: false,
        secure: false,
        sameSite: "Strict",
        maxAge: 3600 * 1000,
      });

      const { password: _, ...userWithoutPassword } = user.toObject();

      return res.json({
        status: true,
        message: "Login successful",
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.json({
        status: false,
        message: "Server error",
        error: error.message,
      });
    }
  }




  async register(req, res) {
    try {
      const { FullName, Email, Password, PhoneNo } = req.body;

      if (!FullName || !Email || !Password || !PhoneNo) {
        return res.json({ status: false, message: "All fields are required" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(Email)) {
        return res.json({ status: false, message: "Invalid email format" });
      }

      if (Password.length < 8) {
        return res.json({ status: false, message: "Password must be at least 8 characters long" });
      }

      const existingUser = await User.findOne({
        $or: [
          { Email: { $regex: new RegExp("^" + Email + "$", "i") } },
          { PhoneNo },
        ],
      });

      if (existingUser) {
        return res.json({
          status: false,
          message: "User with this email or phone already exists",
        });
      }

      const allUsers = await User.find({});
      const isPasswordUsed = await Promise.any(
        allUsers.map((user) => bcrypt.compare(Password, user.password))
      ).catch(() => false);

      if (isPasswordUsed) {
        return res.json({
          status: false,
          message: "Password already in use. Please use a unique password.",
        });
      }

      const hashedPassword = await bcrypt.hash(Password, 10);

      const newUser = new User({
        FullName,
        email: Email.toLowerCase(),
        password: hashedPassword,
        phone: PhoneNo,
        role: "USER",
      });

      const savedUser = await newUser.save();

      const { password, ...userWithoutPassword } = savedUser.toObject();

      return res.json({
        status: true,
        message: "User registered successfully",
        user: userWithoutPassword,
      });
    } catch (error) {
      console.error("Registration error:", error);

      if (error.code === 11000) {
        const duplicateField = Object.keys(error.keyValue)[0];
        const message =
          duplicateField === "email"
            ? "Email already exists"
            : duplicateField === "phone"
              ? "Phone number already exists"
              : "Duplicate field value exists";

        return res.json({ status: false, message });
      }

      return res.json({
        status: false,
        message: "Server error",
        error: error.message,
      });
    }
  }


}

module.exports = new AuthController();

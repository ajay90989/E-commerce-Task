const db = require("../../models");
const PaymentModel = db.payment;
const user = db.user;


const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

class PaymentController {
  // ✅ 1. Get all payments
  async getAllPayments(req, res) {
    try {
      const payments = await PaymentModel.find({});

      res.status(200).json({
        success: true,
        message: "All payments fetched successfully",
        data: payments,
      });
    } catch (error) {
      console.error("Error fetching payments:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch payments",
        error: error.message,
      });
    }
  }




  async getPaymentsByUserId(req, res) {
    const { userId } = req.params;

    try {
      const UserRole = await user.findOne({ _id: userId }).select("role");

      let Match = {};
      if (UserRole.role !== "ADMIN") {
        Match = { user_id: new ObjectId(userId) };
      }

      const userPayments = await PaymentModel.aggregate([
        {
          $match: Match
        },
        {
          $sort: { createdAt: -1 }
        },
        {
          $lookup: {
            from: "products",
            localField: "product_id",
            foreignField: "_id",
            as: "productDetails"
          }
        },
        {
          $unwind: "$productDetails"
        },
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "usersDetails"
          }
        },
        {
          $unwind: "$usersDetails"
        },
        {
          $addFields: {
            short_order_id: {
              $cond: [
                { $gt: [{ $strLenCP: "$order_id" }, 14] },
                {
                  $concat: [
                    { $substr: ["$order_id", 0, 8] },
                    "...",
                    {
                      $substr: [
                        "$order_id",
                        { $subtract: [{ $strLenCP: "$order_id" }, 6] },
                        6
                      ]
                    }
                  ]
                },
                "$order_id"
              ]
            }
          }
        },
        {
          $project: {
            _id: 1,
            order_id: 1,
            short_order_id: 1,
            amount: 1,
            status: 1,
            payment_method: 1,
            createdAt: 1,
            "productDetails.name": 1,
            "usersDetails.FullName": 1
          }
        }
      ]);

      res.status(200).json({
        success: true,
        message: `Payments for user ID: ${userId}`,
        data: userPayments
      });
    } catch (error) {
      console.error("Error fetching user payments:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch user payments",
        error: error.message
      });
    }
  }


}

module.exports = new PaymentController();

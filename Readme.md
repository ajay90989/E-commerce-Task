# 🛒 **Full-Stack E-commerce Application**

---

<div align="center">

## 🚀 Modern, Scalable & Feature-Rich E-commerce Solution

Built with **React (Vite)**, **Node.js (Express)**, **MongoDB**, **Stripe**, and **Cloudinary**.

</div>

---

## 🧩 Tech Stack

|  **Layer**   | **Technology**          |
| :----------: | :---------------------- |
|   Frontend   | React.js (Vite) ⚛️      |
|   Backend    | Node.js (Express) 🚀    |
|   Database   | MongoDB 🍃              |
|  Auth/Roles  | JWT, Admin 👑 / User 🧑‍💻 |
|   Payments   | Stripe 💳               |
| Media Upload | Cloudinary ☁️           |

---

## ✨ Features

- **Modern UI/UX** for browsing & purchasing products
- **Role-based access** (Admin/User)
- **JWT Authentication & Authorization**
- **Stripe payment gateway** with success/cancel flow
- **Cloudinary** for image upload & management
- **Order & payment tracking** in MongoDB
- **Admin dashboard** for product & order management
- **Responsive design** for all devices
- **Secure API** with CORS, Helmet, and error handling
- **API response time logger** for performance monitoring

---

## 📁 Project Structure

```
/backend
├── controllers       # Business logic
├── models            # Mongoose schemas
├── routes            # API endpoints
├── middlewares       # Auth, error, etc.
├── utils             # Helper functions
└── app.js            # Express config

/frontend
└── src
    ├── app
    ├── layouts       # Page layouts
    ├── components    # Reusable UI components
    ├── routes        # App routes
    ├── services      # API calls
    ├── utils         # Utility functions
    ├── pages         # Frontend pages
    └── App.jsx       # App root
```

---

## 🚦 Quick Start

### 🔙 Backend

```bash
cd backend
npm install
nodemon app
```

> Runs at: [http://localhost:8080](http://localhost:8080)

---

### 🔜 Frontend

```bash
cd frontend
npm install
npm run dev
```

> Runs at: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Environment Variables

> **Create `.env` files in both `/frontend` and `/backend`. Never commit them!**

**Backend `.env` Example:**

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Frontend `.env` Example:**

```
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

---

## 🛠️ Integrations

- **Stripe**: Secure payment processing
- **Cloudinary**: Image upload & CDN
- **JWT**: Secure authentication
- **Mongoose**: MongoDB ODM
- **Helmet & CORS**: Security middlewares

---

## 📸 Screenshots

![Screenshot](https://res.cloudinary.com/dsuvis7qq/image/upload/v1748694364/ehfblze9auvkdx2twlew.png)
![Screenshot](https://res.cloudinary.com/dsuvis7qq/image/upload/v1748694389/inb8j4y2wgvqasqrpiay.png)
![Screenshot](https://res.cloudinary.com/dsuvis7qq/image/upload/v1748694022/z8rqave2ouw7rke2naku.png)
![Screenshot](https://res.cloudinary.com/dsuvis7qq/image/upload/v1748694002/brc0lvdeyqyiylvwiyhb.png)
![Screenshot](https://res.cloudinary.com/dsuvis7qq/image/upload/v1748693893/kx8hhr6vh2yhydure204.png)

---

## 👤 Author

**Your Name**  
📬 [your.email@example.com](mailto:your.email@example.com)  
🔗 [GitHub](https://github.com/yourusername)

---

## 💡 Need Help?

- Want badges, screenshots, or a copyable `.env` template?
- Need code snippets for Cloudinary or Stripe integration?
- Looking for a logo or favicon?

**Just ask! Happy coding!** 💻✨

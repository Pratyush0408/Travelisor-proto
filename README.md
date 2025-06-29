# 🧭 Travelisor

**Travelisor** is a full-stack web application inspired by Pinterest, reimagined for travel enthusiasts. It allows users to upload, explore, and interact with travel-themed visual content. Think of it as your digital travel moodboard.

## 🔍 Features

- 📌 Upload and view travel pins  
- ❤️ Like and react to posts  
- 💬 Comment on pins (with emoji support)  
- 🖼️ Built-in image editor to customize images  
- 📁 Organize pins into collections  
- 👤 User authentication (signup, login)  
- 🔄 Infinite scroll for seamless discovery  
- 📱 Fully responsive across devices  

## 🛠️ Tech Stack

### Frontend
- React  
- React Router  
- Axios  
- Tailwind CSS / CSS Modules  

### Backend
- Node.js  
- Express.js  
- MongoDB (with Mongoose)  
- JWT (JSON Web Token) for authentication  
- RESTful API architecture  

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/travelisor.git
cd travelisor
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory with the following content:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

Then run the server:
```bash
npm start
```

The backend should now be running at: `http://localhost:3000`

### 3. Frontend Setup
```bash
cd ../client
npm install
```

Create a `.env` file in the `client/` directory with:
```env
VITE_API_ENDPOINT=http://localhost:3000/api
```

Then run the frontend:
```bash
npm run dev
```

Open in browser at: `http://localhost:5173`

## ✅ Current Functionality

- User authentication with JWT
- Uploading, viewing, and reacting to travel pins
- Commenting system with emoji picker
- Integrated image editor
- Pin organization via collections
- Infinite scroll for pin feed
- Fully mobile-responsive UI

## 🔮 Future Enhancements

- AI-based travel recommendations
- Smart itinerary builder
- Collaborative travel boards
- Admin tools for moderation

## 📷 Screenshots

Screenshots to be added soon

## 👤 Author

**Pratyush Kumar Jha**

## 📄 License

This project is licensed under the MIT License.

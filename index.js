import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./config/app.js";

dotenv.config({
  path: "./.env"   // root .env
});

const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log("MongoDB connection failed!!", error);
  }
};

startServer();

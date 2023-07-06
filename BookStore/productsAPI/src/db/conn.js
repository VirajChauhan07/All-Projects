const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://virajj583:79vlKCf9pCx30jk0@cluster0.qt6qwez.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error in Connecting", err);
  }
}

module.exports = connectDB;

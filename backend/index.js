const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User")
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://anish:abc123anish@cluster0.pzs1q.mongodb.net/users")
  .then(() => console.log("Database connected successfully"))
  .catch((e) => console.log("Error starting database:", e))


app.post("/saveData", async (req, res, next) => {
  try {
    const { name, address, phone, message, item } = req.body;
    const newUser = new User({ name, address, phone, item, message })
    await newUser.save()
    res.status(201).json({ success: true, message: `Data saved successfully` })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
  // res.send("hello")
})


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

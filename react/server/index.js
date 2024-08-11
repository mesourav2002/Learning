const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;

// Middleware
app.use(express.json()); // For parsing application/json

// MongoDB connection
// mongoose.connect("mongodb://127.0.0.1:27017/userdb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(cors());
let url = "mongodb://127.0.0.1:27017/userdb";

let connectDb = async () => {
  await mongoose.connect(url);
  console.log("Database is Connected");
};

connectDb();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  password: {
    type: Number,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
});

const User = mongoose.model("User", userSchema);

// Routes
app.post("/api/users", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User({ username, password, email });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.send({ message: "User deleted" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

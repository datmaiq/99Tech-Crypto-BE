require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Middleware để phân tích yêu cầu JSON
app.use(express.json());

// Route công khai
app.get("/", (req, res) => {
  res.send("Crypto API");
});

// Route người dùng
const usersRouter = require("./routes/users");
app.use("/api/users", usersRouter);

// Route giao dịch
const transactionsRouter = require("./routes/transactions");
app.use("/api/transactions", transactionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

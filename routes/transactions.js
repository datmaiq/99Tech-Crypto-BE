const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");
const authenticateToken = require("../middleware/authenticateToken");

// Lấy tất cả giao dịch
router.get("/", authenticateToken, transactionController.getAllTransactions);

// Tạo giao dịch mới
router.post("/", authenticateToken, transactionController.createTransaction);

// Lấy một giao dịch cụ thể
router.get("/:id", authenticateToken, transactionController.getTransactionById);

module.exports = router;

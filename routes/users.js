const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateToken = require("../middleware/authenticateToken");

// Đăng ký người dùng mới
router.post("/register", userController.register);

// Đăng nhập người dùng
router.post("/login", userController.login);

// Lấy thông tin người dùng
router.get("/me", authenticateToken, userController.getUserInfo);

module.exports = router;

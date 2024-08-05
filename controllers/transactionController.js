const Transaction = require("../models/Transaction");

// Lấy tất cả giao dịch
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo giao dịch mới
exports.createTransaction = async (req, res) => {
  const transaction = new Transaction({
    type: req.body.type,
    amount: req.body.amount,
    currency: req.body.currency,
  });

  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Lấy một giao dịch cụ thể
exports.getTransactionById = async (req, res, next) => {
  let transaction;
  try {
    transaction = await Transaction.findById(req.params.id);
    if (transaction == null) {
      return res.status(404).json({ message: "Cannot find transaction" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.transaction = transaction;
  next();
};

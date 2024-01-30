const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    ename:String,
    amount:Number
});
module.exports.ExpenseTracker = mongoose.model("ExpenseTracker",expenseSchema);
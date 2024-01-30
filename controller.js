const {ExpenseTracker} = require('./schema');

module.exports.insertexpense = async(req,res)=>{
    const expense = new ExpenseTracker({
    ename: req.body.ename,
    amount: Number(req.body.amount),
    })

    const ex = await ExpenseTracker.findOne({ename:Number(req.body.ename)});
    if(ex)
         return res.send({msg:"ex exist in db"});
    const savedexpense = await expense.save();
    res.send(savedexpense);
}

module.exports.getallexpenses = async (req,res) => {
    const ex = await ExpenseTracker.find({});
    if(ex.length != 0)
        res.send(ex)
    else 
        res.send({msg: "no expenses found!"})
}

module.exports.getexpense = async (req,res) => {
    console.log("recieved")
    const ex = await ExpenseTracker.findOne({ename:req.params.ename});
    if(ex)
        res.send(ex)
    else
        res.send({msg:"expense not found!"});
}

module.exports.updateexpenses = async (req, res) => {
    try {
        const ex = await ExpenseTracker.findOneAndUpdate(
            { ename: req.params.ename },
            { $set: { amount: req.body.amount } },
            { new: true }
        );

        if (ex) {
            res.send("updated successfully");
        } else {
            res.send("not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


module.exports.deleteexpense = async(req,res)=>{
    const ex = await ExpenseTracker.findOneAndDelete({ename:req.params.ename});
        if(ex)
          res.send("deleted");
        else
         res.send("not found");
} 

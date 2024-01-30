const {connectdb} = require('./connect');
const {ExpenseTracker} = require('./schema');
const expense_controller = require('./controller');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

//resource --> value - params


connectdb()
    .then(()=>{
        console.log("database connected successfullyy..!!!!!")
    })
    .catch((err)=>{
        console.log(err)
    });


app.post('/api/ExpenseTracker',expense_controller.insertexpense);
app.get('/api/ExpenseTracker',expense_controller.getallexpenses);
app.get('/api/ExpenseTracker/:ename',expense_controller.getexpense);
app.put('/api/ExpenseTracker/:ename',expense_controller.updateexpenses);
app.delete('/api/ExpenseTracker/:ename',expense_controller.deleteexpense);


const port = 9000;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
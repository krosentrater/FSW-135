const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
PORT = 3200;

//MiddleWare
app.use(express.json());
app.use(morgan("dev"));

//Connection to DB
mongoose.connect('mongodb://localhost:27017/climate-action-101');

//Routes
app.use('/users', require('./routes/userRouter.js'));
app.use('/issues', require('./routes/issueRouter.js'));
app.use('/comments', require('./routes/commentRouter.js'));

//Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})
});

//Server Listen
app.listen(PORT, () => {
    console.log(`Server successfully started on port: ${PORT}`);
});



// {
//     "title": "Testing",
//     "issue": "Testing123"
// }

// {
//     "comment": "Testing this"
// }



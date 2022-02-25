const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const PORT = 3232;

//MiddleWare
app.use(express.json());
app.use(morgan("dev"));

//Connection to DB
mongoose.connect("mongodb://localhost:27017/e-commerce",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log("Successfully connected to database!")
);

//Server Listen
app.listen(PORT, () => {
    console.log(`Server successfully started on port: ${PORT}`);
});
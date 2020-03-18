const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//using .env
require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

//connect to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongo database connection made!");
});

//requiere and use route files
const blanksRouter = require('./routes/blank');
const comissionsRouter = require('./routes/comission');
const currenciesRouter = require('./routes/currency');
const customersRouter = require('./routes/customer');
const discountsRouter = require('./routes/discount');
const paymentRouter = require('./routes/payment');
const salesRouter = require('./routes/sales');
const usersRouter = require('./routes/users');

app.use('/stock', blanksRouter);
app.use('/comission', comissionsRouter);
app.use('/currency', currenciesRouter);
app.use('/customers', customersRouter);
app.use('/discounts', discountsRouter);
app.use('/payment', paymentRouter);
app.use('/sales', salesRouter);
app.use('/users', usersRouter);

//
app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});
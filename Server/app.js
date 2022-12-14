const express = require('express');
const TransactionRoutes = require('./apps/user/routes');
const { urlencoded } = require('body-parser');

const app = express();

app.use(urlencoded({extended: true}))
app.use('/api/v1/user',TransactionRoutes);


app.listen(80);

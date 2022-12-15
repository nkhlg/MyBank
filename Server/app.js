const express = require('express');
const bodyParser = require('body-parser');
// const publicRoutes = require('./apps/public/routes');
// const userRoutes = require('./apps/user/routes');
const adminRoutes = require('./apps/admin/routes');

//raj created
const DepositWithdrawRoute = require('./apps/user/routes');
const  ApplyLoanRoute = require('./apps/user/routes');
const UserDetailRoutes = require('./apps/admin/routes');  
const LoanDetailRoutes = require('./apps/admin/routes');  

//-------------------------------
const dotEnv = require('dotenv');


const authMiddleware = require('./middlewares/authMiddlewares');
const cors = require('cors');

dotEnv.config();

const app = express();

 

// app.use(cors({origin: '*'}));

 

app.use(authMiddleware);
app.use(bodyParser.json({inflate: true}));
// app.use(bodyParser.urlencoded({extended: true}))
// app.use('/api/v1', publicRoutes);
// app.use('home',userRoutes);
app.use('/api/v1/admin',adminRoutes);

//raj created
app.use('/api/v1/user',DepositWithdrawRoute); 
app.use('/api/v1/user',ApplyLoanRoute); 
app.use('/api/v1/admin',UserDetailRoutes); 
app.use('/api/v1/admin',LoanDetailRoutes); 

//----------------------------------

// app.use('/api/v1/user', userRoutes);

 


app.listen(80);
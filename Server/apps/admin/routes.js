const express = require('express');
const admin = require('./Controllers/adminController');
const UserDetail = require('./Controllers/AllUserDetailController');  
const LoanDetail = require('./Controllers/AllLoanDetailController');  

const router = express.Router();

router.post('/approvalStatus/:id',admin.userApproval);
router.post('/loanApprovalStatus/:userId',admin.loanApproval);

router.get('/userdetail',UserDetail.GetAll);   //Get all user details route
router.get('/loandetail',LoanDetail.LoanDetail);   //Get all loan details route



module.exports = router;
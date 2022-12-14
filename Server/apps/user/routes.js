const express = require('express');
const Deposit = require('./Controllers/DepositWithdrawController');
const Loan = require('./Controllers/loanController');


const router = express.Router();

router.get('/transaction/:id',Deposit.getAll);

router.post('/deposit',Deposit.deposit_funds);
router.post('/withdraw',Deposit.withdrawal_funds);

router.post('/loan',Loan.ApplyLoan);



module.exports = router;
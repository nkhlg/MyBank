const express = require('express');

const userController = require('./Controllers/userController');
const Deposit = require('./Controllers/DepositWithdrawController');



const router = express.Router();


router.get('/transaction/:id',Deposit.getAll);

router.post('/deposit',Deposit.deposit_funds);
router.post('/withdraw',Deposit.withdrawal_funds);




module.exports = router;
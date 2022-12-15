const express = require('express');
const admin = require('./Controllers/adminController');

const router = express.Router();
router.post('/approvalStatus/:id',admin.userApproval);
router.post('/loanApprovalStatus/:userId',admin.loanApproval);

module.exports = router;
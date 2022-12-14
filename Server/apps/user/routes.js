const express = require('express');

const user = require('./Controllers/userProfileController');



const router = express.Router();

router.get('/userProfile/:id',user.userProfile);

router.post('/userprofile/:id',user.editUserProfile);



module.exports = router;
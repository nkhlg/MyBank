const {User} = require('../../../data/models');

// Get user profile details 
/**
 * user id is passed as parameter, we have to change it when the login functionality is completed
 */
module.exports.userProfile = async(req,res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        res.json(user)
    }
    catch(err)
    {
        res.json(err)
    }
    
}

// Edit user profile 
/**
 * user id is passed as parameter, we have to change it when the login functionality is completed
 */
module.exports.editUserProfile =  (req,res,next) =>
{
    
    try{
         User.update({
            phone : req.body.phone,
            email : req.body.email,
            password : req.body.password
        },
        {
            where : {
                id : req.params.id
            }
        }).then(
            res.send("ok")
            );
    }
    catch(err)
    {
        res.json(err)
    }
    
}



const {User,Loan} = require('../../../data/models');

//Admin approval of user
module.exports.userApproval =  (req,res) =>
{
    const userId = req.params.id;
    try{
        User.findByPk(userId).then(
            User.update({
                approvalStatus : "approved"
            },
            {
                where : {id : userId}
            }
            ).then(res.send("ok"))
        
        )  
    }
    catch(err)
    {
        res.json(err);
    }  

}

//Admin approval of loan
module.exports.loanApproval = (req,res) =>
{
    const id = req.params.userId;
    try{
        Loan.findOne({where : {userId : id}}).then(
            Loan.update({
                approvalStatus : "approved"
            },
            {
                where : { userId : id}
            }).then(res.send("ok"))
        )
    
    }
    catch(err){
        res.json(err)
    }
   
}

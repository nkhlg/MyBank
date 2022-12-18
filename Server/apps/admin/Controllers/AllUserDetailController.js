const { User} = require('../../../data/models');

const ResponseModel = require('../../../utilities/responseModel')

module.exports.GetAll = async (req, res) => {
    
    const UserDetail = await User.findAll({
        where: {approvalStatus: 'pending'}
    });
    console.log(UserDetail)
    res.json(new ResponseModel(UserDetail));
}


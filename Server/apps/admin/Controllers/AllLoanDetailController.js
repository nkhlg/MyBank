const {  Loan } = require('../../../data/models');

const ResponseModel = require('../../../utilities/responseModel')

module.exports.LoanDetail = async (req, res) => {
    
    const LDetail = await Loan.findAll({
        where: {approvalStatus: 'pending'}
    });
    console.log(LDetail)
    res.json(new ResponseModel(LDetail));
}


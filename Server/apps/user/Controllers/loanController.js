const { User, Account, Transaction, Loan } = require('../../../data/models');

module.exports.ApplyLoan = async (req, res) => {
    const id = 1;//should take it from token as req.user.id
    console.log(req.body)
    const accountData = await Account.findOne({
        where: { userId: id }
    })
    try {
        await Loan.create({
            accountId: accountData.accountId,
            userId: id,
            startDate: new Date().toISOString().slice(0, 10),
            amount: req.body.amount,
            endDate: req.body.endDate
        })
        const LaonData = await Loan.findOne({
            where: { userId: id }
        })
        await Loan.update(
            {
                amount: LaonData.account,
                endDate: LaonData.endDate,
            },
            {
                where: { userId: id }
            }
        )
            .then(data => {
                res.send('Apply successfully')
            })
    }
    catch (err) {
        res.json(err)
    }
}

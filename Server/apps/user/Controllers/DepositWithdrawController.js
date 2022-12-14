const { User, Account, Transaction, Loan } = require('../../../data/models');

//Get specific transaction details
module.exports.getAll = async (req, res) => {

    const id = req.params.id;
    console.log(id)
    const Transactions = await Transaction.findAll({
        where: { transactionId: id }
    });
    console.log(Transactions)
    res.send(Transactions);
}

//To  deposite amount in account and also  available in tranasaction
module.exports.deposit_funds = async (req, res) => {
    const userId = 1;//should take it from token as req.user.id
    const accountData = await Account.findOne({
        where: { userId: userId }
    })
    
    await Transaction.create({
        accountId: accountData.accountId,
        userId: userId,
        amount: req.body.amount,
        transactionType: 'Deposit',
        dateOfTrasaction: new Date().toISOString().slice(0, 10)

    })
    
    await Account.update(
        {
            currentBalance: parseInt(accountData.currentBalance)+parseInt(req.body.amount)
        },
        {
            where: { userId: userId }
        }

    ).then(data=>{
        res.send('Deposit amount is successfully')
    })

}


module.exports.withdrawal_funds = async (req, res) => {
    const userId = 1;//should take it from token as req.user.id

    const accountData = await Account.findOne({
        where: { userId: userId }
    })

    if (  parseInt(accountData.currentBalance) >= parseInt(req.body.amount) )
    {
        await Transaction.create({
            accountId: accountData.accountId,
            userId: userId,
            amount: req.body.amount,
            transactionType: 'Withdrawal',
            dateOfTrasaction: new Date().toISOString().slice(0, 10)
    
        })
        
        await Account.update(
            {
                currentBalance: parseInt(accountData.currentBalance) - parseInt(req.body.amount)
            },
            {
                where: { userId: userId }
            }
    
        ).then(data=>{
            res.send('withdrawal successfully')
        })

    }
    else{
        res.send('not enough balance')
    }
    
    

}








const {User, Bank} = require('../../../data/models')
const ResponseModel = require('../../../utilities/responseModel');



// const Bank = require('../../../data/models')



//User registration 

module.exports.register = async (req, res) => {
    try{
        const {name, email, phone, address, panNumber, aadhaarNumber, password } = req.body;

        console.log(aadhaarNumber)


        // Check if user already exists.
        const userExists = await User.findOne({where: {email: email}});
        if(userExists){
            return res.status(400)
                .json(new ResponseModel(null, null, ['User already exists.']));
        }

        var user = await User.create({
            name: name,
            email: email,
            password: password,
            phone : phone,
            address : address,
            panNumber : panNumber,
            aadhaarNumber : aadhaarNumber 

        });
        res.json(new ResponseModel(user));
    }
    catch(err){
        console.log(err);
        res.status(500).json(new ResponseModel(null, null, ['Unable to create user.']));
    }
}
//Middle ware
const tokenHandler = require('../utilities/tokenHandler')

module.exports = (req, res, next) => {
    if(!req.url.startsWith('/home')){
        return next();
    }


    let token = req.headers['authorization'];
    console.log(token);
    token = token ? token.split(' ')[1] : null;

    if(!token){
        return res.status(401)
            .send('Unauthorized');
    }

    try{
        const tokenResult = tokenHandler.verifyToken(token);
        req.user = tokenResult;
        return next();
    }
    catch(err){

        return res.status(401)
.send('Unauthorized');
    }
}
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {

    if (req.headers.authorization != null){        
        const token = req.headers.authorization.split(' ')[1]

        try {
            const payload = jwt.verify(token, process.env.JWT_TOKEN_KEY)
            next()
        } catch (e) {
            res.status(401).json({
                msg: 'You are Not Authorized!'
            })
        }

    } else{
        res.status(401).json({
            msg: 'You are Not Authorized!'
        })
    }

    
}

module.exports = auth
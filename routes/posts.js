const router = require('express').Router()
const auth = require('./verifyToken')

router.get('/posts',auth,(req,res)=>{
    res.json({
        posts:[{
            title:"this is is json webtoken",
            description:"this is the descriptoon for web token"
        },{
            title:"this is is json webtoken",
            description:"this is the descriptoon for web token"
        },{
            title:"this is is json webtoken",
            description:"this is the descriptoon for web token"
        },{
            title:"this is is json webtoken",
            description:"this is the descriptoon for web token"
        },{
            title:"this is is json webtoken",
            description:"this is the descriptoon for web token"
        }]
    })
})

module.exports = router;
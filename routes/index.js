const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('index')
})
router.get('/secret', (req,res) =>{
    res.render('secret')
})

module.exports = router
// test
const express = require('express')
const router = express.Router()

const R = require('r-script')

router.get('/day1',(req,res) =>{
    res.send("day1")
})

module.exports = router
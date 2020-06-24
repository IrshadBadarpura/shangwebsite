const express = require('express')
const router = express.Router()

const R = require('r-script')

router.get('/day3',(req,res) =>{
    res.send("day3")
})

module.exports = router
const express = require('express')
const router = express.Router()

const R = require('r-script')

router.get('/day8',(req,res) =>{
    res.send("day8")
})

module.exports = router
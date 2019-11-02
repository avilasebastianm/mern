const express = require('express');
const router = express.Router();
//Item model
const cities = require('../../models/cities');

//@route Get api/cities
//@desc get all cities
//@access Public
router.get('/',(req,res)=>{
    cities.find()
    .short({})
    .then(cities=> res.json(cities))

}); 

module.exports = router;
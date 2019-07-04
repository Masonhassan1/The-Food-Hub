const express = require('express');

const router = express.Router();

const User = require('../Models/User');


router.get('/api', (req, res) => {
  User.find({})
    .then((data) => {
      console.log('Data:', data);
      res.json(data);
    })
    .catch(error => {
      console.log(error)
    })

});

router.post('/api/save', (req, res) => {
  console.log('usrId', req.usrId)
  res.json({
    msg: 'data recieved'
  })
})

router.get('/api/name', (req, res) => {
  const data = {
    username: 'basdfslbla',
    age: 3
  }
  res.json(data);
});


module.exports = router;
const express = require('express');

const router = express.Router();

const User = require('../Models/User');


router.get('/', (req, res) => {
  User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch(error => {
      console.log('ERROR IN BACKEND', error)
    })

});

router.post('/save', (req, res) => {
  const data = req.body;
  const newUser = new User(data);
  newUser.save((error) => {
    if (error) res.status(500).json({ msg: 'Sorry, Internal server error' })
    else {
      res.json({
        msg: 'data recieved'
      })
    }
  });

})

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build'))
})

router.delete('/delete/:id/:userId', (req, res) => {
  const { id, userId } = req.params;
  User.findOneAndRemove({ "usrId": userId, "receipeId": id })
    .then(data => {
      data.remove(err => {
        if (err) res.status(500).send({ msg: 'Error in eliminating receipe.' })
        res.status(200).send({ msg: 'Receipe eliminated' })
      })
    })

})



module.exports = router;

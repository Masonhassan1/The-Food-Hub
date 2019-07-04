const express = require('express');

const router = express.Router();

const User = require('../Models/User');


router.get('/api', (req, res) => {
  User.find({})
    .then((data) => {
      res.json(data);
    })
    .catch(error => {
      console.log(error)
    })

});

router.post('/api/save', (req, res) => {
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

router.delete('/api/delete/:id/:userId', (req, res) => {
  const { id, userId } = req.params;
  User.findOneAndRemove({ "usrId": userId, "recipieId": id })
    .then(data => {
      data.remove(err => {
        if (err) res.status(500).send({ msg: 'Error al eliminar la receta.' })
        res.status(200).send({ msg: 'receta eliminada' })
      })
    })

})



module.exports = router;
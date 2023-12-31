const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err
      })
    }
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass
    });

    user.save()
      .then(response => {
        res.json({
          massage: 'User Added Successfully!'
        })
      })
      .catch(error => {
        res.json({
          message: 'User addition failed'
        })
      })
  })


}

const login = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  User.findOne({
    $or: [{ emsil: username }, { phone: username }]
  })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, function (error, result) {
          if (error) {
            res.json({
              error: error
            });
          }
          if (result) {
            let token = jwt.sign({ name: user.name }, 'verySecretValue', { expiresIn: '1h' });
            res.json({
              message: 'Success',
              token: token
            })
          } else {
            res.json({
              message: 'Wrong Password'
            })
          }
        })
      } else {
        res.json({
          message: 'Not Found'
        })
      }
    })
}

module.exports = {
  register,
  login
}
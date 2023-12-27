const path = require('path');
const multer = require('multer');


var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    let ext = path.extname(file.originalname);
    callback(null, Date.now() + ext);
  }
});


var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
      callback(null, true);
    } else {
      console.log('only jpg or png supported');
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2
  }
})

module.exports = upload
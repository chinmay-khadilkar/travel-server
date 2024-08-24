const Journey = require('../models/Journey')

// show all journeys
const index = (req, res, next) => {
  Journey.find()
    .then(resp => {
      res.json({
        message: 'Success',
        resp
      })
    })
    .catch(error => {
      res.json({
        message: 'Error'
      })
    })
}


// show one journey
const show = (req, res, next) => {
  const journeyId = req.body.journeyId;
  Journey.findById(journeyId)
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {
      res.json({
        message: 'Error journey not found'
      })
    })
}
// save journey
const store = (req, res, next) => {
  const journey = new Journey({
    title: req.body.title,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    cost: req.body.cost,
    start: req.body.start,
    destination: req.body.destination,
    isItenenaryDocument: req.body.isItenenaryDocument,
    days: req.body.days,
    lat: req.body.lat,
    lon: req.body.lon
  });
  if (req.file) {
    journey.journeyDoc = req.file.path;
  }

  journey.save()
    .then(response => {
      res.json({
        id: response._id,
        message: 'Success'
      });
    })
    .catch(error => {
      res.json({
        message: 'Failed to save journey!'
      });
    });
}

// update the journey

const update = (req, res, next) => {
  let journeyId = req.body.journeyId;

  let updatedJourney = {
    title: req.body.title,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    cost: req.body.cost,
    start: req.body.start,
    destination: req.body.destination,
    isItenenaryDocument: req.body.isItenenaryDocument,
    days: req.body.days,
    lat: req.body.lat,
    lon: req.body.lon
  }

  Journey.findByIdAndUpdate(journeyId, {
    $set: updatedJourney
  })
    .then(response => {
      res.json({
        journeyId: journeyId,
        message: 'Update done'
      });
    })
    .catch(error => {
      res.json({
        message: 'Update failed'
      });
    })
}

const destroy = (req, res, next) => {
  let journeyId = req.body.journeyId;

  Journey.findByIdAndDelete(journeyId)
    .then(response => {
      res.json({
        message: `Deleted successfully ${journeyId}`
      });
    })
    .catch(error => {
      res.json({
        message: 'Update failed'
      });
    })
}

module.exports = {
  index,
  store,
  show,
  destroy,
  update
}
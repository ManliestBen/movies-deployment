import { Performer } from "../models/performer.js"

export {
  newPerformer as new,
  create,
}

function create(req, res) {
  // Needed to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  let birthDate = new Date(req.body.born)
  req.body.born = birthDate.toUTCString()
  Performer.create(req.body, function (err, performer) {
    res.redirect('/performers/new')
  })
}

function newPerformer(req, res) {
  Performer.find({}, function (err, performers) {
    res.render('performers/new', {
      title: 'Add Performer',
      performers: performers,
    })
  })
}
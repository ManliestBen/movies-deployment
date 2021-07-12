import { Performer } from "../models/performer.js"

export {
  newPerformer as new,
  create,
}

function create(req, res) {
  Performer.create(req.body, function (err, performer) {
    console.log(performer)
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
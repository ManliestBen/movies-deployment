import { Movie } from '../models/movie.js'

export {
  newMovie as new,
  create,
  index,
}

function index(req, res) {
  Movie.find({}, function(error, movies) {
    res.render('movies/index', {
      movies: movies,
    })
  })
}

function newMovie(req, res) {
  res.render('movies/new')
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  req.body.cast = req.body.cast.replace(', ', ',')
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(',')
  }
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const movie = new Movie(req.body)
  movie.save(function(err) {
    if (err) return res.render('movies/new')
    res.redirect('/movies')
  })
}
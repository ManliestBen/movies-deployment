import { Movie } from "../models/movie.js"
import { Performer } from "../models/performer.js"

export { 
  newMovie as new, 
  create, 
  index, 
  show, 
  createReview,
  addToCast,
}

function addToCast(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    movie.cast.push(req.body.performerId)
    movie.save(function(err) {
      res.redirect(`/movies/${movie._id}`)
    })
  })
}

function createReview(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    movie.reviews.push(req.body)
    movie.save(function(err) {
      res.redirect(`/movies/${movie._id}`)
    })
  })
}

function show(req, res) {
  Movie.findById(req.params.id)
  .populate('cast')
  .exec(function(err, movie) {
    Performer.find({_id: {$nin: movie.cast}}, function(err, performers) {
      res.render('movies/show', {
        title: 'Movie Detail', 
        movie, movie,
        performers: performers,
      })
    })
  })
}

function index(req, res) {
  Movie.find({}, function (error, movies) {
    res.render("movies/index", {
      movies: movies,
      title: "All movies",
    })
  })
}

function newMovie(req, res) {
  res.render("movies/new", {
    title: "Add Movie",
  })
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key]
  }
  const movie = new Movie(req.body)
  movie.save(function (err) {
    if (err) return res.render("movies/new")
    res.redirect(`/movies/${movie._id}`)
  })
}

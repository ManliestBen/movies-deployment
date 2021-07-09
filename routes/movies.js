import { Router } from "express"
import * as moviesCtrl from '../controllers/movies.js'

export {
  router
}

const router = Router()

/* GET users listing. */
router.get('/', moviesCtrl.index)
router.get('/new', moviesCtrl.new)
router.get('/:id', moviesCtrl.show)
router.post('/', moviesCtrl.create)
router.post('/:id/reviews', moviesCtrl.createReview)
router.post('/:id/performers', moviesCtrl.addToCast)
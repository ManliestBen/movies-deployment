import { Router } from "express"
const router = Router()
import * as moviesCtrl from '../controllers/movies.js'

/* GET users listing. */
router.get('/', moviesCtrl.index)
router.get('/new', moviesCtrl.new)
router.get('/:id', moviesCtrl.show)
router.post('/', moviesCtrl.create)
router.post('/:id/reviews', moviesCtrl.createReview)

export {
  router
}

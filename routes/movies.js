import { Router } from "express"
const router = Router()
import * as moviesCtrl from '../controllers/movies.js'

/* GET users listing. */
router.get('/', moviesCtrl.index)
router.get('/new', moviesCtrl.new)
router.post('/', moviesCtrl.create)

export {
  router
}

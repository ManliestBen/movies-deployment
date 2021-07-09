import { Router } from "express"
import * as performersCtrl from "../controllers/performers.js"

export {
  router
}

const router = Router()

router.get('/new', performersCtrl.new)
router.post("/", performersCtrl.create)
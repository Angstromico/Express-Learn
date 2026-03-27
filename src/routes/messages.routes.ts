import { Router } from "express"

const router = Router()

router.get('/', (req, res) => res.send(['Messages']))
router.post('/', (req, res) => {
  console.log('Updating Messages')
})

export default router


import { Router } from "express"

const router = Router()

router.get('/', (req, res) => res.json({ message: 'The api is working fine!' }))

export default router
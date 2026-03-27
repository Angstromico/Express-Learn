import express from 'express'
import dotenv from 'dotenv'
import router from 'routes'
import getUserMethodAndRoute from 'middlewares/getUserMethodAndRoute'

dotenv.config()

const app = express()

app.use(express.json())

const PORT = Number(process.env.PORT ?? 8080)

app.use(getUserMethodAndRoute())
app.use(router)

app.listen(PORT, () => console.log(`The App is running in Port: ${PORT}`))

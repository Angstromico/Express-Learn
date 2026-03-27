import express from 'express'
import dotenv from 'dotenv'
import router from 'routes'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT ?? 8080)

app.use(router)

app.listen(PORT, () => console.log(`The App is running in Port: ${PORT}`))


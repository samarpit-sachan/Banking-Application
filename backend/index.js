import express from 'express'
import cors from 'cors'
import {apiRouter} from './routes/index.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1", apiRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

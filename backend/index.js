import express from 'express'
import cors from 'cors'

const rootRouter = require("./routes/index")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1", rootRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

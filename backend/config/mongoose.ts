import mongoose from "mongoose"
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
dotenv.config({ path: path.resolve(__dirname, `../.env.${process.env.ENVIROMENT}`) })

export const dbConn = mongoose.createConnection(process.env.MONGODB_URI!, {
    autoCreate: true,
    autoIndex: true,
    directConnection: true
})
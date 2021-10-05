import mongoose from 'mongoose'
import express, { NextFunction, Request, Response } from 'express'
import { routes } from '@shared/http/express/routes'
import { MakeResponse } from './MakeResponse'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

app.use(routes)

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    return (new MakeResponse(res)).error([], err.message)
})

const mongo_url = process.env.MONGODB_URI ?? 'mongodb://localhost:27018'
const port = parseInt(process.env.port || '3000')

mongoose.connect(mongo_url).then(conn => {
    app.listen(port, () => console.log('Iniciado'))
})



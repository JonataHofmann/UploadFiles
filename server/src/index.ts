import 'dotenv/config'
import cors from 'cors'
import express, { Errback, NextFunction, Request, Response } from 'express'
import uploads from './config/multer'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello World')
})

app.post('/csv', uploads.single('file'), (req: Request, res: Response) => {
  console.log(req.file)
  return res.send('Post CSV')
})

app.listen(process.env.APP_PORT, () => {
  console.log(`App listening on ${process.env.APP_PORT}`)
})

export default app

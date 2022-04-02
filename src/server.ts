import express from 'express'
import routes from './routes'

const app = express()

app.use(routes)


const PORT = 3333

app.listen(PORT)
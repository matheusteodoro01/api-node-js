import express, { Response, Request } from 'express'


const app = express()


app.get('/', (request: Request, response: Response) => {
    response.send('Wello Word')
})

const PORT = 3333

app.listen(PORT)
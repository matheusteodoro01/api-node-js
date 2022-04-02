import { Router } from 'express'
import CarController from './controllers/CarController'

const router = Router()

router.use((req, res, next) => {
    console.log(req.method, req.url, res.statusCode)
    next()
})

router.get('/cars', CarController.index)



export default router
import { Router } from 'express'
import CarController from './controllers/CarController'

const router = Router()

router.use((req, res, next) => {
    console.log(req.method, req.url, res.statusCode)
    next()
})

router.get('/cars', CarController.index)
router.get('/car/:id', CarController.findById)
router.post('/car', CarController.create)
router.put('/car/:id', CarController.update)
router.delete('/car/:id', CarController.delete)

export default router
import express from "express"
import indecController from '../controller/index.js'
import bookingRouter from './booking.js'
import userRouter from './room.js'

const router = express.Router()

router.get('/', indecController.home)

router.use('/room', userRouter)
router.use('/booking', bookingRouter)

export default router
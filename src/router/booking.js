import express from "express";
import bookingControl from '../controller/room.js'

const router = express.Router()

router.get('/', bookingControl.bookingDetails)
router.post('/', bookingControl.bookingRoom)
export default router
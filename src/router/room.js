import express from 'express'
import roomController from '../controller/room.js'

const router = express.Router()

router.get('/', roomController.getAllRoom)
router.get('/:id', roomController.getRoomById)
router.post('/', roomController.createRoom)



export default router
import { findRoom, findeIndex } from "../common/helper.js"
const coustome = [
    {
        room_id: 1,
        id: 1,
        name: "bharath",
        date: "01/10/2023",
        start_time: "10.00 am",
        end_time: "12.00 pm"
    },
    {
        room_id: 2,
        id: 2,
        name: "kumar",
        date: "11/10/2023",
        start_time: "10.00 am",
        end_time: "05.00 pm"
    },
    {
        room_id: 3,
        id: 3,
        name: "ajith",
        date: "13/10/2023",
        start_time: "10.00 am",
        end_time: "02.00 pm"
    },

]

const room = [
    {
        room_id: 1,
        type: "Ac",
        seat: 2,
        amenities: {
            bad: 1,
            hall: 1,
            kitchan: 1
        },
        pricePerHour: 1000,
        status: true
    },
    {
        room_id: 2,
        type: "non-Ac",
        seat: 2,
        amenities: {
            bad: 1,
            hall: 1,
            kitchan: 1
        },
        pricePerHour: 500,
        status: true
    },
    {
        room_id: 3,
        type: "party holl",
        seat: 50,
        amenities: {
            bad: 5,
            hall: 1,
            kitchan: 1
        },
        pricePerHour: 2000,
        status: true
    },

]

const getAllRoom = (req, res) => {
    try {
        res.status(200).send({
            message: "Room data fetching seccsfully",
            room
        })

    } catch (error) {
        res.status(500).send({
            message: "Internal server Error"
        })
    }
}

const getRoomById = (req, res) => {
    try {
        const { id } = req.params
        let index = findeIndex(room, id)
        if (index !== -1) {
            res.status(200).send({
                message: "data is fatching suessfully",
                room: room[index]
            })
        }
        else {
            res.status(400).send({
                message: "invalid user id"
            })
        }


    } catch (error) {
        res.status(500).send({
            message: "Internal server Error"
        })
    }
} 

const createRoom = (req, res) => {
    try {
        let id = room.length ? room[room.length - 1].room_id + 1 : 1
        req.body.room_id = id
        req.body.status = false
        room.push(req.body)
        res.status(200).send({
            message: "room data adding"
        })

    } catch (error) {
        res.status(500).send({
            message: "Internal server Error"
        })
    }
}

const bookingDetails = (req, res) => {
    try {
        res.status(200).send({
            message: "booking details fatching secceefuly",
            coustome
        })

    } catch (error) {
        res.status(500).send({
            message: "Internal server Error"
        })
    }
}

const bookingRoom = (req, res) => {
    try {
        let id = coustome.length ? coustome[coustome.length - 1].id + 1 : 1
        let roomIndex = findRoom(room)
        if (roomIndex !== -1) {
            let room_id = roomIndex
            req.body.room_id = room_id
            req.body.id = id
            coustome.push(req.body)
            res.status(200).send({
                message: "room data comming",
                booking: coustome[roomIndex]
            })
        }
        else {
            res.status(200).send({
                message: "No rooms avaliable"
            })
        }


    } catch (error) {
        res.status(500).send({
            message: "Internal server Error"
        })
    }
}



export default {
    getAllRoom,
    getRoomById,
    createRoom,
    bookingRoom,
    bookingDetails
}
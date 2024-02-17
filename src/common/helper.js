const findeIndex = (array, id) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].room_id == id)
            return i
    }
    return -1
}
const findRoom = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].status === false) {
            return array[i].room_id
        }
    }
    return -1
}


export {
    findeIndex,
    findRoom
}
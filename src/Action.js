export const addData = (value) => {
    return {
        type: 'ADD_DATA',
        payload: value
    }
}
export const deleteData = (value) => {
    return {
        type: 'DELETE_DATA',
        payload: value
    }
}
export const editData = (value) => {
    return {
        type: 'EDIT_DATA',
        payload: value
    }
}
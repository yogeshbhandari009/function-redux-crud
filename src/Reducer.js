const initialState = {
    user: [],
    editData: {}
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                user: action.payload
            }
        case 'DELETE_DATA':
            return {
                ...state,
                user: state.user.filter((data, index) => index !== action.payload)
            }
        case 'EDIT_DATA':
            return {
                ...state,
                editData: state.user.find((data, index) => index === action.payload)
            }

        default:
            return state;
    }

}
export default Reducer;
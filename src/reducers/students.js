export default function (state = {}, action) {
    console.log(action)
    switch (action.type) {
        case "SET_STUDENTS":
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case "TOGGLE_LOADING":
            return{
                ...state,
                loading: !state.loading
            }
        default:
            return state;
    }
}

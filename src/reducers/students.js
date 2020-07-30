export default function (state = {}, action) {
    switch (action.type) {
        case "SET_STUDENTS":
            return {
                ...state,
                students: action.payload
            };
        default:
            return state;
    }
}

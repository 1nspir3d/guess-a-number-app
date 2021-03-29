export default function selectedNumberReducer(state = '', action) {
    switch (action.type) {
        case 'SET_NUMBER':
            return action.number;
        default:
            return state;
    }
}

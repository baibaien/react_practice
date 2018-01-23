
const initState = {count: 0};
export default function couter(state = initState, action) {
    switch (action.type) {
        case 'increase':
            console.log(1,action.type, state);
            return {count: state.count + 1};
        case 'decrease':
            console.log(2,action.type, state);
            return {count: state.count - 1};
        default:
            console.log(3,action.type, state);
            return state
    }
}
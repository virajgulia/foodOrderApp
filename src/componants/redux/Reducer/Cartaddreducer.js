let initialstate = []
function Cartaddreducer(state = initialstate, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log(action.payload)
            return [...state, action.payload];
        case 'DELETE_CART_ITEM':
            let myindex = state.indexOf(action.payload)
            state.splice(myindex, 1)
            return [...state];
        case 'FINAL_PAYMENT':
            return []
        default:
            return state
    }
}
export default Cartaddreducer;
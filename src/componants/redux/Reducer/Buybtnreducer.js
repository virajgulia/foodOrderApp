let initialstate = []
function Buybtnreducer(state = initialstate, action) {
    switch (action.type) {
        case 'BUY_BTN_CLICKED':
            console.log(action.payload.obj)
            return [{ ...action.payload.obj, category: action.payload.category }]
        default:
            return state
    }
}
export default Buybtnreducer;
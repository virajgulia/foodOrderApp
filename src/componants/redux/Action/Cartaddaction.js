
export function Cartaddaction(cartdata) {
    return {
        type: 'ADD_TO_CART',
        payload: cartdata
    }
}
export function Deletecartitem(deleteitem) {
    return {
        type: 'DELETE_CART_ITEM',
        payload: deleteitem
    }
}
export function Finalpayment() {
    return {
        type: 'FINAL_PAYMENT'
    }
}
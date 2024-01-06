export const ADD_TO_CART= "ADD_TO_CART"
export const REMOVE_FROM_CART= "REMOVE_FROM_CART"

export function addToCart(car){
    return{
        type : ADD_TO_CART,   //gönderilen aksiyon
        payload: car           //(state)sepete göndermek istediğim değer
    }
}

export function removeFromCart(car){
    return{
        type : REMOVE_FROM_CART,
        payload: car
    }
}
import { BUY_ICE_CREAM } from "./iceCreamTypes";

export const buyIceCream = (quantity=1) => {
    return {
        type: BUY_ICE_CREAM,
        payload: quantity
    }
}
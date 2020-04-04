import { BUY_ICE_CREAM } from './iceCreamTypes';

const initialState = {
    noOfIceCreams: 15
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams - action.payload
            }
        default:
            return state;
    }
}

export default iceCreamReducer;
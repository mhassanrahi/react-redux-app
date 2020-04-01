import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../../redux';

const IceCream = () => {

    const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
        <h3>Ice cream Available: {noOfIceCreams}</h3>
        <button onClick={() =>dispatch((buyIceCream()))}>Buy Ice cream</button>
        </div>
    )
}

export default IceCream;

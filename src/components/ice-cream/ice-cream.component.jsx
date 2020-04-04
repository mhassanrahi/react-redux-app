import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../../redux';

const IceCream = () => {
    const [quantity, setQuantity] = useState(1);
    
    const handleChange = event => {
        const {value} = event.target;
        setQuantity(value)
    }

    const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCreams)
    const dispatch = useDispatch()

    return (
        <div>
        <h3>Ice cream Available: {noOfIceCreams}</h3>
        <input type='text' name='quantity' value={quantity} onChange={handleChange} />
        <button onClick={() =>dispatch((buyIceCream(quantity)))}>Buy {quantity} Ice cream (s)</button>
        </div>
    )
}

export default IceCream;

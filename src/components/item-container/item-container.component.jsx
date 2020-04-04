import React, {useState} from 'react';
import {useDispatch } from 'react-redux';

const ItemContainer = ({item, noOfItem, action }) => {
    const [quantity, setQuantity] = useState(1);
    const handleChange = event => {
        const {value} = event.target;
        setQuantity(value)
    }

    const dispatch = useDispatch()
    return (
        <div>
            <h3>{item} Available: {noOfItem}</h3>
            <input type='text'
             name='quantity' value={quantity}
             onChange={handleChange}
            />
            <button
             onClick={
                 () =>dispatch((action(quantity)))
            }
            >
            Buy {quantity} {item } (s)
            </button>
            
        </div>
    )
}

export default ItemContainer;

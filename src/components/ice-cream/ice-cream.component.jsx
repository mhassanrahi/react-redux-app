import React from 'react';
import { useSelector } from 'react-redux';
import { buyIceCream } from '../../redux';
import ItemContainer from '../item-container/item-container.component';

const IceCream = () => {

    const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCreams)

    return (
        <div>
        <ItemContainer item='Ice Cream' noOfItem={noOfIceCreams} action={buyIceCream} />        
        </div>
    )
}

export default IceCream;

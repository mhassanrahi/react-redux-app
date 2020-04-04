import React from 'react';
import { useSelector } from 'react-redux';
import { buyCake } from '../../redux';
import ItemContainer from '../item-container/item-container.component';

const Cake = () => {

    const noOfCakes = useSelector(state => state.cake.noOfCakes)

    return (
        <div>
            <ItemContainer item='Cake' noOfItem={noOfCakes} action={buyCake} />
        </div>
    )
}

export default Cake;

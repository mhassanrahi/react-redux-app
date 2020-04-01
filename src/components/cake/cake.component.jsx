import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../../redux';

const Cake = () => {

    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
        <h3>Cakes Available: {noOfCakes}</h3>
        <button onClick={() =>dispatch((buyCake()))}>Buy cake</button>
        </div>
    )
}

export default Cake;

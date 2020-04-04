import React, {useState} from 'react';
import { buyCake } from '../../redux';
import { connect } from 'react-redux';

const CakeContainer = ({noOfCakes, buyCake}) => {
    const [quantity, setQuantity] = useState(1);

    
    const handleChange = event => {
        const {value} = event.target;

        setQuantity(value)
    }

    return (
        <div>
        <h3>Cakes Available: {noOfCakes}</h3>
        <input type='text' name='quantity' value={quantity} onChange={handleChange}  />
        <button onClick={() =>buyCake(quantity)}>Buy {quantity} cake(s)</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: quantity => dispatch(buyCake(quantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

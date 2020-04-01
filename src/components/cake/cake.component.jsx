import React from 'react';

import {connect} from 'react-redux';
import { buyCake } from '../../redux/index'

const Cake = ({noOfCakes, buyCake}) => {
    return (
        <div>
        <h3>Cakes Available: {noOfCakes}</h3>
        <button onClick={buyCake}>Buy cake</button>
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        noOfCakes: state.noOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )
    (Cake);

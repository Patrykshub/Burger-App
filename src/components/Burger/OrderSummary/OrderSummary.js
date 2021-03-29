import React from 'react';
import Aaux from '../../../hoc/Aaux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
        <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>)
    });
    <li></li>
    return (
        <Aaux>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>The Total Price:${props.price.toFixed(2)} </strong> </p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>

        </Aaux>
    );

};

export default orderSummary;
import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
               return<BurgerIngredient key={igKey + i} type={igKey} />;
            }) // tworzy array o długości zależnej od ilości danego składnika
            // value objektu jest potrzebne do ilości jednego składnika a key jest do różnych składników
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if (transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients Madafaka!</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients }
            <BurgerIngredient type="bread-bottom" />


        </div>
    );
};

export default burger;
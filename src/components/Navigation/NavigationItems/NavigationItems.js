import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import burger from '../../Burger/Burger'

const navigationItems = (props) => (
    <ul className={classes.navigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem></NavigationItem>/>
        <NavigationItem link="/">Checkout</NavigationItem>/>

    </ul>

);

export default navigationItems;
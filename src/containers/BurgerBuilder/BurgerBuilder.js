import React, { Component } from 'react';
import styles from "./style.module.css"

import Aaux from '../../hoc/Aaux';

class BurgerBuilder extends Component {
    render (){
        return (
            <Aaux>
               <div className={styles.burger}>Burger</div> 
               <div>Build Controls</div> 
            </Aaux>

        );
    
    }
}

export default BurgerBuilder;
import React, { Component } from 'react';

import Aaux from '../../hoc/Aaux';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {
    render (){
        return (
            <Aaux>
               <Burger /> 
               <div>Build Controls</div> 
            </Aaux>

        );
    
    }
}

export default BurgerBuilder;
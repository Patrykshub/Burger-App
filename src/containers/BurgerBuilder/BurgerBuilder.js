import React, { Component } from 'react';

import Aaux from '../../hoc/Aaux';

class BurgerBuilder extends Component {
    render (){
        return (
            <Aaux>
               <div>Burger</div> 
               <div>Build Controls</div> 
            </Aaux>

        );
    
    }
}

export default BurgerBuilder;
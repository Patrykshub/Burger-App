import React from 'react';
import classes from './Layout.css';
import Aaux from '../../hoc/Aaux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aaux>
        <Toolbar></Toolbar>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>

    </Aaux>    
);

export default layout;
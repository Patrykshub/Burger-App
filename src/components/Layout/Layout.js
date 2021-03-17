import React from 'react';
import classes from './Layout.css';
import Aaux from '../../hoc/Aaux';

const layout = (props) => (
    <Aaux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>

    </Aaux>    
);

export default layout;
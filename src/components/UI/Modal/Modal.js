import React from 'react';

import classes from './Modal.css'
import Aaux from '../../../hoc/Aaux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => ( 
    <Aaux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
        </div>
    </Aaux>
);
export default modal;
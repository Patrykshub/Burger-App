import React, { Component } from 'react';
import classes from './Layout.css';
import Aaux from '../../hoc/Aaux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    render () {
        return (    <Aaux>
            <Toolbar />
            <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
    
        </Aaux>  )

    }
}

export default Layout;
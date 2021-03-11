import React from 'react';

import Aaux from '../../hoc/Aaux';

const layout = (props) => (
    <Aaux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aaux>    
);

export default layout;
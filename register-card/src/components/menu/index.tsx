import React, { Component } from 'react';
import Header from '../header'

class Menu extends Component{
    render() {
        return (
            <div className="register-menu">
                <Header formTitle="Menu" icon="arrowleft" />
                <div className="menu-body">
                    This is Menu Content
               </div>
            </div>
        )
    }
}

export default Menu;
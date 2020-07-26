import React, { Component } from 'react';
import Header from '../header'

const BREAK_POINT = 767;

interface IProps {
    menuStatus: boolean
}

interface IState{
    initPos: string
}

class Menu extends Component<IProps,IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            initPos: this.getWindowWidth() > BREAK_POINT ? '-601px' : `-${this.getWindowWidth()+1}px`
        }
    }

    getWindowWidth = () => {
        return document.body.clientWidth || document.documentElement.clientWidth;
    }


    render() {
        const { menuStatus } = this.props;
        const {initPos} = this.state;
        const style = menuStatus ?{ left: 0 }:{ left: initPos } as React.CSSProperties;
        return (
            <div
                className="register-menu"
                style={style} 
            >
                <Header formTitle="Menu" icon="arrowleft" />
                <div className="menu-body">
                    This is Menu Content
               </div>
            </div>
        )
    }
}

export default Menu;
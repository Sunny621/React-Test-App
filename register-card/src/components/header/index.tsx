import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { store } from '../../redux'
import { toggleMenu } from '../../redux/actions'

interface IProps {
    formTitle: string,
    icon: string
}

class Header extends Component<IProps> {

    render() {
        const { formTitle, icon } = this.props;

        return (
            <div className="form-header">
                {icon === 'bars' ?
                    <FontAwesomeIcon
                        icon={faBars}
                        className="header-icon"
                        onClick={() => { store.dispatch(toggleMenu(true)) }}
                    /> :
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="header-icon"
                        onClick={() => { store.dispatch(toggleMenu(false)) }}
                    />}
                <p className="header-title">{formTitle}</p>
            </div>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {

    render() {
        return (
            <div className="form-header">
                <FontAwesomeIcon icon={faBars} className="header-icon" />
                <p className="header-title">Register Card Form</p>
            </div>
        )
    }
}

export default Header;
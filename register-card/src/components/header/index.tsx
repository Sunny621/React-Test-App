import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
                    /> :
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="header-icon"
                    />}
                <p className="header-title">{formTitle}</p>
            </div>
        )
    }
}

export default Header;
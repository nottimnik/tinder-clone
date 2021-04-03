import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import Logo from './../../assets/logo.png'
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
    return (
        <div className="header">

            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />    
            </IconButton>

            <img
                className="header__logo"
                src={Logo}
                alt="header__logo"
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>

        </div>
    )
}

export default Header

import React from 'react';
import './navButton.css';

const NavButton = ({href, name}) => {
    return <div class="navButton-div"><a className = "nav-button" href={href}>{name}</a></div>
        
}

export default NavButton;
import React from 'react'
import "./Header.css"
import TeslaLogo from '../assets/teslaLogoSmall.svg'
const Header = () => {
    return (
        <div className="header">
            <div class="header_logo">
                <img src={TeslaLogo} alt="TeslaLogo"/>
            </div>
            <div class="header_center">
                
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>
            <div class="header_right">
                <p>shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    )
}

export default Header

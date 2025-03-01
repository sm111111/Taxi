import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='Footer-container'>

            <div className="wrapper-top-footer">

                <div className="insidetopFooter">
                    <span>address</span>
                    <p>Jl. Merdeka Raya No.73B, Kuta,</p>
                    <p>Kabupaten Badung, Bali</p>
                </div>

                <div className="insidetopFooter">
                    <span>address</span>
                    <p>Jl. Merdeka Raya No.73B, Kuta,</p>
                    <p>Kabupaten Badung, Bali</p>
                </div>

                <div className="insidetopFooter">
                    <span>address</span>
                    <p>Jl. Merdeka Raya No.73B, Kuta,</p>
                    <p>Kabupaten Badung, Bali</p>
                </div>

                <div className="insidetopFooter">
                    <span>Email</span>
                    <div className="insidetopFooter-last">
                        <input type="text" />
                        <input type="submit" value="Send" />
                    </div>
                </div>

            </div>

            <div className="wrapper-bottom-footer">
                <p>© 2025 this is made by me using mern</p>
                <img src="https://fse.jegtheme.com/taxico/wp-content/uploads/sites/38/2025/01/taxico-logo.webp" alt="" />

                <div className="privacy-tc">
                    <Link to='/' className='privacy-tc-link'>privacy</Link>
                    <Link to='/' className='privacy-tc-link'>term condition</Link>

                </div>
            </div>

        </div>
    )
}

export default Footer
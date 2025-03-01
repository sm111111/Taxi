import React from 'react'
import './Verified.css'
import { BsPhoneFlip } from "react-icons/bs";


const Verified = () => {
    return (
        <div className='Verified-container'>
            <div className="Verified-icon">
                <BsPhoneFlip />
            </div>

            <div className="Verified-result">

                <div className="Verified-result-inside">
                    <h1>Verified</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis vitae aspernatur rerum debitis sunt unde cum doloremque eaque in accusantium.</p>
                    <span>login</span>
                </div>
            </div>

        </div>
    )
}

export default Verified
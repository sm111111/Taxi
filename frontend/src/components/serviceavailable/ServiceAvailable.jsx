import React from 'react'
import './ServiceAvailable.css'
import { IoCall } from "react-icons/io5";


const ServiceAvailable = () => {
    return (
        <div className='ServiceAvailable-container'>
            <h3>Call 24-Hour Service Available</h3>
            <h1>Call Now & Book Your Taxi For Your Next Ride.</h1>
            <p><IoCall className='IoCall-icon' /> (021) 111 444 90</p>
        </div>
    )
}

export default ServiceAvailable
import React from 'react'
import './DashBoardCard.css'
import { IoMdPerson } from "react-icons/io";


const DashBoardCard = ({ }) => {
    return (
        <div className="DashBoardCard-card-container">

            <div className='DashBoardCard-container'>
                <IoMdPerson className='IoMdPerson-icon' />
                <div className="inside-dashboard">
                    <h4>total passenger</h4>
                    <h1>872</h1>
                </div>
            </div>

            <div className='DashBoardCard-container'>
                <IoMdPerson className='IoMdPerson-icon' />
                <div className="inside-dashboard">
                    <h4>total passenger</h4>
                    <h1>872</h1>
                </div>
            </div>

            <div className='DashBoardCard-container'>
                <IoMdPerson className='IoMdPerson-icon' />
                <div className="inside-dashboard">
                    <h4>total passenger</h4>
                    <h1>872</h1>
                </div>
            </div>

            <div className='DashBoardCard-container'>
                <IoMdPerson className='IoMdPerson-icon' />
                <div className="inside-dashboard">
                    <h4>total passenger</h4>
                    <h1>872</h1>
                </div>
            </div>

        </div>
    )
}

export default DashBoardCard
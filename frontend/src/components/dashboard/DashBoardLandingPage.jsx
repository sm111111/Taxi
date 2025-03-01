import React from 'react'
import './DashBoardLandingPage.css'
import DashBoardCard from './DashBoardCard'
import DashBoardChart from './DashBoardChart'

const DashBoardLandingPage = () => {
    return (
        <div className='DashBoardLandingPage-container'>

            <h1>DashBoard</h1>
            <div className="card-field">
                <DashBoardCard />
            </div>


            <DashBoardChart />

        </div>
    )
}

export default DashBoardLandingPage
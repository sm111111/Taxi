import React from 'react'
import './HeroSection.css'
import Orderridecuate from '../assets/img/Orderridecuate.png'

const HeroSection = () => {
    return (
        <div className='HeroSection-container'>

            <div className="leftSide-HeroSection">
                <div className="insideLeft-wrapper">
                    <h3>Taxico Most Trusted Cab</h3>
                    <h1>Enjoy Your Comfortable Trip.</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h3>

                    <button className='getting-started-btn'>getting started</button>
                </div>
            </div>



            <div className="rigthSide-HeroSection">
                <div className='rigthSideImg-wrraper'>
                    <img src={Orderridecuate} alt="" />
                </div>
            </div>

        </div>
    )
}

export default HeroSection
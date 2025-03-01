import React from 'react'
import './MeetOurCarsCard.css'

const MeetOurCarsCard = ({ car_img, car_name, car_ride_price, car_model, car_year, car_gear, car_cooling }) => {
    return (
        <div className='MeetOurCarsCard-container'>
            <div className="img-wrraper">
                <img src={car_img} alt={car_name} />
            </div>

            <div className="MeetOurCarsCard-name-price">
                <span>{car_name}</span>
                <p>$ {car_ride_price}/day</p>
            </div>

            <h6>{car_model}</h6>

            <div className="bottom-MeetOurCarsCard">
                <p>{car_year}</p>
                <p>{car_gear}</p>
                <p>{car_cooling}</p>
            </div>

        </div>
    )
}

export default MeetOurCarsCard
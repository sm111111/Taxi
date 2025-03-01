import React, { useEffect, useState } from 'react'
import './MeetOurCars.css'
// import { FaCarSide } from "react-icons/fa";
import MeetOurCarsCard from './MeetOurCarsCard'
import axios from 'axios'

const MeetOurCars = () => {

    const [carData, setCarData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("all");

    useEffect(() => {
        axios.get('http://localhost:5000/api/cars')
            .then(response => {
                setCarData(response.data)
                setFilteredData(response.data);
            })
            .catch((error) => {
                console.error('error is there', error)
            })
    }, [])


    const handleChangeBeetwenCatrgaory = (filter) => {
        setSelectedFilter(filter)

        if (filter === "all") {
            setFilteredData(carData)
        } else {
            const chooseOption = carData.filter(car => car.car_model.toLowerCase() === filter.toLowerCase())
            setFilteredData(chooseOption);
        }
    }



    return (
        <div className='MeetOurCars-container'>

            <h1>Meet Our Cars</h1>

            <div className="MeetOurCars-navbar">

                <div className="caricon-name-MeetOurCars" onClick={() => handleChangeBeetwenCatrgaory('all')}>

                    <p>All</p>
                </div>

                <div className="caricon-name-MeetOurCars" onClick={() => handleChangeBeetwenCatrgaory('suv')}>

                    <p>suv</p>
                </div>

                <div className="caricon-name-MeetOurCars" onClick={() => handleChangeBeetwenCatrgaory('local')}>

                    <p>local</p>
                </div>

                <div className="caricon-name-MeetOurCars" onClick={() => handleChangeBeetwenCatrgaory('Coupe')}>

                    <p>Coupe</p>
                </div>

                <div className="caricon-name-MeetOurCars" onClick={() => handleChangeBeetwenCatrgaory('Electric Sedan')}>

                    <p>Electric</p>
                </div>

                <div className="caricon-name-MeetOurCars" onClick={() => handleChangeBeetwenCatrgaory('sedan')}>

                    <p>sedan</p>
                </div>
            </div>

            <div className="MeetOurCars-result">
                {
                    filteredData.slice(0, 8).map((carItem, index) => {
                        return <MeetOurCarsCard
                            key={index}
                            car_img={carItem.car_img}
                            car_name={carItem.car_name}
                            car_ride_price={carItem.car_ride_price}
                            car_model={carItem.car_model}
                            car_year={carItem.car_year}
                            car_gear={carItem.car_gear}
                            car_cooling={carItem.car_cooling}

                        />
                    })
                }
            </div>

        </div>
    )
}

export default MeetOurCars
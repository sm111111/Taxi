import React, { useEffect, useState } from 'react'
import './DashBoardType.css'
import axios from 'axios'

const DashBoardType = ({ model_name, model_status, seats }) => {
    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        axios.get('https://taxi-14en.onrender.com/api/local')
            .then(response => {
                setTypeData(response.data)
            })
            .catch((err) => {
                console.error('there is any error in the type', err)
            })

    }, [])


    return (
        <div className='DashBoardType-container'>

            <div className="DashBoardType-top">local cars</div>

            <div className="inside-DashBoardType">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>rating</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            typeData.map((local_cars, index) => {
                                return <tr key={index}>
                                    <td>{local_cars.model_name}</td>
                                    <td>{local_cars.model_status}</td>
                                    <td>{local_cars.seats} seats</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DashBoardType



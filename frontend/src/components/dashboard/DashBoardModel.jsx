import React, { useEffect, useState } from 'react'
import './DashBoardModel.css'
import axios from 'axios'


const DashBoardModel = ({ type_carname, type_model, type_rating }) => {

    const [modelCars, setModelsCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/luxary')
            .then(response => {
                console.log('Response data:', response.data);
                setModelsCars(response.data);
            })
            .catch((err) => {
                console.error('error in the model', err)
            })

    }, [])


    return (
        <div className='DashBoardModel-container'>

            <div className="DashBoardModel-top">Luxury cars</div>

            <div className="inside-DashBoardModel">
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
                            modelCars.map((model_item, index) => {
                                return <tr key={index}>
                                    <td>{model_item.type_carname}</td>
                                    <td>{model_item.type_model}</td>
                                    <td> {model_item.type_rating}</td>
                                </tr>
                            })

                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default DashBoardModel
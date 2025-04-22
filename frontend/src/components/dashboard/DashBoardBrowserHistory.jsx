import React, { useState, useEffect } from 'react';
import './DashBoardBrowserHistory.css';
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccessToast, showErrorToast } from "../assets/utils/toastNotifications";

const DashBoardBrowserHistory = () => {
    const [browserHistory, setBrowserHistory] = useState([]);


    useEffect(() => {
        axios.get('https://taxi-14en.onrender.com/api/customerData')
            .then(response => {
                setBrowserHistory(response.data);
            })
            .catch((err) => {
                console.error('Error fetching the booking history:', err);
            });
    }, []);



    const deleteTheEntry = async (Id) => {
        try {
            const response = await axios.delete(`https://taxi-14en.onrender.com/api/customerData/${Id}`);
            console.log(response.data.message);
            setBrowserHistory(browserHistory.filter(item => item.id !== id));

        } catch (error) {
            console.error("Error deleting customer:", error);
            showSuccessToast("Item Has Deleted Permanetaly");
        }
    }



    return (
        <div className='DashBoardBrowserHistory-container'>
            <ToastContainer />
            <div className="inside-DashBoardBrowserHistory">
                <h2 className='Passengers'>Booking History</h2>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Number</th>
                                <th>Gender</th>
                                <th>Created At</th>
                                <th>Paid Amount</th>
                                <th>Drop Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                browserHistory.map((passenger_item) => (
                                    <tr key={passenger_item.id}>
                                        <td>{passenger_item.fillName}</td>
                                        <td>+91 {passenger_item.number}</td>
                                        <td>{passenger_item.passenger}</td>
                                        <td>{passenger_item.pickUpDate}</td>
                                        <td>$ {passenger_item.PaidAmount}</td>
                                        <td>{passenger_item.DropAddress}</td>
                                        <td className="action-icons">
                                            <Link to={`/bookingdetails/${passenger_item.id}`}>
                                                <MdEdit className="table-icons" />
                                            </Link>
                                            <AiOutlineDelete className="table-icons" onClick={() => deleteTheEntry(passenger_item.id)} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashBoardBrowserHistory;

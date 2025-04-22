import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookingDetails.css';
import undraw_stranded from '../assets/img/undraw_stranded.png'


const BookingDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        axios.get(`https://taxi-14en.onrender.com/api/customerData/${id}`)
            .then(response => setCustomer(response.data))
            .catch(error => console.error("Error fetching details:", error));
    }, [id]);

    if (!customer) {
        return <h2>Form submited sucessfully......</h2>;
    }

    return (
        <div className="booking-details-container">
            <div className="booking-details-card">
                <h2>Booking Details</h2>
                <p><strong>Name:</strong> {customer.fillName}</p>
                <p><strong>Number:</strong> {customer.number}</p>
                <p><strong>Gender:</strong> {customer.passenger}</p>
                <p><strong>Pick Up Date:</strong> {customer.pickUpDate}</p>
                <p><strong>Pick Up Address:</strong> {customer.pickUPAddress}</p>
                <p><strong>Drop Address:</strong> {customer.DropAddress}</p>
                <p><strong>Wallet Amount:</strong> ${customer.PaidAmount}</p>
                <div className="button-field">
                    <button onClick={(e) => { e.preventDefault(); navigate(-1) }}>Go Back</button>
                    <button onClick={(e) => { e.preventDefault(); navigate('/paymentpage') }}>pay now</button>
                </div>
            </div>
            {/* Image Section */}
            <div className="booking-details-image">
                {/* Replace the src with the actual image URL if available */}
                <img src={undraw_stranded} alt="Booking" />
            </div>


        </div>
    );
};

export default BookingDetails;

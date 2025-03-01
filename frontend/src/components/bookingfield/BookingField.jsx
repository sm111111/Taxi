import React, { useState } from 'react';
import './BookingField.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccessToast, showErrorToast } from "../assets/utils/toastNotifications";

const BookingField = () => {
    const [bookYourTravel, setBookYourTravel] = useState({
        fillName: "",
        number: "",
        passenger: "",
        pickUpDate: "",
        pickUPAddress: "",
        DropAddress: "",
        PaidAmount: "",
    });

    const navigate = useNavigate();


    const saveAndWork = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!bookYourTravel.fillName || !bookYourTravel.number || !bookYourTravel.passenger ||
            !bookYourTravel.pickUpDate || !bookYourTravel.pickUPAddress || !bookYourTravel.DropAddress ||
            !bookYourTravel.PaidAmount) {
            showErrorToast("Please fill out all fields!");
            return;
        }

        try {
            await axios.post(`http://localhost:5000/api/customerData`, bookYourTravel);
            showSuccessToast("Redirecting to the next page...");

            setBookYourTravel({
                fillName: "",
                number: "",
                passenger: "",
                pickUpDate: "",
                pickUPAddress: "",
                DropAddress: "",
                PaidAmount: "",
            });

            // Navigate after a short delay
            setTimeout(() => navigate('/bookingdetails/:id'), 2000);
        } catch (error) {
            console.error('Error submitting form:', error);
            showErrorToast("Error submitting form. Try again later!");
        }
    };


    return (
        <div className='BookingField-container'>
            <ToastContainer />
            <h1>Check Your Travel</h1>

            <form className="BookingField-wrapper" onSubmit={saveAndWork}>
                <div className="inside-booking-name-input">
                    <label>Name</label>
                    <input type="text"
                        placeholder="Your Name"
                        value={bookYourTravel.fillName}
                        onChange={(e) => setBookYourTravel({ ...bookYourTravel, fillName: e.target.value })}
                        name="fillName"
                        required
                    />
                </div>

                <div className="inside-booking-name-input">
                    <label>Number</label>
                    <input type="number"
                        placeholder="Telephone"
                        value={bookYourTravel.number}
                        onChange={(e) => setBookYourTravel({ ...bookYourTravel, number: e.target.value })}
                        name="number"
                        required
                    />
                </div>

                <div className="inside-booking-name-input">
                    <label>Gender</label>
                    <input type="text"
                        placeholder="Male / Female"
                        value={bookYourTravel.passenger}
                        onChange={(e) => setBookYourTravel({ ...bookYourTravel, passenger: e.target.value })}
                        name="passenger"
                        required
                    />
                </div>

                <div className="inside-booking-name-input">
                    <label>Pick Up Date</label>
                    <input type="date"
                        value={bookYourTravel.pickUpDate}
                        onChange={(e) => setBookYourTravel({ ...bookYourTravel, pickUpDate: e.target.value })}
                        name="pickUpDate"
                        required
                    />
                </div>

                <div className="inside-booking-name-input">
                    <label>Pick Up Address</label>
                    <input type="text"
                        placeholder="Start Destination"
                        value={bookYourTravel.pickUPAddress}
                        onChange={(e) => setBookYourTravel({ ...bookYourTravel, pickUPAddress: e.target.value })}
                        name="pickUPAddress"
                        required
                    />
                </div>

                <div className="inside-booking-name-input">
                    <label>Drop Address</label>
                    <input type="text"
                        placeholder="End Destination"
                        value={bookYourTravel.DropAddress}
                        onChange={(e) => setBookYourTravel({ ...bookYourTravel, DropAddress: e.target.value })}
                        name="DropAddress"
                        required
                    />
                </div>

                <div className="inside-booking-name-input">
                    <label>Ride Fare</label>
                    <input type="text"
                        placeholder="Enter Ride Price"
                        value={bookYourTravel.anyQuery}
                        onChange={(e) => setBookYourTravel({ ...bookYourTravel, PaidAmount: e.target.value })}
                        name="PaidAmount"
                    />
                </div>

                <div className="inside-booking-name-input">
                    <label htmlFor="">conferm</label>
                    <input type="submit" value="Book Taxi Now" />
                </div>
            </form>
        </div>
    );
};

export default BookingField;

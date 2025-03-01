import React from 'react';
import './ServicesPage.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'
import rideamico from '../assets/img/rideamico.png';


const ServicesPage = () => {

    const serviceNavigate = useNavigate();

    const redirectToTheBookingDetials = () => {
        serviceNavigate('/bookingfield')
    }


    return (
        <div className="services-page">
            <div className="services-header">
                <h1>Our Taxi Services</h1>
                <p>Explore our wide range of services designed to meet your travel needs with comfort, speed, and safety.</p>
            </div>

            <div className="services-container">
                {/* Service 1: City Rides */}
                <div className="service-item">
                    <div className="service-image" onClick={redirectToTheBookingDetials}>
                        <img src={rideamico} alt="City Ride" />
                    </div>
                    <div className="service-content">
                        <h2>City Rides</h2>
                        <p>
                            Whether you're heading to work, going shopping, or need a quick ride around the city, our city rides offer fast, reliable, and affordable transportation.
                            Our drivers are familiar with the city and will ensure that you reach your destination on time and in comfort.
                        </p>
                    </div>
                </div>

                {/* Service 2: Airport Transfers */}
                <div className="service-item reverse">
                    <div className="service-content">
                        <h2>Airport Transfers</h2>
                        <p>
                            Arriving at or departing from the airport? Our airport transfer services are the best choice for seamless transportation.
                            With reliable pick-up and drop-off times, you can count on us to get you to the airport or your hotel quickly and stress-free.
                        </p>
                    </div>
                    <div className="service-image" onClick={redirectToTheBookingDetials}>
                        <img src={rideamico} alt="Airport Ride" />
                    </div>
                </div>

                {/* Service 3: Luxury Rides */}
                <div className="service-item">
                    <div className="service-image" onClick={redirectToTheBookingDetials}>
                        <img src={rideamico} alt="Luxury Ride" />
                    </div>
                    <div className="service-content">
                        <h2>Luxury Rides</h2>
                        <p>
                            For those special occasions when only the best will do, our luxury ride services provide you with a premium experience.
                            Travel in style with our selection of high-end vehicles, driven by professional chauffeurs, ensuring comfort and sophistication.
                        </p>
                    </div>
                </div>

                {/* Service 4: Outstation Rides */}
                <div className="service-item reverse" onClick={redirectToTheBookingDetials}>
                    <div className="service-content">
                        <h2>Outstation Rides</h2>
                        <p>
                            Planning a trip out of town? Our outstation rides offer comfortable, reliable, and affordable rides for long-distance travel.
                            Whether it's a weekend getaway or a business trip, we have you covered with our modern fleet and professional drivers.
                        </p>
                    </div>
                    <div className="service-image">
                        <img src={rideamico} alt="Outstation Ride" />
                    </div>
                </div>
            </div>

            <div className="services-footer">
                <h3>Ready to Book a Ride?</h3>
                <p>Contact us today to book any of our services or to get a quote. We’re here to make your travel experience seamless and stress-free.</p>
            </div>


        </div>
    );
};

export default ServicesPage;

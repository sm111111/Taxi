import React, { useState } from 'react';
import './MapPage.css'; // Import your CSS file
import { IoCloseCircle } from 'react-icons/io5'; // Exit icon
import Footer from '../footer/Footer'

const MapPage = () => {
    const [searchLocation1, setSearchLocation1] = useState('');
    const [searchLocation2, setSearchLocation2] = useState('');

    const clearSearch1 = () => {
        setSearchLocation1('');
    };

    const clearSearch2 = () => {
        setSearchLocation2('');
    };

    return (
        <div className="map-page">

            <div className="search-box-container">
                <div className="search-box">
                    <input
                        type="text"
                        value={searchLocation1}
                        onChange={(e) => setSearchLocation1(e.target.value)}
                        placeholder="Pick Up Location"
                    />
                    <IoCloseCircle className="exit-icon" onClick={clearSearch1} />
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        value={searchLocation2}
                        onChange={(e) => setSearchLocation2(e.target.value)}
                        placeholder="Drop Location"
                    />
                    <IoCloseCircle className="exit-icon" onClick={clearSearch2} />
                </div>
            </div>

            <div className="map-container">
                {/* Embedding Google Maps via iframe */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093654!2d144.95373531550458!3d-37.81720974202188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1df49d7%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614970538690!5m2!1sen!2sus"
                    width="100%"
                    height="600"
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>

            <Footer />
        </div>
    );
};

export default MapPage;

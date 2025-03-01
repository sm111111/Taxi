import React from 'react';
import './AboutPage.css';
import rideamico from '../assets/img/rideamico.png';
import Footer from '../footer/Footer'

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* First Section: Left content, Right Image */}
            <div className="about-container">
                <div className="left-side">
                    <h2>About Our Taxi Service</h2>
                    <p>
                        Our taxi service has been a trusted partner in your daily commute for over 10 years. We provide
                        reliable, fast, and comfortable taxi rides at competitive prices. Our fleet of modern vehicles ensures
                        that you travel in style and comfort, whether it's a short trip around the city or a long journey.
                    </p>
                    <p>
                        Our professional drivers are dedicated to ensuring your safety and satisfaction, making sure you reach
                        your destination promptly and securely. We pride ourselves on offering top-notch customer service,
                        and we are committed to maintaining a high standard in every aspect of our service.
                    </p>
                </div>
                <div className="right-side">
                    <img src={rideamico} alt="Taxi Service" className="about-image" />
                </div>
            </div>

            {/* Second Section: Left Image, Right Content */}
            <div className="about-container reverse">
                <div className="left-side">
                    <img src={rideamico} alt="Taxi Service" className="about-image" />
                </div>
                <div className="right-side">
                    <h2>Why Choose Us?</h2>
                    <p>
                        Whether you're booking for a business meeting, an airport transfer, or a night out, we have got you covered.
                        Your journey begins with us—your trusted taxi service provider. We ensure quality, punctuality, and safety
                        at every step.
                    </p>
                    <p>
                        With our easy-to-use app and round-the-clock customer support, booking your next ride has never been more
                        convenient.
                    </p>
                </div>
            </div>


            <Footer />

        </div>
    );
};

export default AboutPage;

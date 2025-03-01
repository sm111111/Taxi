import React from 'react'
import './HomePage.css'

// import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import HeroSection from '../hero/HeroSection'
import Blog from '../blog/Blog'
import BookingField from '../bookingfield/BookingField'
import Testimonials from '../Testimonials/Testimonials'
import ServiceAvailable from '../serviceavailable/ServiceAvailable'
import MeetOurCars from '../meetourcars/MeetOurCars'

const HomePage = () => {
    return (
        <div className='HomePage-container'>
            <HeroSection />

            <section className='HomePage-section'>
                <BookingField />
                <MeetOurCars />
                <Testimonials />
                <Blog />
            </section>


            <ServiceAvailable />
            <Footer />

        </div>
    )
}

export default HomePage
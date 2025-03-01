import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import TestimonialsCard from './TestimonialsCard';
import axios from 'axios'


const Testimonials = () => {

    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/testimonials')
            .then(response => {
                setTestimonialsData(response.data)
            })
            .catch((err) => {
                console.error('there is any error in the Testimonials', err)
            })


    }, [])


    return (
        <section className='Testimonials-container' aria-labelledby="testimonials-heading">
            <h1 className="testimonials-heading">Testimonials</h1>
            <div className="Testimonials-result">

                {
                    testimonialsData.slice(0, 3).map((testimonial_item, index) => {
                        return <TestimonialsCard
                            key={index}
                            review_name={testimonial_item.review_name}
                            review_img={testimonial_item.review_img}
                            review_other={testimonial_item.review_other}
                            review_comment={testimonial_item.review_comment}

                        />
                    })
                }

            </div>
        </section>
    );
};

export default Testimonials;
import React from 'react'
import './TestimonialsCard.css'

const TestimonialsCard = ({ review_name, review_img, review_other, review_comment }) => {
    return (
        <div className='TestimonialsCard-card'>
            <img src={review_img} alt={review_name} />
            <div className="inside-TestimonialsCard">


                <h3>{review_name}</h3>
                <h4>{review_other}</h4>
                <p>{review_comment}</p>
            </div>

        </div>
    )
}

export default TestimonialsCard
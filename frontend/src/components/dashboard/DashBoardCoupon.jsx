import React from 'react'
import { BiSolidCoupon } from "react-icons/bi";
import './DashBoardCoupon.css'

const DashBoardCoupon = () => {
    return (
        <div className='DashBoardCoupon-container'>

            <div className="thereiSnoCouponAvailable">
                <BiSolidCoupon />
                <p>There is not any coupon avaliable</p>
            </div>

        </div>
    )
}

export default DashBoardCoupon
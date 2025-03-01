import React from 'react'
import './ProfilePage.css'
import undraw_hello from '../assets/img/undraw_hello.png'

const ProfilePage = () => {
    return (
        <div className='ProfilePage-container'>
            <div className="ProfilePage-images">
                <img src={undraw_hello} alt="" />
            </div>

            <div className="ProfilePage-personal-details">
                <span>john will</span>
                <p>johnwill@gmail.com</p>
                <p>+91 9784576457</p>
                <button>Log out</button>
            </div>

        </div>
    )
}

export default ProfilePage
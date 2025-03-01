import React from 'react'
import './AuthPapge.css'
import { FcManager } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";

const AuthPapge = () => {
    return (
        <div className='AuthPapge-container'>
            <div className="top-AuthPapge">
                <h2>sign up</h2>

                <div className="AuthPapge-icon">
                    <FcManager />
                </div>
            </div>


            <div className="singup-field-option">
                <span>sign up with Google</span>
                <span>sign up</span>
                <h5>already have an account?</h5>
            </div>

            <div className="singup-field">

                <div className="singup-name-icon">
                    <IoPerson />
                    <input type="text" placeholder='User Name' />
                </div>

                <div className="singup-name-icon">
                    <IoPerson />
                    <input type="password" placeholder='Password' />
                </div>

                <div className="singup-name-icon">
                    <IoPerson />
                    <input type="email" placeholder='Email' />
                </div>

                <div className="singup-name-icon">
                    <p>Sing up with email</p>
                </div>

            </div>

            <div className="login-field">
                <div className="login-name-icon">
                    <IoPerson />
                    <input type="text" placeholder='User Name' />
                </div>

                <div className="login-name-icon">
                    <IoPerson />
                    <input type="text" placeholder='User Name' />
                </div>

                <div className="login-name-icon">
                    <p>sing in</p>
                </div>
            </div>

        </div>
    )
}

export default AuthPapge
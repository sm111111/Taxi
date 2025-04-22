import React, { useState, useEffect, act } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashBoardLanding.css';
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu, IoPersonCircleSharp } from "react-icons/io5";

import DashBoardLandingPage from './DashBoardLandingPage';
import DashBoardCoupon from './DashBoardCoupon';
import DashBoardModel from './DashBoardModel';
import DashBoardSetting from './DashBoardSetting';
import DashBoardSupportTicket from './DashBoardSupportTicket';
import DashBoardType from './DashBoardType';
import DashBoardVehicalBrand from './DashBoardVehicalBrand';
import DashBoardBrowserHistory from './DashBoardBrowserHistory';

const DashBoardLanding = () => {
    const navigate = useNavigate();
    const [selectTab, setSelectTab] = useState(localStorage.getItem('selectedTab') || 'dashboard');
    const [active, setActive] = useState(false);

    useEffect(() => {
        localStorage.setItem('selectedTab', selectTab);
    }, [selectTab]);

    const handleChangePage = (page) => {
        setSelectTab(page);
    };

    // const showtheleftside = () => {
    //     setActive(currentState => !currentState);
    // };



    const handelOpen = () => {
        setActive(prev => !prev)
    }


    const redirectToProfile = () => {
        navigate('/profile');
    };

    return (
        <div className='DashBoardLanding-container'>
            <div className='DashBoardLanding-top'>
                <IoMenu onClick={handelOpen} />
                <IoPersonCircleSharp onClick={redirectToProfile} />
            </div>

            <div className="inside-wrapper-DashBoardLanding">

                {active && (
                    <div className={`left-section ${active ? 'show-active' : ''}`} onClick={closeMenu}>

                        <div className="left-wrapper">

                            <div className="left-child">
                                <span>Main</span>
                                <div className="inside-left-child" onClick={() => handleChangePage('dashboard')}>
                                    <FaCartShopping />
                                    <p>dashboard</p>
                                </div>
                            </div>

                            <div className="left-child">
                                <span>Booking management</span>
                                <div className="inside-left-child" onClick={() => handleChangePage('bookinghistory')}>
                                    <FaCartShopping />
                                    <p>booking history</p>
                                </div>
                            </div>

                            <div className="left-child">
                                <span>Customer management</span>
                                <div className="inside-left-child" onClick={() => handleChangePage('passengers')}>
                                    <FaCartShopping />
                                    <p>passengers</p>
                                </div>
                            </div>

                            <div className="left-child">
                                <span>Vehicle management</span>
                                <div className="inside-left-child" onClick={() => handleChangePage('vehiclebrand')}>
                                    <FaCartShopping />
                                    <p>vehicle brand</p>
                                </div>
                                <div className="inside-left-child" onClick={() => handleChangePage('vehiclemodel')}>
                                    <FaCartShopping />
                                    <p>luxury vehicles</p>
                                </div>
                                <div className="inside-left-child" onClick={() => handleChangePage('vehicletype')}>
                                    <FaCartShopping />
                                    <p>local vehicles</p>
                                </div>
                            </div>

                            <div className="left-child">
                                <span>Service management</span>
                                <div className="inside-left-child">
                                    <FaCartShopping />
                                    <p>banner</p>
                                </div>
                                <div className="inside-left-child">
                                    <FaCartShopping />
                                    <p>documents</p>
                                </div>
                                <div className="inside-left-child">
                                    <FaCartShopping />
                                    <p>payout request</p>
                                </div>
                                <div className="inside-left-child" onClick={() => handleChangePage('coupon')}>
                                    <FaCartShopping />
                                    <p>coupon screen</p>
                                </div>
                            </div>

                            <div className="left-child">
                                <span>Support</span>
                                <div className="inside-left-child" onClick={() => handleChangePage('SupportTicket')}>
                                    <FaCartShopping />
                                    <p>support ticket</p>
                                </div>
                            </div>

                            <div className="left-child">
                                <span>System management</span>
                                <div className="inside-left-child" onClick={() => handleChangePage('setting')}>
                                    <FaCartShopping />
                                    <p>settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="right-section">
                    {selectTab === 'dashboard' && <DashBoardLandingPage />}
                    {selectTab === 'bookinghistory' && <DashBoardBrowserHistory />}
                    {selectTab === 'passengers' && <DashBoardBrowserHistory />}
                    {selectTab === 'vehiclebrand' && <DashBoardVehicalBrand />}
                    {selectTab === 'vehiclemodel' && <DashBoardModel />}
                    {selectTab === 'vehicletype' && <DashBoardType />}
                    {selectTab === 'coupon' && <DashBoardCoupon />}
                    {selectTab === 'SupportTicket' && <DashBoardSupportTicket />}
                    {selectTab === 'setting' && <DashBoardSetting />}
                </div>
            </div>
        </div>
    );
};

export default DashBoardLanding;

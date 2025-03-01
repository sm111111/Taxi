import { createBrowserRouter } from 'react-router-dom';
import App from './App'
import Verified from '../src/components/verfied/Verified'

import HomePage from '../src/components/homePage/HomePage'
import DashBoardLanding from '../src/components/dashboard/DashBoardLanding'
import ProfilePage from './components/profile/ProfilePage'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import AboutPage from './components/about/AboutPage'
import ServicesPage from './components/service/ServicesPage'
import Map from './components/map/MapPage'
import PaymentPage from './components/payment/PaymentPage'
import BlogPage from './components/blogpage/BlogPage'
import BookingDetails from './components/bookingdetails/BookingDetails'
import BookingField from './components/bookingfield/BookingField'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,

            },
            {
                path: '/contact',
                element: <Contact />
            }
            ,
            {
                path: '/dashboard',
                element: <DashBoardLanding />
            }
            ,
            {
                path: '/blog',
                element: <Blog />
            }
            ,
            {
                path: '/about',
                element: <AboutPage />
            }
            ,
            {
                path: '/service',
                element: <ServicesPage />
            }

            ,
            {
                path: '/profile',
                element: <ProfilePage />
            }

            ,
            {
                path: '/map',
                element: <Map />
            }
            ,
            {
                path: '/paymentpage',
                element: <PaymentPage />
            }
            ,
            {
                path: '/blogpage',
                element: <BlogPage />
            },
            {
                path: '/bookingdetails/:id',
                element: <BookingDetails />
            },
            {
                path: '/bookingfield',
                element: <BookingField />
            }

        ]
    },

    { path: "*", element: <Verified /> }
])

export default router;
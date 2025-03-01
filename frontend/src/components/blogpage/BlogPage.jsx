import React from 'react'
import Blog from '../blog/Blog'
import "./BlogPage.css"
import Footer from '../footer/Footer'

const BlogPage = () => {
    return (
        <div className='BlogPage-container'>

            <div className="inside-BlogPage">
                <Blog />
            </div>

            <Footer />

        </div>
    )
}

export default BlogPage
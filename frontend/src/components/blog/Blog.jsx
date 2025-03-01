import React, { useEffect, useState } from 'react'
import './Blog.css'
import axios from 'axios'

const Blog = ({ blog_img, blog_heading, blog_details }) => {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/blogs')
            .then(response => {
                setBlogData(response.data)
            })
            .catch((error) => {
                console.error('error i the blog', error)
            })

    }, [])




    return (
        <div className='Blog-container'>
            <h2>our news</h2>
            <div className="blogArticles-showall">
                <h1>blog & articles <b>.</b></h1>
                <button>show all news</button>
            </div>

            <div className="blog-card-wrapper">



                {

                    blogData.slice(0, 3).map((blog_item, index) => {
                        return <div className="blog-cards" key={index}>
                            <img src={blog_item.blog_img} alt={blog_heading} />
                            <button>booking</button>
                            <h1>{blog_item.blog_heading}</h1>
                            <p>{blog_item.blog_details}</p>
                        </div>
                    })
                }



            </div>

        </div>
    )
}

export default Blog
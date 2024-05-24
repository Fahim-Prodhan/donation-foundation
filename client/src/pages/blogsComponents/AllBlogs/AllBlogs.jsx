import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllBlogsCard from '../allBlogsCard/AllBlogsCard';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        axios.get(`/api/blogs`)
        .then(res=>{
            setBlogs(res.data.blogs)
        })
    },[])

    return (
        <div>
            <h1 className='text-center font-bold text-4xl bg-base-200 py-4 mb-12 '>Our Blogs</h1>
            <div className='lg:max-w-7xl mx-auto'>
                {
                    blogs.map(blog=> <AllBlogsCard key={blogs._id} blog={blog}></AllBlogsCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;
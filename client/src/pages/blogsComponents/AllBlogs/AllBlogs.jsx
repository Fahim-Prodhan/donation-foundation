import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllBlogsCard from '../allBlogsCard/AllBlogsCard';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    

    useEffect(()=>{
        setLoading(true)
        axios.get(`/api/blogs`)
        .then(res=>{
            setBlogs(res.data.blogs)
            setLoading(false)
        })
    },[])

        
    if (loading) {
        return (
            <div className="flex justify-center">
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    return (
        <div className='max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12'>
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
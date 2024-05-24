import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogsDetails = () => {

    const {id} = useParams();
    const[blog, setBlog] = useState([])

    useEffect(()=>{
        axios.get(`/api/blogs/details/${id}`)
        .then(res=>{
            setBlog(res.data)
        })
    },[id])

    return (
        <div className='max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12'>
            <div className='p-12 bg-base-200'>
                <img className='rounded-lg' src= {blog.imageUrl} alt="" />
            </div>
            <div>
                <h1 className='text-center my-3 font-bold text-4xl text-[#FF204E]'>{blog.title}</h1>
                <p><span className='font-bold text-2xl'>Description:</span></p>
                <p className='pb-12'>{blog.description}</p>
            </div>
        </div>
    );
};



export default BlogsDetails;
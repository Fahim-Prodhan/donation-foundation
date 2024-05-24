import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllProjectCard from '../project/AllProjectCard';

const AllProjects = () => {

    const [projects, setProjects] = useState([])
    const [index,setIndex] = useState(3)

    const handleSeeMore =()=>{
        setIndex(index+3)
    }

    useEffect(()=>{
        axios.get(`/api/project/projects`)
        .then(res=>{
            setProjects(res.data.projects)
        })
    },[])
    return (
        <div className='max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12'>
            <h1 className='text-center font-bold text-4xl bg-base-200 py-4 mb-12 '>Our Projects</h1>
            <div className='lg:max-w-7xl mx-auto space-y-12 pb-12'>
                {
                    projects.slice(0,index).map(project=> <AllProjectCard key={project._id} project={project}></AllProjectCard>)
                }
            </div>
            <div className='text-center'>
            <button onClick={handleSeeMore} className={`btn btn-outline btn-info mb-12 ${index >= projects.length ? 'hidden':''}`}>See more</button>
            </div>
        </div>
    );
};

export default AllProjects;
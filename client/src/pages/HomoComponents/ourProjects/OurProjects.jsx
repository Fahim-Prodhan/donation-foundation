import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OurProjects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get(`/api/project/projects`)
            .then(res => {
                setProjects(res.data.projects)
            })
    }, [])
    return (
        <div>
            <h1 className='text-center pb-12 text-3xl md:text-5xl font-bold'>Latest Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    projects.slice(0, 3).map(project => <div key={project._id} className="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src={project.imageUrl} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.title}</h2>
                            <p>{project.description.slice(0, 100)}....</p>

                            <Link  className="btn btn-primary btn-outline my-4" to={`/project-details/${project._id}`}><button>view Details</button></Link>

                        </div>
                    </div>
                    )
                }
            </div>
            <div className='text-center '>
                <Link to='/projects'>
                    <button className='btn btn-outline btn-info mt-12'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default OurProjects;
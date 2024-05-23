import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import AddProjects from '../addProjects/AddProjects';
import UpdateProjects from '../updateProjects/UpdateProjects';

const Projects = () => {

    const [count, SetCount] = useState(32)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)

    const numberOfPages = Math.ceil(count / itemsPerPage)

    const pages = [...Array(numberOfPages).keys()].map(e => e + 1)

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    
    const getPageNumbers = () => {
        if (numberOfPages <= 3) {
            return [...Array(numberOfPages).keys()].map(e => e + 1);
        }
        if (currentPage === 1) {
            return [1, 2, 3];
        }
        if (currentPage === numberOfPages) {
            return [numberOfPages - 2, numberOfPages - 1, numberOfPages];
        }
        return [currentPage - 1, currentPage, currentPage + 1];
    }


    return (
        <div>

            <div className='py-4 bg-base-200 text-center text-2xl md:text-4xl font-bold my-12'>
                <h1>All Projects</h1>
            </div>

            <div className='flex my-4 gap-4 flex-wrap'>
              <AddProjects></AddProjects>

                {/* Search Box */}
                <form className='flex gap-1' onSubmit={''}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input name='search' type="text" className="grow" placeholder="Search" />
                    </label>
                    <button type='submit' className="btn bg-[#435585] text-white">Search</button>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>
                                <div className='flex text-2xl gap-2'>
                                 <UpdateProjects></UpdateProjects>
                                    <MdDelete className='text-error'></MdDelete>
                                </div>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>
                                <div className='flex text-2xl gap-2'>
                                    <FaEdit className='text-blue-500'></FaEdit>
                                    <MdDelete className='text-error'></MdDelete>
                                </div>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>
                                <div className='flex text-2xl gap-2'>
                                    <FaEdit className='text-blue-500'></FaEdit>
                                    <MdDelete className='text-error'></MdDelete>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* pagination */}
            <div className='flex justify-center mt-12 gap-4'>
                <button onClick={handlePrev} className="btn">Prev</button>
                {
                    getPageNumbers().map(page => (
                        <button
                            onClick={() => setCurrentPage(page)}
                            className={`btn ${page === currentPage ? 'bg-[#435585] text-white' : ''}`}
                            key={page}>
                            {page}
                        </button>
                    ))
                }
                {
                    numberOfPages > 3 && currentPage < pages.length && <p className='btn'>....</p>
                }
                <button onClick={handleNext} className="btn">Next</button>
            </div>
        </div>
    );
};

export default Projects;
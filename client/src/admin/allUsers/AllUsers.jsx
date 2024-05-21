import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const AllUsers = () => {

    const [count, SetCount] = useState(32)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)

    const numberOfPages = Math.ceil(count / itemsPerPage)

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < numberOfPages) {
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
                <h1>All Users</h1>
            </div>

            <div className='flex my-4 gap-4 flex-wrap'>
                <button className="btn btn-outline btn-info">All Users</button>
                <button className="btn btn-outline btn-accent">Admins</button>
                <button className="btn btn-outline btn-primary">Users</button>
                <form className='flex gap-1' onSubmit={''}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input name='search' type="text" className="grow" placeholder="Search" />
                    </label>
                    <button type='submit' className="btn bg-[#435585] text-white">Search</button>
                </form>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>
                                <div className='flex text-2xl gap-2'>
                                    <button onClick={() => document.getElementById('my_modal_4').showModal()}><FaEdit className='text-blue-500'></FaEdit></button>
                                    <dialog id="my_modal_4" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h1 className='text-center pb-6 text-2xl font-bold'>Update Project</h1>
                                            <form className='grid justify-center'>
                                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-bold">Title</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Title of project" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-bold">Description</span>
                                                    </label>
                                                    <textarea type="text" placeholder="Enter Description of project" className="input input-bordered" required />
                                                </div>
                                            </form>
                                        </div>
                                    </dialog>
                                    <MdDelete className='text-error'></MdDelete>
                                </div>
                            </td>
                        </tr>
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
                <button onClick={handleNext} className="btn">Next</button>
            </div>
        </div>
    );
};

export default AllUsers;

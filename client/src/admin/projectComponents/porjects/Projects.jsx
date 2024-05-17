import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Projects = () => {

    const [count, SetCount] = useState(12)
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


    return (
        <div>

            <div className='py-4 bg-base-200 text-center text-2xl md:text-4xl font-bold my-12'>
                <h1>All Projects</h1>
            </div>

            <div className='flex my-4 gap-4 flex-wrap'>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-outline btn-info" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Project</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h1 className='text-center pb-6 text-2xl font-bold'>Add Project</h1>
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
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <button onClick={() => document.getElementById('my_modal_4').showModal()}><FaEdit className='text-blue-500'></FaEdit></button>
                                    <dialog id="my_modal_4" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
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
                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        className={`btn  ${page == currentPage ? 'bg-[#435585] text-white' : ''}`}
                        key={page}> {page}</button>)
                }
                <button onClick={handleNext} className="btn">Next</button>
            </div>
        </div>
    );
};

export default Projects;
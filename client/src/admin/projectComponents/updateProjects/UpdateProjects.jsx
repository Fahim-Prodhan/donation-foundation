import React from 'react';
import { FaEdit } from 'react-icons/fa';

const UpdateProjects = () => {
    return (
        <div>
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
                        <button className='btn mt-4 bg-[#363062] text-white'>Update Project</button>

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateProjects;
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const UpdateRole = () => {
    return (
        <div>
            <button onClick={() => document.getElementById('my_modal_4').showModal()}><FaEdit className='text-blue-500'></FaEdit></button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h1 className='text-center pb-6 text-2xl font-bold'>Update Role</h1>
                    <form className='grid justify-center'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Role</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option>donor</option>
                                <option>admin</option>
                            </select>
                        </div>
                        <button className='btn mt-4 bg-[#363062] text-white'>Update Role</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateRole;
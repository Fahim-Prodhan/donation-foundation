import React from 'react';

const AddBlogs = () => {
    return (
        <div>
              <button className="btn btn-outline btn-info" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Blogs</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h1 className='text-center pb-6 text-2xl font-bold'>Add Blogs</h1>
                        <form className='grid justify-center'>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Title</span>
                                </label>
                                <input type="text" placeholder="Enter Title of blogs" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Description</span>
                                </label>
                                <textarea type="text" placeholder="Enter Description of blogs" className="input input-bordered" required />
                            </div>
                            <button className='btn mt-4 bg-[#363062] text-white'>Add Blogs</button>

                        </form>
                    </div>
                </dialog>
        </div>
    );
};

export default AddBlogs;
import React from 'react';

const AddBlogs = () => {
    const handleAddBlogs = async (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const file = event.target.elements.file.files[0];
        
        // Create FormData object
        const formData = new FormData();
        formData.append('image', file);
        
        try {
            // Upload image to ImgBB
            const response = await fetch('https://api.imgbb.com/1/upload?key=6b61fed2ade9e1cb6596b28fb4315762', {
                method: 'POST',
                body: formData,
            });
            const imageData = await response.json();
            const imageUrl = imageData.data.url;
            const postData = {
                title,
                description,
                imageUrl
            };
            const postResponse = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            const postDataResponse = await postResponse.json();
            console.log('Blog post response:', postDataResponse);
        } catch (error) {
            console.error('Error adding blog:', error);
        }
        
        // Clear the form if needed
        event.target.reset();
    };

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
                    <form className='grid justify-center' onSubmit={handleAddBlogs}>
                        <input name="file" type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Title</span>
                            </label>
                            <input name="title" type="text" placeholder="Enter Title of blogs" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <textarea name="description" type="text" placeholder="Enter Description of blogs" className="input input-bordered" required />
                        </div>
                        <button type="submit" className='btn mt-4 bg-[#363062] text-white'>Add Blogs</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AddBlogs;
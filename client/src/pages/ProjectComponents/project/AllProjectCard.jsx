

const AllProjectCard = ({ project }) => {

    const descriptionSlice = project.description.slice(0, 100)
    return (
        <div>
            <div className="hero bg-base-100 shadow-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={project.imageUrl} className="md:max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="md:text-4xl text-2xl font-bold">{project.title}</h1>
                        <p className="py-6"> <span className='font-bold'>Description:</span> {descriptionSlice}...</p>
                        <button className="btn btn-primary btn-outline">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjectCard;
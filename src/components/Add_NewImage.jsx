import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import orangeImage from '../assets/orange-image.jpg'
import blackCancel from '../assets/black-cancel.png'


const Add_NewImage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        imgurl: '',
        title: '',
        description: '',
        author: '',
        ClickedDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleclose = () => {
        navigate('/User-Image')
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if imgurl and title are provided
        if (!formData.imgurl || !formData.title || !formData.author) {
            // Display an error message or prevent submission
            console.error('Please provide both imgurl and title.');
            return;
        }

        try {
            // Make a POST request to your backend route
            const response = await fetch('http://localhost:5000/user/Create_Card', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const savedPost = await response.json();
                console.log('New card created:', savedPost);
                navigate('/User-Image'); // Navigate to the User-Image route after successful creation
            } else {
                console.error('Failed to create new card');
            }
        } catch (error) {
            console.error('Error creating new card:', error);
        }
    };

    return (
        <>
            <div className='w-full h-full bg-bg-grey'>

                <div className='block md:hidden lg:hidden hidden:xl hidden:2xl w-full h-full  bg-bg-grey'>
                    <div className='w-full h-full  bg-bg-grey'>
                        <div className='hidden mg:block mg:h-6 '></div>
                        <form onSubmit={handleSubmit} className=" w-11/12 relative  flex flex-col mg:max-w-md mx-auto p-8 shadow-2xl rounded-lg  bg-white ">

                            <img src={blackCancel} onClick={handleclose} className='w-5 h-5 self-end  -mt-5'></img>
                            <h2 className="text-2xl font-bold mb-4">Add Image</h2>
                            <label className="block mb-4">
                                <p className='font-work-sans mb-2'>Image URL:</p>
                                <input
                                    required
                                    type="text"
                                    name="imgurl"
                                    value={formData.imgurl}
                                    onChange={handleChange}
                                    className="form-input mt-1 block w-full h-9 rounded-md border-[1px] border-[#FA782F66]"
                                />
                            </label>
                            <label className="block mb-4">
                                <p className='font-work-sans mb-2'>Title:</p>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="form-input mt-1 block w-full h-9 rounded-md border-[1px] border-[#FA782F66]"
                                />
                            </label>
                            <label className="block mb-4">
                                <p className='font-work-sans mb-2'>Description:</p>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="form-textarea mt-1 block w-full rounded-md border-[1px] border-[#FA782F66]"
                                ></textarea>
                            </label>
                            <label className="block mb-4">
                                <p className='font-work-sans mb-2'>Author:</p>
                                <input
                                    type="text"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleChange}
                                    className="form-input mt-1 block w-full h-9 rounded-md border-[1px] border-[#FA782F66]"
                                />
                            </label>
                            <label className="block mb-4">
                                <p className='font-work-sans mb-2'>  Clicked Date:</p>
                                <input
                                    type="date"
                                    name="ClickedDate"
                                    value={formData.ClickedDate}
                                    onChange={handleChange}
                                    className="form-input mt-1 block w-full h-9 rounded-md border-[1px] border-[#FA782F66]"
                                />
                            </label>
                            <div className="flex justify-between mt-8">
                                <button type="submit" className="bg-Bg-orange text-white px-4 py-2 rounded  hover:bg-white hover:text-black hover:border-[2px] hover:border-[#FA782F66]">
                                    Create New Card
                                </button>
                                <button onClick={handleclose} className="bg-Bg-orange text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:border-[2px] hover:border-[#FA782F66]">
                                    Cancel
                                </button>
                            </div>
                        </form>
                        <div className='hidden mg:block mg:h-6 '></div>
                    </div>
                </div>

                {/* other start */}
                <div className='hidden  md:block lg:block xl:block 2xl:block  w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 mx-auto h-screen bg-bg-grey '>
                    <div className=''>
                        <div className="h-14"></div>
                        <div className='flex rounded-tr-full md:flex-row xl:flex-row 2xl:flex-row bg-white w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto'>
                            <div className='w-[50%] bg-bg-grey overflow-hidden rounded-tr-[42%]'>
                                <img className='object-cover h-full rounded-bl-full ' src={orangeImage} alt="Orange" />
                            </div>
                            <div className='overflow-auto px-4 md:pl-10 md:pr-4 lg:pl-10 lg:pr-4 xl:pl-10 xl:pr-4 2xl:pl-10 2xl:pr-4'>
                                <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
                                    <img src={blackCancel} onClick={handleclose} className='w-5 h-5 ml-[100%] -mt-2'></img>
                                    <h2 className="text-2xl font-bold mb-4">Add Image</h2>
                                    <div className="flex flex-col md:flex-row xl:flex-row 2xl:flex-row mb-4">
                                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:mr-2">
                                            <label className="block mb-2">
                                                <p className='font-work-sans mb-2'>Image URL:</p>
                                                <input
                                                    required
                                                    type="text"
                                                    name="imgurl"
                                                    value={formData.imgurl}
                                                    onChange={handleChange}
                                                    className="form-input mt-1 block w-full h-8 rounded-md border-[1px] border-[#FA782F66]"
                                                />
                                            </label>
                                        </div>
                                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:ml-2">
                                            <label className="block mb-2">
                                                <p className='font-work-sans mb-2'>Title:</p>
                                                <input
                                                    required
                                                    type="text"
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                    className="form-input mt-1 block w-full h-8 rounded-md border-[1px] border-[#FA782F66]"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <label className="block mb-4">
                                        <p className='font-work-sans mb-2'>Description:</p>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="form-textarea mt-1 block w-full h-16 rounded-md border-[1px] border-[#FA782F66]"
                                        ></textarea>
                                    </label>
                                    <div className="flex flex-col md:flex-row xl:flex-row 2xl:flex-row mb-4">
                                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:mr-2">
                                            <label className="block mb-2">
                                                <p className='font-work-sans mb-2'>Author:</p>
                                                <input
                                                    type="text"
                                                    name="author"
                                                    value={formData.author}
                                                    onChange={handleChange}
                                                    className="form-input mt-1 block w-full h-8 rounded-md border-[1px] border-[#FA782F66]"
                                                />
                                            </label>
                                        </div>
                                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:ml-2">
                                            <label className="block mb-2">
                                                <p className='font-work-sans mb-2'>Clicked Date:</p>
                                                <input
                                                    type="date"
                                                    name="ClickedDate"
                                                    value={formData.ClickedDate}
                                                    onChange={handleChange}
                                                    className="form-input mt-1 block w-full h-8 rounded-md border-[1px] border-[#FA782F66]"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        <button type="submit" className="bg-Bg-orange text-white px-2 py-1 rounded-sm hover:bg-white hover:text-black hover:border-[2px] hover:border-[#FA782F66]">
                                            Create
                                        </button>
                                        <button onClick={handleclose} className="bg-Bg-orange text-white px-2 py-1 rounded-sm hover:bg-white hover:text-black hover:border-[2px] hover:border-[#FA782F66]">
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* other end */}
            </div>
        </>
    );
};

export default Add_NewImage;
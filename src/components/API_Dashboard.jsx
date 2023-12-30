import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Left_Navbar from './Left_Navbar'


const API_Dashboard = () => {
    const [photos, setPhotos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=6');
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching data from Picsum Photos API:', error);
            }
        };

        fetchData();
    }, []);

    const handleCloseClick = () => {
        navigate('/');
    };

    return (
        <>
            <div className="flex w-full h-full bg-bg-grey">
                <Left_Navbar className='flex-nowarp' />
                <div className='ml-5'>
                    <div className="text-black text-4xl mt-3 ml-3 font-work-sans leading-10 tracking-wide">Photos from Picsum API</div>
                    <button onClick={handleCloseClick} className='ml-3 mt-6 mb-6 bg-white pl-2 pr-2 pt-1 pb-1 text-md font-work-sans border-1 border-black rounded-2xl items-center'>User Image</button>
                    <div className="  flex-col grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:mb-3 justify-center items-center  w-full" >
                        {photos.map((photo) => (
                            <div key={photo.id} className="  w-full sm:w-52 md:w-72 lg:w-auto p-2">
                                <div className="w-full bg-white rounded-lg flex flex-col justify-center items-center p-4 ">
                                    <div className=" w-full h-32  sm:h-36 flex items-center justify-center ">
                                        <img className="w-full h-full rounded-md object-cover" src={photo.download_url} alt={photo.author} />
                                    </div>
                                    <div className='mt-3'>
                                        <div className="text-black text-xs sm:text-base font-work-sans leading-loose">
                                            {photo.author}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default API_Dashboard
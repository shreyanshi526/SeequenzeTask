import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { cardIdState } from '../recoilState.jsx';
import axios from 'axios';
import Left_Navbar from './Left_Navbar';

const UserImage = () => {
    const [cards, setCards] = useState([]);
    const [cardId, setCardId] = useRecoilState(cardIdState); // Recoil state
    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate('/Add-Image');
    };

    const handleAPInavigateClick =()=>{
        navigate('/Api-dashboard');
    }
    const handleFigmaClick =()=>{
        navigate('/');
    }

    const handleImageClick = (selectedCardId) => {
        setCardId(selectedCardId); // Set Recoil state
        navigate(`/Update-Delete`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/user/all_Images');
                setCards(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="flex w-full h-full bg-bg-grey">

                {/* navbar */}
                <Left_Navbar className='flex-nowarp' />

                {/* body content */}
                <div className='ml-5 h-full md:h-full lg:h-full xl:h-full 2xl:h-full bg-bg-grey'>
                    <div className="text-black text-4xl mt-5 mb-2 ml-3 font-work-sans leading-10 tracking-wide">Photos from User</div>
                    <button onClick={handleCreateClick} className='ml-3 mt-2 mb-6 bg-white pl-2 pr-2 pt-1 pb-1 text-md font-work-sans border-1 border-black rounded-2xl items-center'> + Image</button>
                    <button onClick={handleAPInavigateClick} className='ml-3 mt-2 mb-6 bg-white pl-2 pr-2 pt-1 pb-1 text-md font-work-sans border-1 border-black rounded-2xl items-center'>API Image</button>
                    <button onClick={handleFigmaClick} className='ml-3 mt-2 mb-6 bg-white pl-2 pr-2 pt-1 pb-1 text-md font-work-sans border-1 border-black rounded-2xl items-center'>Figma Design</button>
                    
                    
                    <div className="flex-col grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:mb-3 justify-center items-center w-full ">
                        {cards.map((card) => (
                            <div key={card._id} className="w-full sm:w-52 md:w-72 lg:w-auto p-2">
                                <div className="w-full bg-white rounded-lg flex flex-col justify-center items-center p-4 ">
                                    <div className="w-full h-32 sm:h-36 flex items-center justify-center">
                                        <img onClick={() => handleImageClick(card._id)} src={card.imgurl} alt={card.title} className="w-full h-full rounded-md object-cover" />
                                    </div>
                                    <div className='mt-3'>
                                        <div className="text-black text-xs sm:text-base font-work-sans leading-loose">
                                            {card.title}
                                        </div>
                                        <div className="text-stone-300 text-xs font-work-sans leading-loose">
                                            {card.author}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserImage;

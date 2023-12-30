import React from 'react'
import { useState } from 'react'
import Line from '../assets/Line.png'
import Coin from '../assets/coinstack_icon 1.png'
import Flower from '../assets/Group 4.png'
import FluentApp from '../assets/fluent_icon2.png'
import MusicPlay from '../assets/music_play.png'
import helpIcon from '../assets/helpCircle.png'
import FeedbackIcon from '../assets/FeedbackIcon.png'
import expandIcon from '../assets/expand_icon.png'

const Left_Navbar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!collapsed);
    };
    const handleToggleOpen = () => {
        setCollapsed(false);
    };
    return (
        <>
            {/* Navbar left */}
            <div className={`w-full sm:w-56 md:w-1/4 lg:w-1/5 xl:w-1/6 h-screen bg-white flex flex-col ${(collapsed === false) ? 'block' : 'hidden'}`}>

                <img className="w-32 sm:w-40 ml-4 h-px mt-[0.625rem]  relative" src={Line} ></img>

                <div className='flex ml-[1.2rem] mt-[1.5rem] items-center'>
                    <img className='w-7 h-7 relative' src={Coin}></img>
                    <div className="text-orange-500 text-xs  sm:text-sm ml-2 font-work-sans leading-relaxed tracking-[0.0175rem]">My Projects</div>
                </div>

                <div className='flex ml-[1.2rem] mt-[1.5rem] items-center'>
                    <img className='w-6 h-6  sm:w-7 sm:h-7  relative' src={Flower}></img>
                    <div className="text-stone-300 text-xs sm:text-sm ml-2  font-work-sans leading-relaxed tracking-[0.0175rem]">Sample Projects</div>
                </div>

                <img className="w-32 sm:w-40 ml-4 h-px mt-[1.5rem]  relative" src={Line} ></img>


                <div className='flex ml-[1.2rem] mt-[1.5rem] items-center'>
                    <img className='w-7 h-7 relative' src={FluentApp}></img>
                    <div className="text-stone-300 text-xs sm:text-sm ml-2  font-work-sans leading-relaxed tracking-[0.0175rem]">Apps</div>
                </div>

                <div className='flex ml-[1.2rem] mt-[1.5rem] items-center'>
                    <img className='w-7 h-7 relative' src={MusicPlay}></img>
                    <div className="text-stone-300 text-xs sm:text-sm ml-2  font-work-sans leading-relaxed tracking-[0.0175rem]">Intro to Nucleo</div>
                </div>

                <div className='flex ml-[1.2rem] mt-48'>
                    <img className='w-7 h-7 relative' src={helpIcon}></img>
                    <div className="text-stone-300 text-xs sm:text-sm ml-2  font-work-sans leading-relaxed tracking-[0.0175rem]">Help & Support</div>
                </div>

                <div className='flex ml-[1.2rem] mt-[1.5rem]'>
                    <img className='w-7 h-7 relative' src={FeedbackIcon}></img>
                    <div className="text-stone-300 text-xs sm:text-sm ml-2  font-work-sans leading-relaxed tracking-[0.0175rem]">Feedback</div>
                </div>

                <div className='flex ml-[1.2rem] mt-[1.5rem]'>
                    <button onClick={handleToggleCollapse} className='flex flex-row'>
                        <img className='w-7 h-7 relative' src={expandIcon}></img>
                        <div className="text-black text-xs sm:text-sm ml-2  -mt-[0.001rem] font-work-sans leading-relaxed tracking-[0.0175rem]">Collapse</div>
                    </button>
                </div>

            </div>
            <div className={`ml-[1rem] mt-[1.5rem] ${(collapsed === true) ? 'block' : 'hidden'}`}>
                {/* ... content for collapsed navbar ... */}
                <div className="w-14 h-96 lg:w-24 origin-top-left bg-bg-grey flex flex-col" >
                    
                    <div onClick={handleToggleOpen}   className='flex ml-1 mt-1 items-center'>
                        <img className='w-7 h-7 relative' src={Coin}></img>
                    </div>

                    <div onClick={handleToggleOpen}  className='flex ml-[0.40rem] sm:ml-[0.35rem] mt-[1.5rem] items-center'>
                        <img className='w-5 h-5 sm:w-6 sm:h-6 relative' src={Flower}></img>
                    </div>

                    <div onClick={handleToggleOpen}  className='flex ml-1 mt-[1.5rem] items-center'>
                        <img className='w-7 h-7 relative' src={FluentApp}></img>
                    </div>

                    <div onClick={handleToggleOpen}  className='flex ml-1 mt-[1.5rem] items-center'>
                        <img className='w-7 h-7 relative' src={MusicPlay}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Left_Navbar
import React from 'react'
import Left_Navbar from '../components/Left_Navbar'
import CreateIcon from '../assets/newCreate.png'

const Landing = () => {
    return (
        <>
            <div className='flex w-full h-screen bg-bg-grey'>
                <Left_Navbar />
                {/* body content */}
                <div className='w-full h-screen sm:w-1/2 md:w-3/4 lg:w-4/5 xl:w-5/6 p-4'>
                    <div className="text-black text-4xl mt-3 ml-3 font-work-sans leading-10 tracking-wide">My Projects</div>
                    {/* Card */}
                    <div className=" ml-3 mt-8 justify-center items-center inline-flex flex-wrap">
                        <div className="w-[12] h-40 sm:w-[20rem] sm:h-64  bg-white rounded-lg flex flex-col justify-center items-center ">
                            <div className=" w-28 h-24 sm:w-72 sm:h-44 bg-Bg-orange bg-opacity-40 rounded-lg flex items-center justify-center ">
                                <img src={CreateIcon}  className=' w-5 h-5  sm:w-12 sm:h-12 justify-center'></img>
                            </div>
                            <div >
                                <div className="text-black flex-wrap break-all text-xs sm:text-base mt-2 font-work-sans leading-loose tracking-[0.02rem]">
                                    Create a new project
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Landing
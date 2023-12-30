import React from 'react'
import logo from '../assets/Group 5.png'
import profilepicture from '../assets/Ellipse 1.png'
import downArrow from '../assets/Page-1.png'


const Navbar = () => {

    return (
        <>
            {/* Navbar top */}
            <div className="h-14 w-full bg-white flex items-center justify-between">
                <div className="flex items-center ml-4 mg:ml-[2.13rem] sm:ml-[5.13rem]">
                    <img src={logo} className="w-20 h-7 relative"></img>
                </div>
                <div className="flex items-center mr-4 ">
                    <img className="w-9 h-9 rounded-full" src={profilepicture} alt="Profile"></img>
                    <img className="w-[0.75rem] h-[0.375rem] ml-[0.75rem]" src={downArrow} alt="Down Arrow"></img>
                </div>
            </div>
            
        </>
    );
};


export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center items-center h-9 bg-black'>
            <Link to='/' className='text-white px-1 md:px-2 py-1 text-sm md:text-lg font-normal md:font-medium border-solid border-x-2 border-white'>Members</Link>
            <Link to='/createteam' className='text-white px-1 md:px-2 py-1 text-sm md:text-lg font-normal md:font-medium border-solid border-x-2 border-white'>Create Teams</Link>
            <Link to='/teams' className='text-white px-1 md:px-2 py-1 text-sm md:text-lg font-normal md:font-medium border-solid border-x-2 border-white'>Teams</Link>
            <Link to='/addmember' className='text-white px-1 md:px-2 py-1 text-sm md:text-lg font-normal md:font-medium border-solid border-x-2 border-white'>Add Member</Link>
           
            
        </div>
    );
};

export default Header;
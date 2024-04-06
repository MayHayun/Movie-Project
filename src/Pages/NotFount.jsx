import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFount = () => {
    const navigate = useNavigate();

    const handleGoToHomePage = () => {
        // Navigate to the homepage
        navigate('/');
    };
  return (
    <div className='h-screen bg-opacity-70 bg-slate-400 pl-5 w-full pr-5 pb-15 pt-52'>
        <div className=' flex justify-center text-white font-bold text-3xl'>
        <p>404 - Page Not Found</p>
        </div>
        <div className=' flex justify-center text-white font-bold text-3xl mt-10'>
        <p>Oops! The page you're looking for couldn't be found.</p>
        </div>
        <div className='flex justify-center mt-20'>
            <button className=' bg-slate-900 text-white w-32 h-10'
            onClick={handleGoToHomePage}>
                Home
            </button>
        </div>
    </div>
  )
}

export default NotFount
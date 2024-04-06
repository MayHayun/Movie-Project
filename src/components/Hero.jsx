import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleGoToMoviePickerPage = () => {
        navigate('/moviepicker');
    };

  return (
    <div className='w-full flex justify-center '>
        <div className=' bg-opacity-70 bg-slate-400 rounded pl-5 pr-5 pb-15'>
            <div className='mt-40 mb-40'>
                <h2 className=' text-5xl text-yellow-50 text-center pl-48 pr-48 mb-8 font-medium'>Discover Your Next Favorite Movie</h2> 
                <p className=' text-2xl text-center text-yellow-50 font-light pl-48 pr-48'>
                Welcome to our Movie Recommendation System – the ultimate tool to help you find your next cinematic gem. Whether you're a die-hard film buff or just looking for something new to watch, our recommendation system is here to guide you.
                </p>
            </div>
            
            <div className='mt-40 mb-40'>
                <h2 className=' text-5xl text-yellow-50 text-center pl-48 pr-48 mb-8 font-medium'>Explore, Discover, Enjoy</h2> 
                <p className=' text-2xl text-center text-yellow-50 font-light pl-48 pr-48'>
                From blockbuster hits to hidden gems, our extensive database has something for everyone. Dive into a world of diverse genres, captivating plots, and mesmerizing performances. Whether you're into action-packed thrillers, heartwarming dramas, or laugh-out-loud comedies, we've got you covered.            
                </p>
            </div>
            <div className='mt-40 mb-40'>
                <h2 className=' text-5xl text-yellow-50 text-center pl-48 pr-48 mb-8 font-medium'>Start Your Cinematic Journey Today</h2> 
                <p className=' text-2xl text-center text-yellow-50 font-light pl-48 pr-48'>
                Ready to embark on an adventure of cinematic discovery? Click the button below to get started and unlock a world of endless entertainment possibilities. Your next favorite movie is just a click away.            
                </p>
            </div>
            <div className='flex justify-center'>
                <button className=' bg-slate-800 w-48 h-20 text-xl p-2 text-white border-blue-950 rounded m-10'
                onClick={handleGoToMoviePickerPage}>Get Recommendation</button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
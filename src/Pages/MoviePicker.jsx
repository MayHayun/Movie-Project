import React from 'react'


const MoviePicker = () => {
  return (
    <div className='h-screen w-full bg-opacity-70 bg-slate-400 p-20'>
        <h1 className='text-white text-center text-5xl p-16'>Movie Picker Engine</h1>
        <p className='text-white text-center text-2xl font-sans pl-20 pr-20'> 
You can’t decide between thousands of movies available for streaming?
Answer 6 questions and let us do the work!</p>
      <div className='flex flex-wrap justify-center p-10'>
        <button className=' bg-slate-800 w-48 h-20 text-xl p-2 text-white border-blue-950 rounded m-10'>
            get started
        </button>
      </div>
    </div>
  )
}

export default MoviePicker
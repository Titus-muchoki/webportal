import React from "react";

const Hero = () => {
    return(
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto  text flex flex-col justify-center'>
        <p className='text-[#60c960] md:py-14'>Growing with data Analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md: py-1'>Grow with data</h1>
        <div className='md:text-5xl sm:text-4xl text-xl font-bold'>fast, flexible financing for</div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for B2B, B2C, & SASS </p>
           <button className='bg-[#60c960] w-[200px] rounded-md font-medium my-6 py-1 text-black'>Get started</button>
            </div>
        </div>
    )
}
export default Hero;
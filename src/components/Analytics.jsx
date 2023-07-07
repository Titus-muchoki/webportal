import React from "react";
import Analy from '../asset/laptop.jpg'
const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] max-auto my-4' src={Analy} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#71e03e] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam incidunt, ut, sint, eaque asperiores temporibus dolorum similique voluptas quaerat natus cum?
                        Eveniet praesentium perspiciatis odit in. Porro ipsam consequuntur rerum.
                    </p>
                    <button className='bg-[#60c960] w-[200px] rounded-md font-medium my-6 py-1 mx-auto md:mx-0 text-black'>Get started</button>
                </div>
            </div>
        </div>
    )
}
export default Analytics;
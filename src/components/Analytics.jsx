import React from "react";
import Analy from '../asset/data-analytics1.jpg'
const Analytics = () => {
    return(
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto md:grid-cols-2'>
            <img src={Analy} alt="/" />
            <div>
            <p>DATA ANALYTICS DASHBOARD</p>
            <h1>Manage Data Analytics Centrally</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aperiam incidunt, ut, sint, eaque asperiores temporibus dolorum similique voluptas quaerat natus cum? 
                Eveniet praesentium perspiciatis odit in. Porro ipsam consequuntur rerum.
            </p>
            </div>
            </div>
        </div>
    )
}
export default Analytics;
import React from "react";
import Single from "../asset/single.png"
import Double from "../asset/double.png"
import Triple from "../asset/triple.png"
const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/' />
                    <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                        <p className='py-2 border-b mx-8 mt-8' >1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to two GB</p>

                    </div>
                    <button className='bg-[#60c960] w-[200px] rounded-md font-medium my-6 py-1 mx-auto md:mx-0 text-black'>Start trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='/' />
                    <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                        <p className='py-2 border-b mx-8 mt-8' >1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to two GB</p>

                    </div>
                    <button className='bg-[#020202] w-[200px] rounded-md font-medium my-6 py-1 mx-auto md:mx-0 text-[#60c960]'>Start trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/' />
                    <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB storage</p>
                        <p className='py-2 border-b mx-8 mt-8' >1 Granted User</p>
                        <p className='py-2 border-b mx-8 mt-8'>Send up to two GB</p>

                    </div>
                    <button className='bg-[#60c960] w-[200px] rounded-md font-medium my-6 py-1 mx-auto md:mx-0 text-black'>Start trial</button>
                </div>

            </div>
        </div>
    )
}

export default Cards;
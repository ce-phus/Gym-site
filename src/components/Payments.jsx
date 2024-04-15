import React from 'react'
import { FaCrown } from "react-icons/fa";
import { dumbell, hearthealth, whitetick } from '../assets';

const Payments = () => {
  return (
    <div className='pt-10 flex flex-col items-center justify-center'>
        <h1 className='text-5xl tracking-wide font-bold ml-5'>
            READY TO START
            YOUR JOURNEY
            NOW WITH US
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 cursor-pointer pt-10 w-full'>
            <div className='bg-gradient-to-br from-black/90 to-tertiary/70 px-4 py-3 hover:bg-grade rounded-lg mx-5'
            data-aos="slide-right">
                <img src={hearthealth} className='h-5'/>
                <div className='mt-3 flex flex-col'>
                    <h2 className='font-bold'>BASIC PLAN</h2>
                    <p className='text-3xl font-bold my-5'>KSH 1500</p>
                    <div className='flex'>
                        <img src={whitetick} className='h-4 mt-1 mr-4'/>
                        <p className='font-medium'>2 hours of exercises</p>
                    </div>
                    <div className='flex mt-4'>
                        <img src={whitetick} className='h-4 mt-1 mr-4'/>
                        <p className='font-medium'>Free consultaion to coaches</p>
                    </div>
                    <div className='flex mt-4'>
                        <img src={whitetick} className='h-4 mt-1 mr-4'/>
                        <p className='font-medium'>Access to The Community</p>
                    </div>
                </div>
                <p className='mt-3 mb-3'>See more benefits</p>
                <button className='w-full bg-white text-center text-gray-900 font-bold py-2 hover:bg-accent'>Join Now</button>
            </div>
            <div className='bg-gradient-to-r from-grade/90 to-accent/50 px-5 py-5 hover:bg-accent h-full grid-flow-row-dense md:col-span-1 rounded-lg mx-5'
            data-aos="zoom-out">
                <FaCrown className='h-[30px]'/>
                <div className='mt-3 flex flex-col'>
                    <h2 className='font-bold'>PREMIUM PLAN</h2>
                    <p className='text-3xl font-bold my-5'>KSH 3500</p>
                    <div className='flex'>
                        <img src={whitetick} className='h-4 mt-1 mr-4'/>
                        <p className='font-medium'>5 hour of excercises</p>
                    </div>
                    <div className='flex mt-4'>
                        <img src={whitetick} className='h-4 mt-1 mr-4'/>
                        <p className='font-medium'>Free consultaion to coaches</p>
                    </div>
                    <div className='flex mt-4'>
                        <img src={whitetick} className='h-4 mt-1 mr-4'/>
                        <p className='font-medium'>Accessto minibar</p>
                    </div>
                </div>
                <p className='mt-3 mb-3'>See more benefits</p>
                <button className='w-full bg-white text-center text-gray-900 font-bold py-2 hover:bg-accent'>Join Now</button>
            </div>
            <div className='bg-gradient-to-br from-tertiary/90 to-dark/90 px-4 py-3 hover:bg-grade mx-5 rounded-lg'
            data-aos="zoom-in">
                <img src={dumbell} className='h-5'/>
                <div className='mt-3 flex flex-col'>
                    <h2 className='font-bold'>PRO PLAN</h2>
                    <p className='text-3xl font-bold my-5'>KSH 5000</p>
                    <div className='flex'>
                        <img src={whitetick} className='h-4 mt-1 mr-4'/>
                        <p className='font-medium'>8 hours of exercises</p>
                    </div>
                    <div className='flex mt-4'>
                        <img src={whitetick} className='h-4 mt-1 mr-4'/>
                        <p className='font-medium'>Free Fitness Merchandises</p>
                    </div>
                    <div className='flex mt-4'>
                        <img src={whitetick} className='h-4 mt-1 mr-4'/>
                        <p className='font-medium'>Access to The Community</p>
                    </div>
                </div>
                <p className='mt-3 mb-3'>See more benefits</p>
                <button className='w-full bg-white text-center text-gray-900 font-bold py-2 hover:bg-accent'>Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default Payments
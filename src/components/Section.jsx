import React from 'react'
import { section } from '../assets'
import sectionimg from "../assets/Section.jpg"
import { tick, nb, nike, addidas } from '../assets'

const Section = () => {
  return (
    <div className='pt-10 md:pt-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
            <div className='w-full flex'>
                <img src={section}/>
            </div>
            <div className='pt-10 ml-5'>
                <h2 className='text-xl text-grade font-bold'>SOME REASONS</h2>
                <div className='mt-4'>
                    <h1 className='text-4xl font-bold tracking-wide'>Why Choose Us <span className='text-accent'>?</span></h1>
                    <div className='flex mt-10'>
                        <img src={tick} className='h-8'/>
                        <p className='ml-3 font-bold tracking-wide text-gray-600'>OVER 140+ EXPERT COACHES</p>
                    </div>
                    <div className='flex mt-10'>
                        <img src={tick} className='h-8'/>
                        <p className='ml-3 font-bold tracking-wide text-gray-600'>TRAIN SMARTER AND FASTER THAN BEFORE</p>
                    </div>
                    <div className='flex mt-10'>
                        <img src={tick} className='h-8'/>
                        <p className='ml-3 font-bold tracking-wide text-gray-600'>1 FREE PROGRAM FOR NEW MEMBER</p>
                    </div>
                    <div className='flex mt-10'>
                        <img src={tick} className='h-8'/>
                        <p className='ml-3 font-bold tracking-wide text-gray-600'>RELIABLE PARTNERS</p>
                    </div>
                    <h2 className='tracking-wide'></h2>
                </div>
                <div className='mt-5'>
                    <h1 className='tracking-wide text-xl text-gray-400'>Our Partners</h1>
                    <div className='mt-3 flex'>
                        <img src={nb} className='h-9 mx-3'/>
                        <img src={nike} className='h-9 mx-3'/>
                        <img src={addidas} className='h-9'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section
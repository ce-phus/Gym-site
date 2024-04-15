import React from 'react'
import { rightarrow, leftarrow, hero } from '../assets'

const Testimonials = () => {
  return (
    <div className='pt-10 px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2 className='text-xl tracking-wide text-accent font-bold mb-10'>TESTIMONIALS</h2>
                <h1 className='text-6xl tracking-wide font-bold mb-5'>WHAT THEY<br/>SAY ABOUT US</h1>
                <p className='font-medium tracking-wide text-lg'>I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!</p>
                <div className='flex mt-5'>
                    <p> <span className='text-tertiary'>MATHEW HENDRICKSON</span> - ENTREPRENEUR</p>
                    <div className='flex pl-10'>
                    <img src={leftarrow} className='h-4 mr-3'/>
                    <img src={rightarrow} className='h-4'/>
                    </div>
                </div>
                
            </div>
            <div className='w-full'>
                <img src={hero}/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
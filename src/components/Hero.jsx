import React from 'react'
import { styles } from "../style"
import { gym3, calories,heart, heroimg } from "../assets"
import Button from './Button'

const Hero = () => {
  return (
    <section className='h-screen relative mx-auto'>
      <div className="absolute top-[90px] pl-20 mx-auto ">
        <div className='mt-5 md:flex'>
            <div className='flex flex-col justify-center'>
              <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className='text-7xl text-font-semibold text-grade'>
                  Embrace the Suck
              </h1>
              <p
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className='text-8xl tracking-wide text-accent'>
                    Transform Your Body and Mind
              </p>
              <div>
              <Button/>
              </div>
            </div>
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="">
                <img
                src={gym3} width={900} height={50}/>
                <div className='absolute bottom-3 flex bg-gray-800 rounded-lg'
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true">
                    <img src={calories} className='px-4 py-3'/>
                  <div className='flex flex-col'>
                    <p className='font-medium text-gray-400 mr-3 text-lg'>
                      Calories <br/> burned
                    </p>
                    <p className='font-semibold text-gray-300 text-xl'>220  <br/>KCAL</p>
                  </div>
                </div>
                <div className='absolute top-3 right-9 flex flex-col rounded-lg bg-gray-800 px-3 py-4'
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true">
                    <img src={heart} className='h-9 w-9'/>
                    <p className='mt-3 text-lg text-gray-600'>
                      Heart Rate
                    </p>
                    <p className='mt-3 text-xl text-gray-300'>
                      200 bpm
                    </p>
                </div>
                <div className='absolute top-9'><img src={heroimg}/></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
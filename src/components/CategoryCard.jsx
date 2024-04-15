import React from 'react'
import arrow from "../assets/rightArrow.png"

const CategoryCard = ({ data }) => {
  return (
    <div className='mb-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
            {data.map((item)=> (
                <div
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                className="group"
                key={item.id}>
                    <div className='relative bg-gray-600 p-3 hover:bg-accent hover:text-grade'>
                        <img src={item.icon}
                        alt=''
                        className='h-5 object-cover rounded-md '/>
                        <div className='mt-3 text-xl'>{item.title}</div>
                        <div className='mt-3 text-sm'>{item.text}</div>
                        <div className='flex mt-3 text-lg'>
                            {item.subtext}
                            <div className='mt-2 ml-5'>
                                <img
                                src={item.icon2} className='h-4'/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategoryCard
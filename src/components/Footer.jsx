import React from 'react'
import logo from "/gymlogo.svg"
import { styles } from '../style'
import { socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-primary pt-10`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-1 flex flex-col items-center justify-center mr-10'>
                <img
                src={logo}
                alt='logo'
                className='w-[206px] h-[202px] object-contain rounded-full'/>
                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                Join Us
                    </p>
            </div>
        </div>
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45'>
      <p className='font-poppins text-white font-normal text-center text-[18px] leading-[27px]'>
        2024 cephusluke@gmail.com. All Rights Reserved
      </p>
    </div>
    <div className='flex flex-row md:mt-0 mt-6'>{socialMedia.map((social, index)=>(
      <img
      key={social.id}
      src={social.icon}
      alt={social.id}
      className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ?'mr-6': 'mr-0' }`}
      />
    ))}</div>
    </section>
  )
}

export default Footer
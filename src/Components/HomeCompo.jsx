import React from 'react'
import Image from 'next/image'
import heroImage from '../Components/images/hero.webp'

const HomeCompo = () => {
  return (
    <div className='px-40 py-0'>

        <div className='flex items-center rounded-2xl py-5 overflow-hidden h-[40rem] px-20 bg-red-100'>

            <div className='w-full'>
                <p className='font-bold text-2xl'>In this season, find the best </p>
                <h2 className='text-7xl font-bold py-5'>Sports equipment <br /> collection.</h2>
                <button className='myBg text-lg py-3 drop-shadow-xl shadow-2xl px-10 text-white rounded-full '>Start your search</button>
            </div>


            <div className='w-full'>
                <Image src={heroImage} alt="hero-image" width={0} height={0} />
            </div>
        </div>
    </div>
  )
}

export default HomeCompo

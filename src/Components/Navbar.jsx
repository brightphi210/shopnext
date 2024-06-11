
'use client'


import React, { useState } from 'react'
import logo from '../Components/images/logo.svg'
import Image from 'next/image'
import { FiSearch } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { BsMinecart } from "react-icons/bs";
import product from '../Components/images/detail1.webp'


const Navbar = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () =>{
        setShowModal(!showModal)
    }

  return (
    <div className='flex px-48 py-6 items-center justify-between'>

        <div className='w-40'>
            <Image src={logo} alt="" height={0} width={0}/>
        </div>


        <div className='flex text-2xl gap-7'>
            <ul className='flex text-lg gap-5'>
                <li>Template</li>
                <li>Language</li>
            </ul>
            <p className='cursor-pointer'><FiSearch /></p>
            <p className='cursor-pointer'><IoPerson /></p>
            <p className='cursor-pointer' onClick={handleShowModal}><BsMinecart /></p>
        </div>

        {showModal === true ? (
            <div className='absolute p-8 rounded-2xl bg-white h-[30rem] w-[25rem] drop-shadow-sm top-[5.9rem] right-[12rem]'>
                <h2>Shopping Cart</h2>

                <div className='flex my-5 items-center border border-neutral-300 p-3 rounded-lg '>
                    <div className='flex gap-3 items-center'>
                        <div className='w-16 rounded-md'>
                            <Image src={product} className='rounded-md' alt='' width={0} height={0}/>
                        </div>
                        <div>
                            <h2>Italian Shoe</h2>
                            <p className='text-xs py-2'>Male</p>
                            <p className='text-xs'>Nice Shoe</p>
                        </div>
                    </div>

                    <div className='ml-auto flex flex-col gap-4'>
                        <button className='text-sm'>$1,000</button>
                        <button className='text-red-600 text-xs'>remove </button>
                    </div>
                </div>

                <div className='flex my-5 items-center border border-neutral-300 p-3 rounded-lg '>
                    <div className='flex gap-3 items-center'>
                        <div className='w-16 rounded-md'>
                            <Image src={product} className='rounded-md' alt='' width={0} height={0}/>
                        </div>
                        <div>
                            <h2>Italian Shoe</h2>
                            <p className='text-xs py-2'>Male</p>
                            <p className='text-xs'>Nice Shoe</p>
                        </div>
                    </div>

                    <div className='ml-auto flex flex-col gap-4'>
                        <button className='text-sm'>$1,000</button>
                        <button className='text-red-600 text-xs'>remove </button>
                    </div>
                </div>


                <div className='flex gap-5 mt-24'>
                    <button className='py-3 px-10 rounded-full text-xs border border-neutral-400'>View Checkout</button>
                    <button className='py-3 px-10 rounded-full text-xs myBg text-white'>Checkout</button>
                </div>
            </div>
        ) : ('')}
    </div>
  )
}

export default Navbar

'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import heroImage from '../Components/images/hero.webp'
import product from '../Components/images/plant-based protein.jpg'
import Link from 'next/link'

const HomeCompo = () => {

  const [productsData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [all, setAll] = useState(true)
  const [male, setMale] = useState(false)
  const [female, setFemale] = useState(false)


  const handleShowAll = () =>{
    setAll(true)
    setMale(false)
    setFemale(false)
  }

  const handleShowMale = () =>{
    setAll(false)
    setMale(true)
    setFemale(false)
  }

  const handleShowFemale = () =>{
    setAll(false)
    setMale(false)
    setFemale(true)
  }

  const url = 'http://127.0.0.1:8000/products/'

  const fetchProduct = async () =>{

    setIsLoading(true)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await response.json()
    setProductData(data)
    setIsLoading(false)
  }
    
  console.log(productsData)
    
  useEffect(()=>{
    fetchProduct()
  },[])

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


        <div className='pt-10'>
          <div>
            <div className='flex gap-5 items-center'>
              <button onClick={handleShowAll} className='rounded-full bg-black text-white py-2 px-5'>All Products</button>
              <button onClick={handleShowMale}>Male</button>
              <button onClick={handleShowFemale}>FeMale</button>
              
            </div>


            {all === true && (<>
            
              {isLoading === true ? (
                <div className='flex justify-center m-auto py-10'>
                  <span class="loader "></span>
                </div>
              ) : (
                <div className='grid grid-cols-4 pt-10 gap-5'>

                  {productsData.map((product, index)=>(
                    <Link href={`single/${product.id}`}>
                      <div className='cursor-pointer' key={index}>
                        <div className='w-full h-[18rem] rounded-xl overflow-hidden'>
                          <Image 
                            src={product.image} 
                            className='w-[30rem] rounded-xl' 
                            width={0} height={0} alt=''
                            unoptimized ={true}                      
                          />
                        </div>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                      </div>
                      </Link>
                  ))}

                </div>
              )}
            </>)}



            {male === true && (<>
            
              {isLoading === true ? (
                <div className='flex justify-center m-auto py-10'>
                  <span class="loader "></span>
                </div>
              ) : (
                <div className='grid grid-cols-4 pt-10 gap-5'>

                  {productsData.map((product)=>(

                    <>
                      <>
                      
                          {product.category.name === 'Male' && (

                            <div className='cursor-pointer'>
                              <div className='w-full h-[18rem] rounded-xl overflow-hidden'>
                                <Image 
                                  src={product.image} 
                                  className='w-[30rem] rounded-xl' 
                                  width={0} height={0} alt=''
                                  unoptimized ={true}                      
                                />
                              </div>
                              <h2>{product.name}</h2>
                              <p>{product.description}</p>
                              <p>${product.price}</p>
                              <p>Category: {product.category.name}</p>
                            </div>
                          )}
                      </>
                    </>



                  ))}

                </div>
              )}
            </>)}



            {female === true && (<>
            
            {isLoading === true ? (
              <div className='flex justify-center m-auto py-10'>
                <span class="loader "></span>
              </div>
            ) : (
              <div className='grid grid-cols-4 pt-10 gap-5'>

                {productsData.map((product)=>(

                  <>
                    <>
                    
                        {product.category.name === 'Female' && (

                          <div className='cursor-pointer'>
                            <div className='w-full h-[18rem] rounded-xl overflow-hidden'>
                              <Image 
                                src={product.image} 
                                className='w-[30rem] rounded-xl' 
                                width={0} height={0} alt=''
                                unoptimized ={true}                      
                              />
                            </div>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <p>Category: {product.category.name}</p>
                          </div>
                        )}
                    </>
                  </>



                ))}

              </div>
            )}
          </>)}

          </div>
        </div>
    </div>
  )
}

export default HomeCompo

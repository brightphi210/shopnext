
'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const SingleFood = ({params}) => {

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

    const add = () =>{
        setQuantity(quantity + 1)
    }

    const subtract = () =>{
        setQuantity(quantity - 1)
        if(quantity <= 1){
            setQuantity(1)
        }
    }


    let newPrice = quantity * product.price




    const url = `http://127.0.0.1:8000/product/update/${params.id}/`
    console.log('This is the data', params);

    const fetchData = async() =>{
        const res = await fetch(url, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        const data = await res.json()
        console.log(data)
        setProduct(data)
    }

    useEffect(()=>{
        fetchData();
    },[])




    // ============== Order Item =========================
    const url2 = `http://127.0.0.1:8000/orderitems/`

    const postOrderItem = async () =>{
        try {
            const res = await fetch(url2, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    product : params.id,
                    quantity : quantity,
                    price : newPrice
                })
            })
            
            const data = await res.json()
            console.log(data)
            if(res.status === 200 || res.ok){
                alert('Item added successfully')
            }
    
            else{
                alert('Something went wrong')
            }
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div>
      <h2 className='text-center flex m-auto justify-center py-5 my-10 text-3xl w-fit border-b border-b-neutral-300'>Single food</h2>

        <div className='flex items-center px-[20rem] gap-10'>
            <div className='w-full '>
                <h2 className='text-8xl'>{product.name}</h2>
                <p className='text-3xl py-3'>{product.price}</p>
                <p className='text-3xl'>{product.description}</p>

                <div className='flex items-center gap-5 pt-3'>
                    <p className='text-5xl cursor-pointer' onClick={subtract}>-</p>
                    <button className='bg-red-600 text-white rounded-xl py-2 px-6'>{quantity}</button>
                    <p className='text-5xl cursor-pointer' onClick={add}>+</p>
                </div>


                <button onClick={postOrderItem} className='bg-blue-600 text-white py-3 rounded-full w-full mt-10'>Add to cart</button>
            </div>

            <div className='w-full '>
            <Image 
                src={product.image} 
                className='w-full rounded-3xl' 
                width={0} height={0} alt=''
                unoptimized={true}                      
                />
            </div>
        </div>
        
    </div>
  )
}

export default SingleFood

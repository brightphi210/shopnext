
'use client'
import React from 'react'
import SingleFood from '../../../Components/singleFood'

const page = ({params}) => {

  return (
    <div>
      <SingleFood params={params}/>
    </div>
  )
}

export default page

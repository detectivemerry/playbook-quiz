"use client"
import Image from "next/image"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '@/app/context/App.context';

export default function Result() {

  const context = useContext(AppContext)
  const [ image, setImage ] = useState('') 

  function mode(arr){
    return arr.sort((a,b) =>
      arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
    ).pop();
  }

  useEffect(() => {
    const type = mode(context.answers)
    setImage(type + '.png')
  }, [context.answers])

    return (
    <div className = "bg-gray-700 lg:flex lg:flex-col lg:items-center">
      {image &&
        <Image
          src = {require(`@/input/images/${image}`)}
          alt={`Image of result`}
        />
      }
    </div>
  )
   
}

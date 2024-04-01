"use client"
import Image from "next/image"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '@/app/context/App.context';

export default function page() {
  try {

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
    console.log(type + '.png')
    setImage(type + '.png')
  }, [context.answers])
    //assign result based on context
  
    return (
    <div className = "bg-gray-700 lg:flex lg:flex-col lg:items-center">
      {image &&
        <Image
          src = {require(`@/input/images/${image}`)}
          alt={`Image of result`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "80%" }}
        />
      }
    </div>
  )
  } catch(error){
    throw new Error("internal server error")
  }
}

import React, { useState, useEffect } from 'react'
import photo from './components/bookphoto.jpeg'
import axios from 'axios'
import { useParams } from 'react-router'


export default function Bookinfo(prop) {
  const { id } = useParams()
  const [info, setInfo] = useState({
  })
  useEffect(() => {
      axios.get(`https://mycloudbook.onrender.com/${id}`)
          .then(res => setInfo(res.data))

  }, [ ])

  return (
    <div className="flex w-[90%] md:w-1/2 flex-col  border  shadow-lg my-4 mx-auto items-center p-5" style={{ fontFamily: "Barlow" }}>
      <div className='w-full h-full flex justify-center'>
        <img src={photo} alt="....." className='w-1/2 h-1/2' />
      </div>
    
      <div className="flex justify-between font-bold flex-row w-1/2 mx-auto my-2 text-xs md:text-base  ">
        <h3 className="h4">Published in :{info.year}</h3>
        <h3 className="h4">By :{info.author}</h3>
      </div>
      <div className="conatiner text-center  text-sm md:text-2xl">
          <h1 className='text-center   font-bold '>Title</h1>
          <h1 className='text-center   font-semiboldbold tracking-wide  '>{info.title}</h1>
          <h1 className='text-center   font-bold mt-5 '>Descripition</h1>
          <h1 className='text-center   font-semiboldbold tracking-wide  '>{info.desc}</h1>
      </div>
    </div>
  )
}

import React from 'react'
import {
   
    Link
  } from "react-router-dom";
  
export default function navbar() {
    return (
        <nav className="flex flex-row bg-black h-10 items-center justify-between text-white px-4  " style={{ fontFamily: "Golos Text" }}>
            {/* <div className="flex flex-row  justify-between"> */}
                <Link className="text-white hover:font-extrabold" style={{ fontFamily: "Golos Text" }} to="/">CLOUD BOOK</Link>
               
                    <button className='bg-white text-black px-2 py-0.5 hover:scale-105 hover:bg-gray-300'><Link className="" to="/add">Add Book</Link></button>
                {/* </div> */}
            {/* </div> */}
        </nav>
    )
}

import React,
{ useState, useEffect } from 'react'
import photo from './bookphoto.jpeg'
import axios from 'axios'
import {
    Link
} from "react-router-dom";
export default function Showbook() {
    const [booklist, setBooklist] = useState([])
    useEffect(() => {
        axios.get("https://mycloudbook.onrender.com")
            .then(res => setBooklist(res.data))

    }, [])
    const handleondelete = (id) => {
        axios.post("https://mycloudbook.onrender.com/delete", { id })
            .then(res => setBooklist(res.data))

    }

    return (
        <>
            <div >
                <div class="flex  h-screen justify-between md:flex-row  my-3 flex-col  flex-wrap items-center mx-auto w-[70%] *:border *:rounded-md  *:border-gray-400  *:shadow-lg  *:bg-gray-100 *:px-2 *:py-0.5 dark:text-sky-300">
                    {booklist.map(list => {
                        return (<div class="card col-md-4 mx-3 my-3 p-2  h-2/3  w-[10rem] sm:w-[20rem]" key={list._id} >
                            <div className="container flex justify-end my-2 px-0">
                                <i className="fa-sharp fa-solid fa-trash fa-shake fa-lg my-2" style={{ color: " #1b040b;" }} onClick={() => handleondelete(list._id)}></i>
                            </div>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="" style={{ fontFamily: "Barlow" }}>
                                <h1 className='text-xl font-bold  text-center my-1'>Title </h1>
                                 <h1  className='font-normal text-xl text-center '>{list.title}</h1>
                                <div className="flex justify-between my-1 px-3" >
                                    <h4 className=''>Published at {list.year}</h4>
                                    <h4 className=''>By {list.author}</h4>
                                </div>
                                 <h1 className='font-bold text-xlv text-center'>Descriptions</h1>
                                <h1 className='text-center my-1 '>{list.desc &&list.desc.slice(0,40)} </h1>
                               
                               
                            </div>
                            <div className='text-center mt-4 '> <Link to={`/view/${list._id}`} className=" bg-black p-3 rounded-sm   text-white font-normal hover:scale-105 hover:font-semibold"  >Read More</Link></div>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}

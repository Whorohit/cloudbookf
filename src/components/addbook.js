import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {
   
    Link, useNavigate
  } from "react-router-dom";
import { set } from 'mongoose';
  

export default function Addbook() {
  const navigate=  useNavigate();
    const [bookobj, setBookobj] = useState( {
        title:"",
        author:"",
        year:"",
        isbn:"",
        desc:""
    })
    const [vaild, setvaild] = useState(false)
    const  handleonchange=(e)=>{
        const {name,value}=e.target
        setBookobj({
            ...bookobj,
            [name]:value
        })
    
    }

    const Add =async()=>
    {
        if(bookobj.title&&bookobj.desc&&bookobj.desc&&bookobj.author&& bookobj.year){
            setvaild(false)
            setBookobj({ 
                title:document.getElementsByName('title').value,
                author:document.getElementsByName('author').value,
                year:document.getElementsByName('year').value,
                isbn:document.getElementsByName('isbn').value,
                desc:document.getElementsByName('desc').value
            })
           await axios.post("https://mycloudbook.onrender.com/addbook",bookobj)
          setBookobj({
            title:"",
            author:"",
            year:"",
            isbn:"",
            desc:""
          })
          setTimeout(() => {
            navigate('/')
          }, 2000);
        }
        else{
           setvaild(true)
        }
    }

    return (
        <>
            <div  className="w-4/5 mx-auto my-4 text-center p-3  border  border-gray-400  rounded-md  " >
                <div className="mb-3">
                    <label for="formGroupExampleInput" className=" block font-semibold text-lg text-left  w-[70%] mx-auto ">Enter the Book Title</label>
                    <input type="text" className={` w-[70%] mx-auto  border border-gray-300  rounded-md h-8 
                     ${vaild ?'text-pink-600 focus:border-pink-500 ring-pink-500' :""}` } id="formGroupExampleInput"  autoComplete='off' name='title' placeholder="Book Title" value={bookobj.title} onChange={handleonchange}/>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className=" block font-semibold text-lg text-left  w-[70%] mx-auto ">Enter the Author Name</label>
                    <input type="text" className={` w-[70%] mx-auto  border border-gray-300  rounded-md h-8 
                     ${vaild ?'invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' :" "}` } id="formGroupExampleInput" autoComplete='off' name='author' placeholder="Author Name" Value={bookobj.author} onChange={handleonchange}/>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className=" block font-semibold text-lg text-left  w-[70%] mx-auto ">Enter the Published Year</label>
                    <input type="date" className={` w-[70%] mx-auto  border border-gray-300  rounded-md h-8 
                     ${!vaild ?'invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' :" "}` } id="formGroupExampleInput" autoComplete='off'  name='year' placeholder=" Published Year" defaultValue={bookobj.year} onChange={handleonchange}/>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className=" block font-semibold text-lg text-left  w-[70%] mx-auto ">Enter the ISBN Number</label>
                    <input type='number'className={` w-[70%] mx-auto  border border-gray-300  rounded-md h-8 
                     ${!vaild ?'invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' :" "}` } id="formGroupExampleInput"  autoComplete='off'  name='isbn'  placeholder="ISBN Number" defaultValue={bookobj.isbn}  onChange={handleonchange}/>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className=" block font-semibold text-lg text-left  w-[70%] mx-auto ">Enter the Description</label>
                    <input type='text' className={` w-[70%] mx-auto  border border-gray-300  rounded-md h-8 
                     ${!vaild ?'invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' :" "}` } id="formGroupExampleInput"  autoComplete='off'  name='desc'  placeholder="Description" defaultValue={bookobj.desc}  onChange={handleonchange}/>
                </div>
                <div className=" flex justify-center my-2 ">
                <button type="submit" className="bg-black text-xl rounded-md text-white font-semibold p-2 hover:font-extrabold    " onClick={Add}>Submit</button>
                </div>
            </div>
           
        </>

    )
}

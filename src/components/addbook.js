import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {
   
    Link
  } from "react-router-dom";
  

export default function Addbook() {
    const [bookobj, setBookobj] = useState( {
        title:"",
        author:"",
        year:12,
        isbn:13
    })
    const  handleonchange=(e)=>{
        const {name,value}=e.target
        setBookobj({
            ...bookobj,
            [name]:value
        })
    
    }

    const Add =()=>
    {
        if(bookobj.title){
            setBookobj({ 
                title:document.getElementsByName('title').value,
                author:document.getElementsByName('author').value,
                year:document.getElementsByName('year').value,
                isbn:document.getElementsByName('isbn').value
            })
           axios.post("http://localhost:90/addbook",bookobj)
        }
    }

    return (
        <>
            <form  className="container " style={{ marginTop: "10vh", width: "40%" }}>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Enter the Book Title</label>
                    <input type="text" class="form-control" id="formGroupExampleInput"  autoComplete='off' name='title' placeholder="Book Title" value={bookobj.title} onChange={handleonchange}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Enter the Author Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" autoComplete='off' name='author' placeholder="Author Name" Value={bookobj.author} onChange={handleonchange}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Enter the Published Year</label>
                    <input type="number" class="form-control" id="formGroupExampleInput" autoComplete='off'  name='year' placeholder=" Published Year" defaultValue={bookobj.year} onChange={handleonchange}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Enter the ISBN Number</label>
                    <input type='number' class="form-control" id="formGroupExampleInput"  autoComplete='off'  name='isbn'  placeholder="ISBN Number" defaultValue={bookobj.isbn}  onChange={handleonchange}/>
                </div>
                <div className="container d-flex justify-content-center">
                <button type="submit" class="btn btn-dark" onClick={Add}><Link to='/add' className='text-decoration-none text-light'>Submit</Link></button>
                </div>
            </form>
        </>

    )
}

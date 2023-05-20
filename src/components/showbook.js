import React,{ useState, useEffect } from 'react'
import photo from './bookphoto.jpeg'
import axios from 'axios'
import {
    Link
} from "react-router-dom";

export default function Showbook(prop) {
    const [booklist, setBooklist] = useState([])
    useEffect(() => {
        axios.get("http://localhost:90/")
            .then(res => setBooklist(res.data))

    }, [])
    const handleondelete = (id) => {
        axios.post("http://localhost:90/delete", { id })
            .then(res => setBooklist(res.data))

    }
    const change=(id)=>{
        prop.setbookid(
            id)
    }

    return (
        <>
            <div style={{ marginTop: "10vh" }}>
                <div class="container text-center d-flex justify-content-between row mx-auto w-75">
                    {booklist.map(list => {
                        return <div class="card col-md-4 mx-3 my-3" key={list._id} >
                            <div className="container d-flex justify-content-end my-2 px-0">
                                <i className="fa-sharp fa-solid fa-trash fa-shake fa-lg my-2" style={{ color: " #1b040b;" }} onClick={() => handleondelete(list._id)}></i>
                            </div>
                            <img src={photo} class="card-img-top" alt="..." />

                            <div class="card-body " style={{ fontFamily: "Barlow" }}>
                                <h5 class="card-title  fw-bolder" >{list.title}</h5>
                                <div className="container d-flex justify-content-between my-1 px-0" >
                                    <h4 className='h6'>Published in {list.year}</h4>
                                    <h4 className='h6'>By {list.author}</h4>
                                </div>
                                <h4 className='h6 text-start'>ISBN Number: {list.isbn}</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/id" class="btn btn-primary" onClick={()=>change(list._id)} >Read More</Link>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

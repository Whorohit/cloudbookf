import React, { useState, useEffect } from 'react'
import photo from './bookphoto.jpeg'
import axios from 'axios'


export default function Bookinfo(prop) {
    let id = prop.bookid
    const [info, setInfo] = useState({
    })
    useEffect(() => {
        axios.get("http://localhost:90/id", { id })
            .then(res => setInfo(res.data))

    }, [])

    return (
        <div className="conatiner w-75 my-4 mx-auto" style={{ fontFamily: "Barlow" }}>
            <img src={photo} alt="....." />
            <h2 className="h2 fw-bolder fs-3  text-center "> {info.title} </h2>

            <div className="conatiner d-flex justify-content-around">
                <h3 className="h4">Published in {info.year}</h3>
                <h3 className="h4">By {info.author}</h3>
            </div>
            <div className="conatiner text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vero quia corrupti magni magnam, ad error fugiat dolorum quis consequatur quae earum alias quidem, quibusdam ipsum explicabo nihil, soluta cum.
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import axio from 'axios'
import { useSelector, useDispatch } from 'react-redux'


const Forcast = () => {
    const [weekly, setWeekly] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(
        () => {
            async function asyncOpenData(){
               var i = await JsonOpenData();
               console.log(i);
               return i;
            }

            console.log(asyncOpenData())
            console.log(data)
        },[]
    )

    const JsonOpenData = () => {
        return axio({
            url: 'http://api.openweathermap.org/data/2.5/forecast?zip=19475,us&cnt=40&units=imperial&appid=fff46882afbf25c4f00498e88eb69975',
            method: 'get'     
        })
    }

    return (
        <div>
            Test
        </div>
    )

}

export default Forcast
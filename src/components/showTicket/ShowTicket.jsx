import React, { useEffect, useState } from 'react'
import './showTic.css'
import QRCode from 'react-qr-code';

function ShowTicket() {

    const [ticList, setTicList] = useState([])
    const [hasFetched, setHasFetched] = useState(false);

    const setTicket = (r)=>{
        setTicList(r)
    }

    const lode = async () => {
        try {
            let result = await fetch('http://localhost:4000/', {

                method: 'put',
                body: JSON.stringify({ State : '', City : '', Name : '' }),
                headers: {
                  // "Accept":"application/json",
                  'Content-Type': 'application/json',
                  // 'Content-Length': "",
                },
          
              })
              result = await result.json()
              setTicket(result)
              console.log(result)
                           

        } catch (error) {
            console.log(error);

        }finally{
            //setTicList(result);
            console.log("fuuu",ticList);
        }
    }

    const lode1 = ()=>{
        //while (Object.keys(ticList).length === 0) {
            console.log(Object.keys(ticList).length);            
            lode();
        //}
    }

    useEffect(() => {
       
        if (!hasFetched) {
            lode1()             
            setHasFetched(true)
            console.log(hasFetched);
            console.log("final",ticList);
            
        }

    },[])
    return (
        <div>
            <div>
                {/* {ticList.map((item,index)=>{
                    <div key={index} >{}</div>
                })} */}
            </div>
            <div className="card">
                <div className="card-details">
                    <p className="text-title">Card title</p>
                    <p className="text-body"><QRCode value="https://example.com" size={110} /></p>
                </div>
                <button className="card-button">More info</button>
            </div>
        </div>
    )
}

export default ShowTicket
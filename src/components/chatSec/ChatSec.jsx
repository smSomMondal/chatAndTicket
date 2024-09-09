import React, { useEffect } from 'react'
import axios from 'axios'
// import items from '../dataSet/tourBot.tickets.json'
import { useState } from 'react'
import './chatCard.css'


function ChatSec() {

  const [items, setItems] = useState([])
  const [peop, setPeop] = useState([1,2,3,4,5,6,7,8])
  const [chs, setChs] = useState('')
  const [State, setState] = useState("")
  const [City, setCity] = useState('')
  const [Name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [peplNo, setPeplNo] = useState('')

  useEffect(() => {

    document.getElementById("op2").style.display = "none";
    document.getElementById("op3").style.display = "none";
    document.getElementById("op4").style.display = "none";
    document.getElementById("op5").style.display = "none";
    document.getElementById("op6").style.display = "none";

  }, [])

  const chOp1 = async () => {
    if (chs !== "ticket") {
      return;
    }
    console.log("hii1");

    let result = await fetch('http://localhost:4000/', {

      method: 'put',
      body: JSON.stringify({ State, City, Name }),
      headers: {
        // "Accept":"application/json",
        'Content-Type': 'application/json',
        // 'Content-Length': "",
      },

    })
    result = await result.json()
    console.log(result);
    document.getElementById("op1").style.display = "none";
    document.getElementById("op2").style.display = "block";
    setItems(result)

  }

  const chOp2 = async () => {
    console.log("hii2 state", State);
    /*let op = items[e];
    //setState(op);
    console.log(op);*/
    let result = await fetch('http://localhost:4000/', {

      method: 'put',
      body: JSON.stringify({ State, City, Name }),
      headers: {
        // "Accept":"application/json",
        'Content-Type': 'application/json',
        // 'Content-Length': "",
      },

    })
    result = await result.json()
    //setState(op)
    console.log(State);
    console.log(result);
    document.getElementById("op2").style.display = "none";
    document.getElementById("op3").style.display = "block";
    setItems(result)

  }

  const chOp3 = async () => {
    //console.log(op);
    //let op = items[e];
    //setState(op);
    console.log("cityy ch",City);
    let result = await fetch('http://localhost:4000/', {

      method: 'put',
      body: JSON.stringify({ State, City, Name }),
      headers: {
        // "Accept":"application/json",
        'Content-Type': 'application/json',
        // 'Content-Length': "",
      },

    })
    result = await result.json()
    //setCity(op)
    console.log(result);
    console.log(City);
    document.getElementById("op3").style.display = "none";
    document.getElementById("op4").style.display = "block";
    setItems(result)

  }

  const chOp4 = async () => {
    let result = await fetch('http://localhost:4000/', {

      method: 'put',
      body: JSON.stringify({ State, City, Name }),
      headers: {
        // "Accept":"application/json",
        'Content-Type': 'application/json',
        // 'Content-Length': "",
      },

    })
    result = await result.json()
    result = result[0]["Entrance_Fee_in_INR"]
    console.log(result);
    setPrice(result);
    document.getElementById("op4").style.display = "none";
    document.getElementById("op5").style.display = "block";
    

  }
  const chOp5 = async () => {
    if(peplNo === '')
    {
      return;
    }
    let totel = parseInt(price,10)*parseInt(peplNo,10);
    console.log(totel);
    setPrice(totel);
    document.getElementById("op5").style.display = "none";
    document.getElementById("op6").style.display = "block";

  }

  return (

    <>
      {/*<div>
      <div id='op1'>
        <div>chose option</div>
        <div onClick={chOp1}>tikic</div>
        <div >problem</div>
      </div>
      <div id='op2'>
        <div>chose state</div>
        <div>
          {items.map((item, index) => (
            <div key={index} onClick={(e) => { chOp2(index) }}>{item}</div>
          ))}
        </div>
      </div>
      <div id='op3'>
        <div>chose city</div>
        <div>
          {items.map((item, index) => (
            <div key={index} onClick={(e) => { chOp3(index) }}>{item}</div>
          ))}
        </div>
      </div>
      <div id='op4'>
        <div>entry place</div>
        <div>
          {items.map((item, index) => (
            <div key={index} onClick={(e) => { chOp4(index) }}>{item}</div>
          ))}
        </div>
      </div>
      <div id='op5'>
        <div>price is</div>
        <div>
          {price}
        </div>
      </div>
    </div>*/}
      < div className="chat-card" >
        <div className="chat-header">
          <div className="h2">Buy Tickets</div>
        </div>
        <div id='op1'>
          <div className="chat-body">
            <div className="message incoming">
              <p>Choose the options</p>
            </div>
            {/* <div className="message outgoing">
              <p>I have a question about your services.rdfghjtyugkhj,jhftydjchgnjyhulkj,htdtr</p>
            </div> */}
            <div className="message incoming">
              <p onClick={(e) => setChs("ticket")}>ticket</p>
            </div>
            <div className="message incoming">
              <p>problem</p>
            </div>
          </div>
          <div className="chat-footer">
            <input placeholder="Select Trom Top" type="text" value={chs} />
            <button onClick={chOp1}>Send</button>
          </div>
        </div>
        <div id='op2'>
          <div className="chat-body">
            <div className="message incoming">
              <p>Choose Your State :</p>
            </div>
            {items.map((item, index) => (
              <div className="message incoming" key={index} onClick={(e) => setState(item)}>
                <p>{item}</p>
              </div>
            ))}

          </div>
          <div className="chat-footer">
            <input placeholder="Select Trom Top" type="text"  value={State}/>
            <button onClick={chOp2}>Send</button>
          </div>
        </div>
        <div id='op3'>
          <div className="chat-body">
            <div className="message incoming">
              <p>Choose Your City :</p>
            </div>
            {items.map((item, index) => (
              <div className="message incoming" key={index} onClick={(e) => setCity(item)}>
                <p>{item}</p>
              </div>
            ))}

          </div>
          <div className="chat-footer">
            <input placeholder="Select Trom Top" type="text"  value={City}/>
            <button onClick={chOp3} >Send</button>
          </div>
        </div>
        <div id='op4'>
          <div className="chat-body">
            <div className="message incoming">
              <p>Choose Your place :</p>
            </div>
            {items.map((item, index) => (
              <div className="message incoming" key={index} onClick={(e) => setName(item)}>
                <p>{item}</p>
              </div>
            ))}

          </div>
          <div className="chat-footer">
            <input placeholder="Select Trom Top" type="text"  value={Name}/>
            <button onClick={chOp4} >Send</button>
          </div>
        </div>
        <div id='op5'>
          <div className="chat-body">
            <div className="message incoming">
              <p>For One Person Ticket Cost is {price} Ruppe</p>
            </div>
            <div className="message incoming">
              <p>Choose Number Of People :</p>
            </div>
            {peop.map((item, index) => (
              <div className="message incoming" key={index} onClick={(e) => setPeplNo(item)}>
                <p>{item}</p>
              </div>
            ))}

          </div>
          <div className="chat-footer">
            <input placeholder="Select Trom Top" type="text"  value={peplNo}/>
            <button onClick={chOp5}>Send</button>
          </div>
        </div>
        <div id='op6'>
          <div className="chat-body">
            <div className="message incoming">
              <p>total price of ticket is {price} ruppe</p>
            </div>
            <div className="message incoming">
              <p>to continue click on buy</p>
            </div>
          </div>
          <div className="chat-footer">
            <button id='b1'>Cancel</button>
            <button id='b2'>Buy</button>
          </div>
        </div>
      </div >

    </>
  )
}

export default ChatSec
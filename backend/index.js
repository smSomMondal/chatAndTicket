const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const cors = require("cors");
const mongoose = require('mongoose');
const path = require('path')
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

const Ticket = require('./model/infoPlace')
const User = require('./model/userModel')

const jwt = require("jsonwebtoken");
const { Stats } = require("fs");
const generateToken = (id) => {
  return jwt.sign({ id }, "WE will 132 Not STOp", {
    expiresIn: 20,
  });
}

app.put('/', async (req, res) => {
  console.log(req.body);
  const { State, City, Name, Type } = req.body;
  const keywords = {
    $and: [
      { State: { $regex: req.body.State, $options: "i" } },
      { City: { $regex: req.body.City, $options: "i" } },
      { Name: { $regex: req.body.Name, $options: "i" } },
      { Type: { $regex: req.body.Type, $options: "i" } }

    ]
  }
  // let result = await Ticket.distinct("State");
  if (State === '' && City === '' && Name === '') {
    let result = await Ticket.distinct("State");
    res.send(result)
  } else if (State !== '' && City === '' && Name === '') {
    let result = await Ticket.find({ State: req.body.State }).distinct("City");
    res.send(result)
  } else if (State !== '' && City !== '' && Name === '') {
    let result = await Ticket.find({ City: req.body.City }).distinct("Name");
    res.send(result)
  } else if (State !== '' && City !== '' && Name !== '') {
    let result = await Ticket.find({ Name: req.body.Name }).select("Entrance_Fee_in_INR");
    res.send(result)
  }


})

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({ name, email, password });
    if (user) {
      res.status(201).json({
        message: "success"
      })
    }
    else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
      console.log(error);
      
  }

});
app.post("/bookTicket", async (req, res) => {
  try {
    const { email,State,City,Name,price,peplNo } = req.body;
    const user= await User.findOne({email});
    if(user){
      const current = new Date();
      const ticInfo=[];
      const obj ={}
      obj.state=State;
      obj.city=City;
      obj.place=Name;
      obj.people=peplNo;
      obj.total=price;
      obj.time=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      //console.log(obj);      
      ticInfo.push(obj);
      user.ticketHistory = user.ticketHistory.concat(ticInfo)
      user.save()
      //console.log(user);      
      res.status(200).send("done")
    }
  } catch (error) {
    res.status(201).send("error")
      console.log(error);
      
  }

});

app.put("/ticInfo",async(req,res)=>{
  const {email} = req.body;
  try {
    const user = await User.findOne({email}).select("ticketHistory")
    res.status(200).send(user.ticketHistory)
  } catch (error) {
    res.status(201).send("error")
    console.log();
    
  }
  
})

app.put("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.comparePassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      address: user.address,
      pic: user.pic,
      token: generateToken(user._id),
    });
  }
  else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

app.listen(4000)
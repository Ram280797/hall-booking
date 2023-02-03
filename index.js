const express = require('express');
const app = express();


let room =[
    {
        ' numberOfSeats '  : 60,
       ' amenities  '  : "AC",
       ' pricePerHour ': 100
    },
    
    {
        ' numberOfSeats '  : 40,
        ' amenities  '  : "AC",
        ' pricePerHour ': 80

    },
    {
        ' numberOfSeats '  : 80,
       ' amenities  '  : "AC",
       ' pricePerHour ': 140
    },
     {
        ' numberOfSeats '  : 100,
       ' amenities  '  : "AC",
       ' pricePerHour ': 200
    },
];

let booking =[
    {
        "Customer Name" : "Ramkumar",
        "Date" : "23/02/2022",
        "start Time" : "1:00 pm",
        "end Time" : "2:00 pm",
        "room Id": 34
    },
    {
        "Customer Name" : "Vicky",
        "Date" : "2/02/2022",
        "start Time" : "1:00 pm",
        "end Time" : "2:00 pm",
        "room Id": 24
    },

    {
        "Customer Name" : "Rajesh",
        "Date" : "23/02/2022",
        "start Time" : "1:00 pm",
        "end Time" : "2:00 pm",
        "room Id": 31
    },
];
var data = [
    {
        "room Id": 31 ,
        "booked status": "Active",
        "Customer Name" : "Rajesh",
        "Date" : "23/02/2022",
        "start Time" : "1:00 pm",
        "end Time" : "2:00 pm",
    },
    {
        "room Id": 34 ,
        "booked status": "Active",
        "Customer Name" : "Ramkumar",
        "Date" : "23/02/2022",
        "start Time" : "1:00 pm",
        "end Time" : "2:00 pm",
    },
    {
        "room Id": 32 ,
        "booked status": "notbooked",
        "Customer Name" : "",
        "Date" : "",
        "start Time" : "",
        "end Time" : "",
    },
    {
        "room Id": 24,
        "booked status": "vicky",
        "Customer Name" : "Rajesh",
        "Date" : "23/02/2022",
        "start Time" : "1:00 pm",
        "end Time" : "2:00 pm",
    },
];
var customer=[
    {
        "room Id": 31 ,
        "booked status": "Active",
        "Customer Name" : "Rajesh",
        "Date" : "23/02/2022",
        "start Time" : "1:00 pm",
        "end Time" : "2:00 pm",
    },
    {
        "room Id": 34 ,
        "booked status": "Active",
        "Customer Name" : "Ramkumar",
        "Date" : "23/02/2022",
        "start Time" : "1:00 pm",
        "end Time" : "2:00 pm",
    },
  
    {
        "room Id": 24,
        "booked status": "vicky",
        "Customer Name" : "Rajesh",
        "Date" : "23/02/2022",
        "start Time" : "1:00 pm",
        "end Time" : "2:00 pm",
    },
];

app.post("/room" ,(req ,res) => {
    res.json(room);
}
  );

  app.get("/booking",(req,res) =>{
    res.json(booking);
  }) ;

  app.get("/data",(req,res) =>{
    res.json(data);
  }) ;

  app.get("/customer",(req,res) =>{
    res.json(customer);
  }) ;


app.listen(3000)
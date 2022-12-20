import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from './Carousel'
import { useState, useEffect } from "react";
import List from './List'
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {

    getData();
   
  },[]);

  const getData=async()=>{

  //   fetch(`https://foodbukka.herokuapp.com/api/v1/menu`)
  //  .then((response) =>
  //  console.log(response));


   const response = await fetch("https://foodbukka.herokuapp.com/api/v1/menu")
               const data =await response.json();
   console.log(data.Result);
   setData(data.Result);

  }

  return (
    <div>
        {/* <p>lorem ipsum dolor sit amet, consectetur adipl lorem</p> */}
        {/* <Link to='/about'>go to about</Link> */}
        <Carousel/>
        {/* <List/> */}
        <Row>
       
      {
        data.map((val,idx)=>{
          return  <List
          data={val}
          />
          // console.log(val)
        })
      }
      </Row>
      
    </div>
  )
}

export default Home
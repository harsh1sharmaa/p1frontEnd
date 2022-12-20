import React from 'react'
import {useParams} from 'react-router-dom'


function User() {

    const params = useParams();
    const {name} = params
    // console.log(name);
  return (
    <div>User : {name} </div>
  )
}

export default User
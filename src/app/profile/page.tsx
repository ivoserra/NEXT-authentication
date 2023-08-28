"use client"
import React, { useEffect, useState } from 'react'

export default function Profile() {

  const [ users, setUsers] = useState<[]>([])

  const getData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    if(data){
      setUsers(data)
    }
    console.log(data)
  }

  useEffect(()=>{
    getData()
  },[])


  return (
  <>
   <div>Profile</div>
   { users?.map((user: any, i)=>{
     return (
      <div key={i} onClick={()=> alert(user?.name)}>
        <ul>
          <h1>{user?.name}</h1>
          <li>
            <p>{user?.phone}</p>
          </li>
          <li>
            <p>{user?.username}</p>
          </li>
          <li>
            <p>{user?.website}</p>
          </li>
        </ul>
      </div>
     )
   })}
  </>
    


  )
}

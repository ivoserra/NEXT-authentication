import React from 'react'

export default function page({params}:any) {

  return (
    <div>
        <h1>User profile {params.id}</h1>
    </div>
  )
}

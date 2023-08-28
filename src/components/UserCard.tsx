"use client"
import React from "react";

export const UserCard = ({ user }: any) => {
  return (
    <ul onClick={()=> alert('username is ' + user?.name)}>
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
  );
};

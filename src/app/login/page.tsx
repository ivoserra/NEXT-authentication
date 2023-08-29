"use client";
import { Input } from "@/components/Input";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [user, setUser] = useState({ userName: "", password: "", email: "" });
  const [disabled, setDisabled] = useState<boolean>(true)


  const onLogin= async()=>{
    console.log('USER',user)
  }
  useEffect(()=>{
    if(user.userName.length > 0 && user.email.length > 0 && user.password.length > 0){
      setDisabled(false)
    } else {
      setDisabled(true)
    }

  },[user])


  return (
    <div className="flex h-screen bg-gray-200 justify-center items-center">
      <div  className="auth-form flex flex-col gap-5">
        <h1 className="text-2xl">Register</h1>
        <hr />
        <Input
          type="text"
          name="userName"
          label="Username"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          error={user.userName.length === 0 ? "Username is required" : ""}
          placeholder="Enter your name"
        />
        <Input
          type="email"
          name="email"
          label="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          error={user.email.length === 0 ? "Username is required" : ""}
          placeholder="your email"
        />
        <Input
          type="password"
          label="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          error={user.password.length === 0 ? "Username is required" : ""}
          placeholder="your password"
        />
        <button onClick={onLogin} className={disabled ? "disabled-btn": "" }>
          Register
        </button>
        <Link href="/login">Dont have an accoun? {'=>'} Register</Link>
      </div>
    </div>
  );
}

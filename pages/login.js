import React from "react";
import Link from "next/link";

function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://media.graphassets.com/VycFsiFfTGCj2JmpAHkV')] bg-cover">
      <span className="text-5xl opacity-100">Login</span>
      <form className="flex flex-col mt-5">
        <label className="m-2">Email</label>
        <input
          className="bg-white border-none p-2 rounded-md"
          type="text"
          placeholder="Enter your email..."
        />
        <label className="m-2">Password</label>
        <input
          className="bg-white border-none p-2 rounded-md"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="text-white rounded-md border-none p-2 mt-5 bg-[#f08080] hover:bg-white hover:text-[#f08080] hover:opacity-60">
          Login
        </button>
      </form>
      <button className="absolute top-10 right-10 text-white border-none bg-teal-600 px-4 py-2 rounded-md hover:bg-white hover:text-teal-600 hover:opacity-60">
        <Link href="/register">Register</Link>
      </button>
    </div>
  );
}

export default Login;

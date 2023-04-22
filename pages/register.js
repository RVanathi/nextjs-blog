import React from "react";
import Link from "next/link";

function Register() {
  return (
    <div>
      <span>Register</span>
      <form>
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <button>Register</button>
      </form>
      <button>
        <Link href="/login">Login</Link>
      </button>
    </div>
  );
}

export default Register;

import React from "react";
import Link from "next/link";

function Login() {
  return (
    <div>
      <span>Login</span>
      <form>
        <label>Email</label>
        <input type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." />
        <button>Login</button>
      </form>
      <button>
        <Link href="/register">Register</Link>
      </button>
    </div>
  );
}

export default Login;

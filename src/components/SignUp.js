import React from "react";

function SignUp() {
    return (
      <form>
        <h1>Sign up</h1>
        <div>
          <input type="text" name="username" placeholder="Enter username" required/>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Create password" required/>
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Sign up" />
      </form>
    );
  }

  export default SignUp;
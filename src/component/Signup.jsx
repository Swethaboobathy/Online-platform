import React, { useState } from 'react';

const Signup = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleSignIn = () => {


    console.log(`Signing in with email: ${email} and password: ${password}`);

  };

  return (

    <div>

      <h2>SIGN UP</h2>

      <form>

        <label>Email:</label><br/>

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>

        <label>Password:</label><br/>

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>

        <button type="button" onClick={handleSignIn}>Sign Up</button>

      </form>

    </div>

  );

};

export default Signup

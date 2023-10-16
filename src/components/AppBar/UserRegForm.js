import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { register } from "./UserOptions";

export const RegistrationForm = () => {
  

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      
     //   const userData = useSelector((state) => state.user);
        const dispatch = useDispatch();
      
        const formSubmitHandlerRegForm = (e) => {
          e.preventDefault();
          const newUser = {
            name,
            email, 
            password,
            token: null
          }
          console.log("reg")
           dispatch(register(newUser));
           setName(""); ////////////////// change to reset
           setEmail("");
           setPassword("");
        }

       
    return(
    <div>
        <form onSubmit={formSubmitHandlerRegForm}>
            <p>RegistrationForm</p>
<input type="text" name="name" id="name" placeholder="type your UserName"  value={name} onChange={(e) => setName(e.target.value)}></input>
<input type="email" name="email" id="email" placeholder="type your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
<input  type="password" name="password" id="password" placeholder="type your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
<button type="submit">registration</button>
</form>
<button type="button">Show password</button>
</div>)
}
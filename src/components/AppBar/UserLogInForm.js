//    import React, { useState } from "react";
//     import { useDispatch } from "react-redux";
//     import { loginThunk } from "./UserOptions";
  
    
//     export const LogInForm = () => {
    
//       const [email, setEmail] = useState("");
//       const [password, setPassword] = useState("");
    
//       const dispatch = useDispatch();
    
//       const formSubmitHandlerRegForm = (e) => {
//         e.preventDefault();
//         const user = {
//           email,
//           password,
//         };
    
//         dispatch(loginThunk(user)); // newUser вместе с register
//         setEmail("");
//         setPassword("");
//       };

//     return(
//         <div>
//         <form onSubmit={formSubmitHandlerRegForm}>
//           <p>LoginForm</p>
         
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Type your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="Type your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
        
//         </form>
//         <button type="button">Show password</button>
//       </div>)
// }
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { registrationThunk } from "./UserOptions";

// export const RegistrationForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();

//   const formSubmitHandlerRegForm = (e) => {
//     e.preventDefault();
//     const newUser = {
//       name,
//       email,
//       password,
//     };

//     dispatch(registrationThunk(newUser)); 
//     setName(""); 
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div>
//       <form onSubmit={formSubmitHandlerRegForm}>
//         <p>RegistrationForm</p>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Type your UserName"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Type your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Type your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Registration</button>
//       </form>
//       <button type="button">Show password</button>
//     </div>
//   );
// };

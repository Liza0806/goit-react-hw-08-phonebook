import React from "react";
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/index'
//import { ContactsRender } from "./Pages/ContactsListPage/ContactsList";
// import { ContactsList } from "./Pages/ContactsListPage/index";
import { Phonebook } from "./Pages/Phonebook";
import Layout from '../Layout/index'
import { Suspense, lazy } from 'react'
// import { ContactForm } from "./Forms/FormCreateContact/index";


import { Toaster } from 'react-hot-toast'

const Login = lazy(() => import('./Pages/Login/index'))
const Registration = lazy(() => import('./Pages/Registration/index'))



const App = () => { 


return (
  <>
    {/* <Loader /> */}
    <Toaster />

    <Suspense fallback={'Loading.....'}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/phonebook/*" element={<Phonebook />}>
        {/* <Route index element={<ContactsList />} /> {/* Добавьте маршрут для ContactsList */}
        {/* <Route path="addcontact" element={<ContactForm />} /> Добавьте маршрут для Form */} 
      </Route>
    </Routes>
      {/* <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
        
        </Route>
        <Route
          path='/login'
          element={
            // <PublicRoute>
              <Login />
          // </PublicRoute>
          }
        />
        <Route
          path='/registration'
          element={
            // <PublicRoute>
              <Registration />
            // </PublicRoute>
          }
        />
   
  
       
   <Route path="/phonebook" element={<Layout />}>
        <Route index element={<Phonebook />}>
          <Route path="addcontact" element={<Form />} /> {/* Добавьте маршрут для Form */}
          {/* <Route path="contacts" element={<ContactsList />} /> {/* Добавьте маршрут для списка контактов */}
        
    </Suspense>
  </>
)
}

export default App
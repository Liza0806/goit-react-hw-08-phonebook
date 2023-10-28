import React from "react";
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/index'
import Header from '../components/Header/Header'
import { Phonebook } from "./Pages/Phonebook";
import Layout from '../Layout/index'
import { Suspense, lazy } from 'react'
import { Toaster } from 'react-hot-toast'
import { PrivateRoute } from "./Guards/PrivateRoute";
import { PublicRoute } from "./Guards/PublicPoute";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { refreshThunk } from 'redux/thunks'


const Login = lazy(() => import('./Pages/Login/index'))
const Registration = lazy(() => import('./Pages/Registration/index'))

const App = () => { 
  
  const dispatch = useDispatch()
  useEffect(() => {

  dispatch(refreshThunk())
 
  }, [dispatch])
  return (
    <>
      <Toaster />
      <Header />
      <Suspense fallback={'Loading.....'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/registration" element={<PublicRoute><Registration /></PublicRoute>} />
          <Route path="/phonebook" element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>}>
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App

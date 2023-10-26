import { Outlet } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { useEffect, useState } from 'react'
// import { refreshThunk } from 'redux/auth/thunks'

const Layout = () => {
	// const dispatch = useDispatch()


	//  useEffect(() => {
	//  	dispatch(refreshThunk())

	//  }, [dispatch])

	return (
		<>
			<Outlet />
		</>
	)
}

export default Layout
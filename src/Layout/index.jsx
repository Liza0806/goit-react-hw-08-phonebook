import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { refreshThunk } from 'components/Store/auth/thunks'

const Layout = () => {
	const dispatch = useDispatch()

	 useEffect(() => {
	 	dispatch(refreshThunk())
	 }, [dispatch])

	return (
		<>
			<Outlet />
		</>
	)
}

export default Layout
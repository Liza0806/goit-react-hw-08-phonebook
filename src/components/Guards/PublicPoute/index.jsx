import { authSelector } from "components/Store/auth/selector";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PublicRoute = ({ children }) => {
	const isAuth = useSelector(authSelector)
	const location = useLocation()
	console.log('location :>> ', location)
	return !isAuth ? children : <Navigate to={location.state ?? '/'} />
}

import { authSelector } from "redux/auth/selector"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const isAuth = useSelector(authSelector)
    const location = useLocation()
    return isAuth? children: <Navigate to='/login' state={location} />
}
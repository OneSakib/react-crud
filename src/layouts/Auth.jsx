import { Navigate, Outlet, useLocation } from "react-router-dom"
import { getToken } from "../services/config.service"
const Auth = () => {
    const location = useLocation()
    const token = getToken()
    return !(token && token !== null && token !== '' && token !== undefined) ? <Outlet /> : (<Navigate to='/' replace state={{ from: location }} />)
}
export default Auth;
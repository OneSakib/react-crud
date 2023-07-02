// import { connect } from 'react-redux'
import { getToken } from '../services/config.service'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
const Protected = () => {
    const location = useLocation()
    const token = getToken()
    // if (getToken() !== undefined && getToken() !== '' && getToken() != null) {
    //     return children;
    // }
    return (token && token !== null && token !== '' && token !== undefined) ? <Outlet /> : (<Navigate to='/login' replace state={{ from: location }} />)//pass current location to redirect to  back
}

// // Redux
// const mapStateToProps = state => {
//     return {
//         isLoggedIn: state.isLoggedIn
//     }
// }

// export default connect(mapStateToProps)(Protected);


export default Protected;
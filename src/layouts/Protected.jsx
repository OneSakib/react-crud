import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
const Protected = ({ children, isLoggedIn }) => {
    const navigate = useNavigate()
    console.log("CLALED isLoggedIn", isLoggedIn)
    return children;
}

// Redux
const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Protected);


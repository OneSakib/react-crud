import { useNavigate } from "react-router-dom"
const Error = (props) => {
    const navigate = useNavigate()
    return (
        <div className="container text-center">
            <hr />
            <h1>404 Error Page</h1>
            <button onClick={() => { navigate('/') }} className="btn btn-success">Go to Home</button>
        </div>
    )
}
export default Error;
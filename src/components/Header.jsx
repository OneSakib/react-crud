import { Component } from "react"

export default class Header extends Component {
    notify = () => {
        console.log("CALLED", this.props.toast.error("Wow"))
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-brand nav-link" onClick={() => { this.props.navigation('/') }} >React CRUD</button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link active" onClick={() => { this.props.navigation('/') }} aria-current="page">Home</button>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <h5>Welcome,maliksakib347@gmail.com</h5>
                            <button className='btn btn-primary mx-3' onClick={() => { this.props.navigation('/login') }}>Login</button>
                            <button className='btn btn-primary mx-3' onClick={() => { this.props.navigation('/register') }}>Register</button>
                            <button className='btn btn-danger mx-3' onClick={this.notify}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
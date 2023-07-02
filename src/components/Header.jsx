import { Component } from "react"
import { logout } from '../services/config.service'
import { getUser } from "../services/config.service";
export default class Header extends Component {
    constructor() {
        super()
        this.state = { 'user': getUser() }
        this.logout = this.logout.bind(this);
    }
    logout() {
        logout();
        this.props.navigation('/login')
        this.forceUpdate()
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
                            {
                                this.state.user ? <h5>Welcome, {this.state?.user?.email}</h5> : ''
                            }
                            {
                                this.state.user ? <button className='btn btn-danger mx-3' onClick={this.logout}>Logout</button> : <>
                                    <button className='btn btn-primary mx-3' onClick={() => { this.props.navigation('/login') }}>Login</button>
                                    <button className='btn btn-primary mx-3' onClick={() => { this.props.navigation('/register') }}>Register</button></>
                            }


                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
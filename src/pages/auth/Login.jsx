import { Component } from 'react'
import Helper from '../../utils/helper';
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            formData: {
                email: '',
                password: ''
            },
            formError: {
                email: '',
                password: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.error = {}
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState({ formError: Helper.formValidate(this.state.formData) })
        console.log(">>>FORMDARA", this.state.formData)
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ formError: { ...this.state.formError, [name]: '' } })
        this.setState({ formData: { ...this.state.formData, [name]: value } })
    }
    render() {
        return (
            <form className="container-lg w-50" onSubmit={this.handleSubmit} >
                <h3 className="text-center">Register</h3>
                <hr />
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.email !== '' && (this.state.formError?.email)}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="zsdfdfghkerkjkwer7e678b" name="password" onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.password !== '' && (this.state.formError?.password)}</span>
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        )
    }
}
import { Component } from 'react'
import Helper from '../../utils/helper';
import { registerService } from '../../services/config.service';
export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            formData: {
                email: '',
                name: '',
                password: ''
            },
            formError: {
                email: '',
                name: '',
                password: ''
            },
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.error = {}
    }
    handleSubmit(event) {
        event.preventDefault()
        const { error, is_valid } = Helper.formValidate(this.state.formData);
        this.setState({ formError: error })
        if (is_valid) {
            registerService(this.state.formData).catch(async err => {
                this.props.toast.error(await err?.response?.data?.message)
            }).then(async res => {
                if (res != undefined) {
                    this.props.toast.success("successfully Register!, now you can login")
                    this.props.navigation('/login')
                }
            })
        }
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
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John" name="name" onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.name !== '' && (this.state.formError?.name)}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="zsdfdfghkerkjkwer7e678b" name="password" onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.password !== '' && (this.state.formError?.password)}</span>
                </div>
                <button className="btn btn-primary" disabled={this.state.submitted}>Register</button>
            </form>
        )
    }
}
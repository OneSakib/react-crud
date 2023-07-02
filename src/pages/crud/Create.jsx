// import { connect } from 'react-redux'
import { Component } from 'react'
import Helper from '../../utils/helper';
import { createEmployee } from '../../services/config.service';
export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            formData: {
                firstName: '',
                lastName: '',
                age: '',
                address: ''
            },
            formError: {
                firstName: '',
                lastName: '',
                age: '',
                address: ''
            },
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.error = {}
    }
    handleSubmit(event) {
        event.preventDefault()
        const { error, is_valid } = Helper.formValidate(this.state.formData)
        this.setState({ formError: error })
        if (is_valid) {
            this.setState({ submitted: true })
            createEmployee(this.state.formData).catch(async err => {
                console.log("ERROR: ", await err?.response?.data)
            }).then(async res => {
                if (res !== undefined) {
                    this.props.toast.success("Successfully Add new Employee")
                    this.props.navigation('/')
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
            <form className="container-lg w-50" onSubmit={this.handleSubmit}>
                <h3 className="text-center">Add New Employee</h3>
                <hr />
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="John" name='firstName' onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.firstName !== '' && (this.state.formError?.firstName)}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Wick" name='lastName' onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.lastName !== '' && (this.state.formError?.lastName)}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" placeholder="25" name='age' onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.age !== '' && (this.state.formError?.age)}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" id="address" placeholder="Vill Aghyana" name='address' onChange={this.handleChange}></textarea>
                    <span className='text-danger'>{this.state.formError?.address !== '' && (this.state.formError?.address)}</span>
                </div>
                <button className="btn btn-primary" disabled={this.state.submitted}>Add {this.state.submitted ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ''}</button>
            </form>
        )
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         addPost: post => dispatch(addPost(post)),
//         userLogin: user => dispatch(userLogin(user))
//     }
// }

// export default connect(null, mapDispatchToProps)(Create)

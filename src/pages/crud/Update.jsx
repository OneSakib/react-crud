// import { connect } from 'react-redux'
// import { addPost, userLogin } from '../../redux/actions'
import { Component } from 'react'
import Helper from '../../utils/helper';
import { getEmployee, updateEmployee } from '../../services/config.service';
export default class Update extends Component {
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
            submitted: false,
            emp_id: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.error = {}
    }
    componentDidMount() {
        const emp_id = this.props?.match?.params?.id;
        this.setState({ emp_id: emp_id })
        getEmployee(emp_id).catch(async err => {
            console.log("ERROR: ", await err.response.data)
        }).then(async res => {
            if (res !== undefined) {
                this.setState({ formData: await res?.data })
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const { error, is_valid } = Helper.formValidate(this.state.formData)
        this.setState({ formError: error })
        if (is_valid) {
            this.setState({ submitted: true })
            updateEmployee(this.state.emp_id, this.state.formData).catch(async err => {
                console.log("ERROR: ", await err.response?.data)
            }).then(async res => {
                this.props.toast.success("Employee has been updated!")
                this.props.navigation('/')
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
                    <input type="text" className="form-control" id="firstName" placeholder="John" name='firstName' value={this.state.formData.firstName} onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.firstName !== '' && (this.state.formError?.firstName)}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Wick" value={this.state.formData.lastName} name='lastName' onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.lastName !== '' && (this.state.formError?.lastName)}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" placeholder="25" name='age' value={this.state.formData.age} onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.age !== '' && (this.state.formError?.age)}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" id="address" placeholder="Vill Aghyana" name='address' value={this.state.formData.address} onChange={this.handleChange}></textarea>
                    <span className='text-danger'>{this.state.formError?.address !== '' && (this.state.formError?.address)}</span>
                </div>
                <button className="btn btn-primary" disabled={this.state.submitted}>Update {this.state.submitted ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ''}</button>
            </form >
        )
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         addPost: post => dispatch(addPost(post)),
//         userLogin: user => dispatch(userLogin(user))
//     }
// }

// export default connect(null, mapDispatchToProps)(Update)
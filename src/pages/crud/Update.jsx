import { connect } from 'react-redux'
import { addPost, userLogin } from '../../redux/actions'
import { Component } from 'react'
import Helper from '../../utils/helper';
class Update extends Component {
    constructor() {
        super()
        this.state = {
            formData: {
                first_name: '',
                last_name: '',
                age: '',
                address: ''
            },
            formError: {
                first_name: '',
                last_name: '',
                age: '',
                address: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.error = {}
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState({ formError: Helper.formValidate(this.state.formData) })
        console.log("CALLED", this.state.formData)
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
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="first_name" placeholder="John" name='first_name' onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.first_name !== '' && (this.state.formError?.first_name)}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="last_name" placeholder="Wick" name='last_name' onChange={this.handleChange} />
                    <span className='text-danger'>{this.state.formError?.last_name !== '' && (this.state.formError?.last_name)}</span>
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
                <button className="btn btn-primary">Update</button>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPost: post => dispatch(addPost(post)),
        userLogin: user => dispatch(userLogin(user))
    }
}

export default connect(null, mapDispatchToProps)(Update)
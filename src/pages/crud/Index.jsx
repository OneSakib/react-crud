import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { useNavigate } from 'react-router-dom'
// import $ from 'jquery'
import Modal from '../../components/Modal'
// import { useRef } from 'react'
// Service
import { getEmployees, deleteEmployee } from '../../services/config.service'
// Redux
// import { connect } from 'react-redux'
import { Component } from 'react'

export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            emp_data: [],
            loading: true
        }
        this.confirmDelete = this.confirmDelete.bind(this);
        this.loadEmployeeData = this.loadEmployeeData.bind(this);
    }
    componentDidMount() {
        this.forceUpdate()
        this.loadEmployeeData()
    }
    loadEmployeeData() {
        getEmployees().catch(async err => {
            console.log("ERROR", await err)
        }).then(async res => {
            if (res !== undefined) {
                this.setState({
                    emp_data: await res?.data,
                    loading: false,
                    emp_id: ''
                })
            }
        })
    }
    confirmDelete() {
        deleteEmployee(this.state.emp_id).catch(async err => {
            console.log("ERROR: ", await err?.response?.data)
        }).then(async res => {
            if (res !== undefined) {
                this.props.toast.success(await res?.data?.message)
                this.setState({ loading: true })
                this.loadEmployeeData()
            }
        })
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Employee Data <button className="btn btn-primary float-end me-3 mt-3" onClick={() => { this.props.navigation('/create') }}>Add New Employee</button></h1>
                <hr />
                <table className="table table-striped-columns">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col" colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !this.state.loading ? this.state.emp_data.map((ele, index) =>
                                <tr key={ele?._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{ele?.firstName}</td>
                                    <td>{ele?.lastName}</td>
                                    <td>{ele?.age}</td>
                                    <td>{ele?.address}</td>
                                    <td className='cursor-pointer' onClick={() => { this.props.navigation('/update/' + ele?._id) }}><FontAwesomeIcon icon={faEdit} /></td>
                                    <td className='cursor-pointer' data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => { this.setState({ emp_id: ele?._id }) }}> <FontAwesomeIcon icon={faTrash} /></td>
                                </tr>
                            ) : <tr></tr>
                        }
                    </tbody>
                </table>
                {
                    this.state.loading ? <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> : ''
                }
                {
                    !this.state.loading && this.state.emp_data.length === 0 ? <div className="d-flex justify-content-center">
                        <h1>No Data Found</h1>
                    </div> : ''
                }
                <Modal confirmDelete={this.confirmDelete} />
            </div>
        )
    }
}

// // use navigate
// const Wrapped=(props)=>{
//     const navigation=useNavigate()
//     return <Index {...props} navigation={navigation}
// }



// Redux
// const mapStateToProps = state => {
//     return {
//         posts: state.posts
//     }
// }

// export default connect(mapStateToProps)(Index)



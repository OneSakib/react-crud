import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { useNavigate } from 'react-router-dom'
import $ from 'jquery'
import Modal from '../../components/Modal'
// import { useRef } from 'react'
// Service
// import { getPost } from '../../services/config.service'
// Redux
import { connect } from 'react-redux'
import { Component } from 'react'

class Index extends Component {
    confirm = () => {
        $('#closeModal').trigger('click')
    }
    navigate(path) {
        console.log("CALLED", this.props.navigation(path))
        // this.props.navigate('/login')
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Employee Data <button className="btn btn-primary float-end me-3 mt-3" onClick={() => { this.navigate('/create') }}>Add New Employee</button></h1>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>25</td>
                            <td>Vill Aghyana</td>
                            <td className='cursor-pointer' onClick={() => { this.navigate('/update') }}> <FontAwesomeIcon icon={faEdit} /></td>
                            <td className='cursor-pointer' data-bs-toggle="modal" data-bs-target="#deleteModal"> <FontAwesomeIcon icon={faTrash} /></td>
                            {/* <td className='cursor-pointer' onClick={() => { ref.current.openModal() }}> <FontAwesomeIcon icon={faTrash} /></td> */}
                        </tr>
                    </tbody>
                </table>
                <Modal confirm={this.confirm} />
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
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Index)



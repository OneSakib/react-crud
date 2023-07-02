import React, { Component } from 'react'
import $ from 'jquery'
export default class Modal extends Component {
    constructor() {
        super()
        this.confirm = this.confirm.bind(this);
    }
    confirm() {
        $('#closeModal').trigger('click')
        this.props.confirmDelete()
    }
    render() {
        return (
            <div>
                <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="deleteModalLabel">Delete Employee</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" id="closeModal" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary" onClick={this.confirm}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
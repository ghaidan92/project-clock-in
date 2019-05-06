import React, { Component } from 'react';





class Jobs extends Component {
    handleJobPost = e => {
        // const job = this.ref.Progress1
        e.preventDefault();
        console.log("job");
    }

    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add a job
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={this.handleJobPost} ref="Progress1">
                                    <div className="form-group">
                                        <label htmlFor="jobname">Job name:</label>
                                        <input className="form-control"
                                            placeholder="Job name goes here..."
                                            name="jobname"
                                            type="text"
                                            id="jobname"
                                            onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobs;
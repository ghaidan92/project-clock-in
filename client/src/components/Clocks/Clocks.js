import React, { Component } from 'react';

class Clocks extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Ready to clock in?</h6>
                    <p class="card-text">You have worked (time) so far!</p>
                    <button href="#" class="card-link">Clock In</button>
                    <button href="#" class="card-link">View Timesheet</button>
                </div>
            </div>
            </div>
        )
    }
}

export default Clocks;
import React, { Component } from 'react';
import '../Clocks/clocks.css'

class Clocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardName: '',
            timerStarted: false,
            timerStopped: true,
            hours: 0,
            minutes: 0,
            seconds: 0,
            logTime: [],
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ cardName: event.target.value });
    }

    handleTimerStart(e) {
        e.preventDefault();
        if (this.state.timerStopped) {
            this.timer = setInterval(() => {
                this.setState({ timerStarted: true, timerStopped: false });
                if (this.state.timerStarted) {
                    if(this.state.seconds >= 60) {
                        this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0}))
                    } 
                    if(this.state.minutes >= 60){
                        this.setState((prevState) => ({ hours: prevState.hours + 1, minutes: 0, seconds: 0 }))
                    }
                    this.setState((prevState) => ({ seconds: prevState.seconds + 1 }))
                }

            }, 1000);
        }
    }

    handleTimerStop(e){
        e.preventDefault();

        this.setState({timerStarted: false, timerStopped: true})
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Ready to clock in?</h6>
                        <p className="card-text">You have worked (time) so far!</p>
                        <div className="container">
                            <div className="timer-container">
                                <div className="current-timer">
                                    {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
                                </div>
                                <div className="timer-controls">
                                    <button className="btn btn-success" onClick={this.handleTimerStart.bind(this)}>Start</button>
                                    <button className="btn btn-secondary" onClick={this.handleTimerStop.bind(this)}>Stop</button>
                                    <button className="btn btn-info">Log Time</button>
                                    <button className="btn btn-danger">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clocks;
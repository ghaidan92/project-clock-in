import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import Jobs from './Jobs/Jobs'
import Clocks from './Clocks/Clocks'

class Profile extends Component {

  state = {
    username: "",
    email: ""
  };

  componentDidMount(){
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      })
    });
  };

  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay
    const styles = {

    }

    if(hours < 12){
      timeOfDay = "mornign";
      styles.color = "red"
    } else if (hours >= 12 && hours < 17){
      timeOfDay = "afternoon";
      styles.color = "blue"
    } else {
      timeOfDay = "night";
      styles.color = "purple"
    }
    return (
      <div className="container Profile">
        <h1 style={styles}>Hello {this.state.username}, Good {timeOfDay}</h1>
        {/* <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p> */}
        <Link to="/">Go home</Link>
        <Jobs />
        <Clocks />
      </div>
    )
  }
}

export default withAuth(Profile);
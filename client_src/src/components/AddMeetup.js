import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class AddMeetup extends Component {
  addMeetup(newMeetup) {
    //console.log(newMeetup);
    axios
      .request({
        method: "post",
        url: "http://localhost:3000/api/meetups",
        data: newMeetup
      })
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  }
  onSubmit(e) {
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
    };
    this.addMeetup(newMeetup);
    //console.log(this.refs.name.value);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <br />
        <NavLink to="/" className="btn grey">
          Back
        </NavLink>
        <h1>Add Meetup</h1>
        <form action="" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address">Address</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default AddMeetup;

import React, { Component } from "react";
import { Consumer } from "./Context";
import uuid from "uuid";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state;

        const newContact = {
            name,
            email,
            phone,
            id: uuid()
        }

        dispatch({type: "ADD_CONTACT", payload: newContact});
        
        this.props.history.push("/");
    }


  render() {
    const {name, email, phone} = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className="form-group">
                  <label htmlFor="name">Insert Name Here</label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Here</label>
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Here</label>
                  <input
                    className="form-control form-control-lg"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Add Contact"
                  className="btn btn-block btn-light"
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

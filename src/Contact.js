import React, { Component } from "react";
import { Consumer } from "./Context";
import PropTypes from "prop-types";

class Contact extends Component {
  onDeleteClick = async (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card col-6 col-md-10 col-sm-12 mx-auto">
              <h3 className="display-5">
                {name}
                <i
                  className="fas fa-times"
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "red"
                  }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h3>
              <p>{email}</p>
              <p>{phone}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;

import React, { Component } from "react";
import { Consumer } from "./Context";
import Contact from "./Contact";

class Contacts extends Component {

  

  render() {

    return (
      <Consumer>
              {value => {
                  const {contact} = value;

                  return (
                      <React.Fragment>
                          <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
                          {contact.map(contact => (
                              <Contact key={contact.id} contact={contact} />
                          ))}
                      </React.Fragment>
                  )
              }}
          </Consumer>
    );
  }
}

export default Contacts;

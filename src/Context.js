import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contact: [action.payload, ...state.contact]
      };
      case "DELETE_CONTACT":
        return {
          ...state,
          contact: state.contact.filter(
            contact => contact.id !== action.payload
          )
        };
      default: 
        return state;
  }
}

export class Provider extends Component {
  state = {
    contact: [
      
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({contact: res.data});
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

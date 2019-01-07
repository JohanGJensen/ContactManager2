import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./Context";

import Header from "./Header";
import Contacts from "./Contacts";
import AddContact from "./AddContact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component= {Contacts} />
              <Route exact path="/contact/add" component= {AddContact} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

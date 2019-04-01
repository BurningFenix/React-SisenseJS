import React, { Component } from 'react';
import './App.css';

/*  Import bootstrap components   */
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

import { sisenseSettings } from './config/sisense';
import Dashboard from './sisense/dashboard';

class App extends Component {

  //  Component constructor
  constructor(props) {
    super(props);

    //  Initialize the component's state
    this.state = {
      "sisenseSettings": sisenseSettings
    }
  }

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Sisense + React</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown title="Dashboard" id="sisense-dropdown">
              <MenuItem >Loading...</MenuItem>
            </NavDropdown>
            <NavDropdown title="Documentation" id="documentation-dropdown">
              <MenuItem href="https://developer.sisense.com/display/API2/SisenseJS">Sisense.js</MenuItem>
              <MenuItem divider />
              <MenuItem href="https://reactjs.org/docs/getting-started.html">React</MenuItem>
              <MenuItem href="https://react-bootstrap.github.io/getting-started/introduction">React-Bootstrap</MenuItem>
            </NavDropdown>
            <NavItem className="gitlab" href="https://gitlab.com/SisenseJS/react-sample">
            </NavItem>
            <NavItem href="https://gitlab.com/SisenseJS/react-sample">
              Gitlab
            </NavItem>
          </Nav>
        </Navbar>
        <div id={sisenseSettings.applicationDivId} className="SisenseWrapper">
          <Dashboard> </Dashboard>
        </div>
      </div>
    );
  }
}

export default App;

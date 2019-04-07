import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'reactstrap';
import ContactList from "./components/ContactList";
import { Fragment } from 'react';

import axios from "axios"
class App extends Component {
  // default State object
  state = {
   contacts: []
 };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {

        // create an array of contacts only with relevant data
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name,
	    email: c.email,
	    phone: c.phone,	  
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
      <div className="App">
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact Manager</h1>
        </header>
      </div>
        <Container fluid>


          <Row>
            <Col>
              {this.state.contacts.map((contact) => (

                <Card color="primary">
                  <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold">{contact.name}</CardTitle>
                    <CardSubtitle className="mb-3 font-weight-light text-uppercase" >{contact.phone}</CardSubtitle>
                    <CardText className="mb-4" > {contact.email}</CardText>
                    <Row>

                    <Col>
                          <Button color="success">Call</Button>
                    </Col>
                    <Col sm={'auto'}>
                          <Button color="warning">Message</Button>
                    </Col>
                    <Col sm={'auto'}>
                          <Button color="success">Email</Button>
                    </Col>
                    </Row>
                  </CardBody>
                </Card>



              ))}
            </Col>
          </Row>

        </Container>
      </Fragment>
    );
  }
}
export default App;

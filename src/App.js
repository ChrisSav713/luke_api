import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button' 
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Cards from 'react-bootstrap/Card'
import Dropdowns from 'react-bootstrap/Dropdown'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import People from './components/People'

function App() {
  return (
    <div className="app-container">
      <div className="title">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" alt="logo"></img>
      </div>
      <div className="input-field">
        <InputGroup.Text>Search In:</InputGroup.Text>
        <InputGroup.Text id="api-addon3">
          http https://swapi.dev/api/
        </InputGroup.Text>
        <Form.Select aria-label="Search for:">
          <option value="1">People</option>
          <option value="2">Films</option>
          <option value="3">Planets</option>
          <option value="4">Species</option>
          <option value="5">Starships</option>
          <option value="6">Vehicles</option>
        </Form.Select>

        <InputGroup.Text>For:</InputGroup.Text>
        <Form.Control type="text"
        placeholder="Id or Name"/>

        <Button>Search</Button>
        <Button>Get All</Button>
      </div>

      <div className="results-box">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Search Results:</Accordion.Header>
            <Accordion.Body>
              <div className="result-container">
                <ListGroup as="ul">
                  <ListGroup.Item className="list-result" as="li">
                    Link 1
                  </ListGroup.Item>
                  <ListGroup.Item className="list-result" as="li">
                    Link 2
                  </ListGroup.Item>
                  <ListGroup.Item className="list-result" as="li">
                    Link 3
                  </ListGroup.Item>
                  <ListGroup.Item className="list-result" as="li">
                    Link 3
                  </ListGroup.Item>
                  <ListGroup.Item className="list-result" as="li">
                    Link 3
                  </ListGroup.Item>
                  <ListGroup.Item className="list-result" as="li">
                    Link 3
                  </ListGroup.Item>
                  <ListGroup.Item className="list-result" as="li">
                    Link 3
                  </ListGroup.Item>
                  <ListGroup.Item className="list-result" as="li">
                    Link 3
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="results-selection">
        <People>

        </People>
      </div>
    </div>
  );
}

export default App;

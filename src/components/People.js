import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Card.css'

export default function People() {

const people = {
  "url": "https://swapi.dev/api/people/1/",
  "name": "Luke Skywalker",
  "birth_year": "19 BBY",
  "homeworld": "https://swapi.dev/api/planets/1/",
  "gender": "Male",
  "eye_color": "Blue",
  "hair_color": "Blond",
  "height": "172",
  "mass": "77",
  "skin_color": "Fair",
  "species": [
      "https://swapi.dev/api/species/1/"
  ],
  "starships": [
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/12/",
      "https://swapi.dev/api/starships/12/",
  ],
  "vehicles": [
      "https://swapi.dev/api/vehicles/14/",
      "https://swapi.dev/api/vehicles/14/"
  ],
  "films": [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/1/",
  ]
}

  return (
    <div className="people-container">
      <label className="people-title">{people.name}</label>
      <div className="people-grid">
        <label className="people-label">Birth Year:</label> <label className="people-value">{people.birth_year}</label>
        <label className="people-label">Homeworld:</label> <label className="people-value">{people.homeworld}</label>
        <label className="people-label">Gender:</label> <label className="people-value">{people.gender}</label>
        <label className="people-label">Eye Color:</label> <label className="people-value">{people.eye_color}</label>
        <label className="people-label">Hair Color:</label> <label className="people-value">{people.hair_color}</label>
        <label className="people-label">Height:</label> <label className="people-value">{people.height}</label>
        <label className="people-label">Mass:</label> <label className="people-value">{people.mass}</label>
        <label className="people-label">Skin Color:</label> <label className="people-value">{people.skin_color}</label>
      </div>
      <div className="people-section">
        <label className="people-section-title">Species</label>
          <ListGroup variant="flush">
            {people.species.map(item => <ListGroup.Item className="people-section-item">{item}</ListGroup.Item>)}
          </ListGroup>
        <label className="people-section-title">Starships</label>
        <ListGroup variant="flush">
            {people.starships.map(item => <ListGroup.Item className="people-section-item">{item}</ListGroup.Item>)}
          </ListGroup>
        <label className="people-section-title">Vehicles</label>
        <ListGroup variant="flush">
            {people.vehicles.map(item => <ListGroup.Item className="people-section-item">{item}</ListGroup.Item>)}
          </ListGroup>
        <label className="people-section-title">Films</label>
        <ListGroup variant="flush">
            {people.films.map(item => <ListGroup.Item className="people-section-item">{item}</ListGroup.Item>)}
          </ListGroup>
      </div>
    </div>
  )
}

import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CardItem = (props) => {
  return (
    <Card style={{width:'20rem', margin: 'auto' }} border="danger" >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="success">Find Doctors</Button>
      </Card.Body>
    </Card>
  )
}

export default CardItem
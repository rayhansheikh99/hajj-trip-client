import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './services.css'

const Services = (props) => {

    const{_id, name, image, price, describe}=props.service

    return (
        <div>
             <Card className="card h-100 card-design">
                    <Card.Img className="img-service d-block" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Price:</b> {price}</ListGroupItem>
                        <ListGroupItem>{describe.slice(0,130)}...</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                  <Link to={`/PackageDetails/${_id}`}><Button className='px-5 btn-design'>Package Details</Button></Link>
                    
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Services;
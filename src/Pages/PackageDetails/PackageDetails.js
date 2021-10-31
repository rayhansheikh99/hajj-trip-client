import React, { useEffect, useState } from 'react';
import { Card,Button, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Booking from '../Booking/Booking';
import './packagedetails.css'

const PackageDetails = () => {
    // const{_id}=props.service
    // dynamic route 
    let {serviceId} = useParams()
    const [service, setService]= useState([])
    const [singleService, setSingleService] = useState({});
    useEffect(()=>{
        fetch('https://shocking-werewolf-98267.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    //  data  fetch
    useEffect(()=>{
        const foundService = service.find(
            (services)=>services._id===serviceId);
        setSingleService(foundService);
      
    },[service,serviceId]);
   
    return (
        <div>
             <Row className="details-card details ">
            <Col md={7} sm={12}>
            <Card className="ms-5 design-body">
                    <Card.Img className="img-service d-block w-50 mx-auto" variant="top" src={singleService?.image} />
                    <Card.Body>
                        <Card.Title>{singleService?.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Price:</b> {singleService?.price}</ListGroupItem>
                        <ListGroupItem><b>Duration:</b> {singleService?.duration}</ListGroupItem>
                        <ListGroupItem>{singleService?.describe}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    </Card.Body>
                </Card>
                </Col>
            <Col md={5} sm={12}>
            <Booking/>

            </Col>
            </Row>
                
        </div>
    );
};

export default PackageDetails;
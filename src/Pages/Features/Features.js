import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import feature from '../../images/Umrah-tickets.jpg'
import "./features.css"

const Features = () => {
    return (
        <div className="testimonial-size">
            <Row xs={1} md={2} className="g-4">

                <Col>
                <Card.Img variant="top" src={feature} />
                </Col>
                <Col>
                <h3>Key Features</h3><br/>
                <ul className="text-design">
                    <li>100% Guaranteed affordable prices.</li>
                    <li>Free travel consultation before booking your package.</li>
                    <li>We are very much transparent with our client.</li>
                    <li>Best accommodations available.</li>
                    <li>You will get support from our office in case of any emergency.</li>
                    <li>Special arrangement are available for disabled.</li>
                </ul>
                </Col>
            </Row>
            
        </div>
    );
};

export default Features;
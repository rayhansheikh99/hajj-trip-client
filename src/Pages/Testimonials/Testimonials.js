import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './testmonials.css'

const Testimonials = () => {
    return (

        //testimonial section
        <div className='mb-5 testimonial-size'>
            <h2>Testimonials</h2><br/>

            <Row xs={1} md={3} className="g-4">
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Title>Sakib Al Hasan</Card.Title>
                    <Card.Text>
                    The service was over the top excellent. Masum bhai is incredibly knowledgeable about all aspects of traveling and instructions. My heartiest thanks to Masum bhai and the HAJJ TRIP.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Title>Tamim Iqbal</Card.Title>
                    <Card.Text>
                    Assalamualikum, we went for Umrah hajj and Turkey (the most Islamic historical places visit) for 10 days in March 2018. This was my first time Umrah Hajj, I will never forget it. Their arrangement was very nice.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Title>Mashrafee</Card.Title>
                    <Card.Text>
                    No word to appreciate. Real good professionalism & quick in response over phone or e-mail. Start to end all way we got good support. By the Grace of Allah, we completed a successful Umrah.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Testimonials;
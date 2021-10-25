import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

class AppCard extends React.Component {
    // constructor (props) {
    //     super(props)
    // }
    // state = {
    //     selected:this.props.selectedItems
    // }
    render() {
         console.log(this.props.Strings)
        return (
            //this.props.Strings.length
            <Row xs={2} md={3} className="g-4">
                {Array.from({ length: this.props.Strings.length}).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>{this.props.Titles[idx]}</Card.Title>
                                <Card.Text>
                                    {this.props.Strings[idx]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}


export default AppCard;

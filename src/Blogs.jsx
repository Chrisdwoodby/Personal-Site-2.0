import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import laptop from '../Media/laptop.png'

const Blogs = () => {
  return (
    <div class="blog-posts">
        <Row>
            <Col id="title-row" md={6}>
                <Row><h2>Blog Posts</h2></Row>
            </Col>
            <Col md={6}></Col>
        </Row>
        <Row>
            <Col>1</Col>
            <Col>2</Col>
            <Col>3</Col>
            <Col>4</Col>
            <Col>5</Col>
            <Col>6</Col>
        </Row>
        <Row id="laptop-image"><img src={laptop}/></Row>
    </div>
  )
}

export default Blogs;
import React from "react";
import "./Home.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col
          md={6}
          className="d-flex flex-direction-column align-items-center justify-content-center"
        >
          <div>
            <h1>Let's Chat with your friends</h1>
            <p>This is chat app </p>
            <LinkContainer to="/login">
              <Button variant="success">
                Get Started
                <i className="fas fa-comments home-message-icon"></i>
              </Button>
            </LinkContainer>
          </div>
        </Col>

        <Col md={6} className="home__bg home"></Col>
      </Row>
    </Container>
  );
};

export default Home;

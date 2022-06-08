import React, { Fragment } from "react";
import './MessageForm.css';
import { Button, Col, Form, Row } from "react-bootstrap";

const MessageForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Fragment>
      <div className="messages-output"></div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your message"
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", backgroundColor: "orange" }}
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default MessageForm;

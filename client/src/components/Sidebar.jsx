import React, { Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => {
  const rooms = ['first room', 'second room', 'third room'];
  return (
    <Fragment>
      <h2>Avaiilable rooms</h2>
      <ListGroup>
        {rooms.map((room, index) => (
          <ListGroup.Item key={index}>
            {room}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h2>Members</h2>
    </Fragment>
  )
}

export default Sidebar
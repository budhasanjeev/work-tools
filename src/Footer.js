import React from "react"

import {Navbar,Container} from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar fixed="bottom" variant="light" bg="light">
      <Container>
        <p className="mr-auto">© 2021 Work Tools</p>
      </Container>
    </Navbar>
  );
}

export default Footer
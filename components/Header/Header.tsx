import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { BiBuildingHouse } from "react-icons/bi";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <BiBuildingHouse /> Guru Hotel Sample
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

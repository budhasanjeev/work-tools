import {Navbar,Container} from 'react-bootstrap';
import logo from './logo.svg';

const Header = () => {
  return(
    <Navbar sticky="top" variant="light" bg="warning">
      <Container>
        <Navbar.Brand href="#home">
          <img 
            alt="Work Tools"
            src={logo}
            width="100"
            height="70"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaAlignRight, FaCaretRight, FaPowerOff, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/auth/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogeOut = () => {
    logOut();
  }

    return (
<Navbar className='mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to="/">News Portal</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            {
              user?.photoURL ? 
              <Image className='mt-2'
              style={{height: '30px'}}
              roundedCircle
              src={user?.photoURL}
              ></Image>
              
              :
              
              <FaUser></FaUser>
            }
            <div className='mt-2 ms-3' onClick={handleLogeOut}>
              {
                user?.uid ?
                <FaPowerOff></FaPowerOff>
                :
                <FaCaretRight className='d-none'></FaCaretRight>
              }
            </div>
            <Link>
            </Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftNav></LeftNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;
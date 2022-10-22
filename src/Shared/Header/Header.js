import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/auth/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';
import './Header.css'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogeOut = () => {
    logOut();
  }

    return (
<Navbar className='mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link className='header-text' to="/">News Portal</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav className='mt-2 me-3' href="#deets">{user?.displayName}</Nav>
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
            <NavDropdown id="collasible-nav-dropdown">
              {
                user?.email ? 
                  <NavDropdown.Item>
                    <Link onClick={handleLogeOut} className='login'>Log Out</Link>
                  </NavDropdown.Item>
                :
                <>
                  <NavDropdown.Item>
                  <Link to="/login" className='login'>Log In</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                  <Link to="signin" className='signin'>Sign In</Link>
                </NavDropdown.Item>
                </>
              }
              
            </NavDropdown>
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
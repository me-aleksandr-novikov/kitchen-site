import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/pictures/instruments.png';
import './AppHeader.css';

function AppHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className='bar' variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
            <img src={logo} style={{ 'width': '80px', 'margin': '0' }} />
            <Nav.Link href="/">МЕБЕЛЬ СЕРВИС</Nav.Link>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/products"><div className={'navlink'}>Наши продукты</div></NavLink>
            <NavLink to="/services"><div className={'navlink'}>Наши услуги</div></NavLink>
            <NavLink to="/contact"><div className={'navlink'}>Контакты</div></NavLink>
            <NavLink to="/about"><div className={'navlink'}>О нас</div></NavLink>
            <div  className='tel'>
              <a href="tel:+1234567890">+1234567890</a>
              <a href="tel:+1234567890">+1234567890</a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default AppHeader;

// <NavLink to="/">Домашняя страница</NavLink>
// <NavLink to="/about">О нас</NavLink>
// <NavLink to="/contact">Контакты</NavLink>
// <NavLink to="/products">Наши продукты</NavLink>
// <NavLink to="/services">Наши услуги</NavLink>

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
        <div>
          <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
            <NavLink to="/" style={{'display': 'flex', 'marginRight': '10px'}}>
              <img alt = "logo" src={logo} style={{ 'width': '80px', 'margin': '0' }} />
              <div className={'navlink logo'} style={{'margin': '0'}}>МЕБЕЛЬ СЕРВИС</div>
              </NavLink>
          </div>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/products"><div className={'navlink'}>Наши продукты</div></NavLink>
            <NavLink to="/services"><div className={'navlink'}>Наши услуги</div></NavLink>
            <NavLink to="/contact"><div className={'navlink'}>Контакты</div></NavLink>
            <NavLink to="/about"><div className={'navlink'}>О нас</div></NavLink>
            <div className='tel'>
              <div className='tel1'>
                <img alt = "Call icon" src="https://img.icons8.com/color/48/null/whatsapp--v1.png" />
                <a href="tel:+1234567890">+7 (924) 424 22 44</a>
              </div>

              <div className='tel2'>
                <img alt = "Call icon" src="https://img.icons8.com/color/48/null/whatsapp--v1.png" />
                <a href="tel:+1234567890">+7 (999) 424 22 44</a>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default AppHeader;

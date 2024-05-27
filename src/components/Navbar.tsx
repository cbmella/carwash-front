import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavbarComponent: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    navigate('/logout');
  };

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {t('navbar.home')}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              {t('navbar.home')}
            </Nav.Link>
            {isAuthenticated && (
              <Nav.Link as={Link} to="/me">
                {t('navbar.me')}
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            <Button
              variant={currentLanguage === 'es' ? 'secondary' : 'outline-secondary'}
              onClick={() => handleLanguageChange('es')}
              className="me-2"
            >
              {t('navbar.spanish')}
            </Button>
            <Button
              variant={currentLanguage === 'en' ? 'secondary' : 'outline-secondary'}
              onClick={() => handleLanguageChange('en')}
              className="me-2"
            >
              {t('navbar.english')}
            </Button>
            {isAuthenticated && (
              <Button
                variant="outline-danger"
                onClick={handleLogout}
              >
                {t('navbar.logout')}
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

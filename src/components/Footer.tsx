import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="bg-light shadow w-100 py-3">
            <Container>
                <Row className="d-flex align-items-center justify-content-between">
                    <Col md="auto" className="text-center text-md-start">
                        <span className="text-muted">
                            © {currentYear}
                            <a target='_blank' href="https://cbm3lla.me" className="text-decoration-none mx-2">
                                cbm3lla.me
                            </a>
                            {t('footer.AllRightsReserved')}.
                        </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { Container, Row, Col, Form, Button  } from 'react-bootstrap';

const Inicio: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Container className="p-4">
        <Row>
          <Col className="bg-success text-white p-4">
            {/* Contenido de la segunda columna */}
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button className="btn btn-secondary btn-lg">
                      Crear Nuevo Cliente
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
};

export default Inicio;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ClientSearchForm from '@/components/Client/Search';
import axios from 'axios';
import { Client } from '@/types/Client';
// import clients from '@/data/clients.json';
const Inicio: React.FC = () => {
  const [clientesData, setClientesData] = useState<Client[]>([]);

  // useEffect(() => {
  //   setClientesData(clients);
  // }, []);
  
useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users?_limit=4')
    .then(response => {
      setClientesData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
}, []);


  return (
    <div className="container-fluid mx-auto p-1">
      <Container>
        <Row>
          <Col className="text-white p-4">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre Cliente</Form.Label>
                <Form.Control type="search" placeholder="cliente" />
                <div className="d-grid gap-2 py-2">
                  <Link to="/client" className="btn btn-secondary">
                    Crear Nuevo Cliente
                  </Link>
                </div>
              </Form.Group>
            </Form>
            {clientesData.map(({ name, lastname, email, phone }, index) => 
              <Col key={index} className="border text-black p-4">
                Cliente: {name} {lastname}<br />
                Email: {email}<br />
                Teléfono: {phone}<br />
              </Col>
            )}
          </Col>
          <Col className="text-white p-4">
            <ClientSearchForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;

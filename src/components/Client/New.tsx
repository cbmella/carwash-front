import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Client } from '@/types/Client';

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<Client>({
    name: '',
    lastname: '',
    email: '',
    n_document: '',
    phone: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => (
      {...prevFormData, [name]: value}
    ));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('https://rutaDeTuAPI.com', formData);
      setSuccessMessage('¡Registro exitoso!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error al guardar el cliente.');
      setSuccessMessage('');
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="nombre" placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="apellido" placeholder="Apellido" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={handleChange} type="email" name="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Documento</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="documento" placeholder="Documento" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefono</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="documento" placeholder="Documento" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>

      {successMessage && <div className="text-success">{successMessage}</div>}
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
    </Form>
  );
};

export default Formulario;        
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ServiceList from '@/components/Services/List';
import axios from 'axios';
import { Client } from '@/types/Client';
import { Service } from '@/types/Service';

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<Client>({
    name: '',
    lastname: '',
    email: '',
    n_document: '',
    phone: ''
  });

  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => (
      {...prevFormData, [name]: value}
    ));
  };

  const handleSelectedServicesChange = (services: Service[]) => {
    setSelectedServices(services);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        services: selectedServices
      };
      await axios.post('https://rutaDeTuAPI.com', dataToSend);
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
        <Form.Label>Cliente</Form.Label>
        <Form.Control onChange={handleChange} type="search" name="client" placeholder="Juan Perez" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Auto</Form.Label>
        <Form.Control onChange={handleChange} type="search" name="car" placeholder="Toyota" />
      </Form.Group>

      <ServiceList onSelectedServicesChange={handleSelectedServicesChange} />

      <div className="d-grid gap-2 py-2">
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </div>

      {successMessage && <div className="text-success">{successMessage}</div>}
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
    </Form>
  );
};

export default Formulario;

import React, { useState, useEffect } from 'react';
import { Col, Form } from 'react-bootstrap';
import { Service } from '@/types/Service';
import services from '@/data/services.json';

interface ServiceListProps {
  onSelectedServicesChange: (services: Service[]) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ onSelectedServicesChange }) => {
  const [servicesData, setServiceData] = useState<Service[]>([]);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  useEffect(() => {
    setServiceData(services);
  }, []);

  useEffect(() => {
    onSelectedServicesChange(selectedServices);
  }, [selectedServices, onSelectedServicesChange]);

  const handleCheckboxChange = (service: Service) => {
    setSelectedServices(prevSelectedServices => {
      if (prevSelectedServices.some(selected => selected.name === service.name)) {
        return prevSelectedServices.filter(selected => selected.name !== service.name);
      } else {
        return [...prevSelectedServices, service];
      }
    });
  };

  return (
    <>
      {servicesData.map((service, index) => (
        <Col key={index} className="border text-black p-4">
          <p>Nombre Servicio: {service.name}</p>
          <p>Valor: {service.value}</p>
          <Form.Check
            type="checkbox"
            label="Seleccionar"
            checked={selectedServices.some(selected => selected.name === service.name)}
            onChange={() => handleCheckboxChange(service)}
          />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;

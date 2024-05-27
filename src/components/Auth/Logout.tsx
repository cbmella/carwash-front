// src/components/LogoutComponent.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutComponent: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          await axios.post(
            'http://localhost/authentication/public/auth/logout',
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        navigate('/login'); // Redirigir a la página de inicio de sesión
      } catch (error) {
        console.error('Failed to logout', error);
        navigate('/login'); // Redirigir a la página de inicio de sesión en caso de error
      }
    };

    logout();
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default LogoutComponent;

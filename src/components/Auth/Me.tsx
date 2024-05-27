// src/components/MeComponent.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@/types/User';

const MeComponent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post<User>(
          'http://localhost/authentication/public/auth/me',
          {}, // Aquí se puede pasar un objeto vacío para el cuerpo de la solicitud POST
          {
            headers: { 
              Authorization: `Bearer ${token}` 
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user details', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default MeComponent;

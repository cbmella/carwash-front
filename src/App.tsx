import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import NavbarComponent from '@/components/Navbar';
import Footer from '@/components/Footer';
import Diary from '@/pages/Diary';
import Client from '@/pages/Client';
import LoginComponent from '@/components/Auth/Login';
import MeComponent from '@/components/Auth/Me';
import LogoutComponent from '@/components/Auth/Logout';
import ProtectedRoute from '@/components/Auth/ProtectedRoute';
import AuthRoute from '@/components/Auth/AuthRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/App.css';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavbarComponent />
          <main className="flex-grow-1">
            <Routes>
              <Route element={<AuthRoute />}>
                <Route path="/login" element={<LoginComponent />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/me" element={<MeComponent />} />
                <Route path="/logout" element={<LogoutComponent />} />
              </Route>
              <Route path="/" element={<Diary />} />
              <Route path="/client" element={<Client />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;

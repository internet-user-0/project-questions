import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './parts/SharedLayout';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { VerificationPage } from './pages/VerificationPage';
import { AllInfo } from './parts/AllInfo';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<VerificationPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<AllInfo />} />
      </Route>
    </Routes>
  );
};

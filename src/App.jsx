import Layout from 'components/Layout/Layout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import DepartmentsPage from 'pages/DepartmentsPage/DepartmentsPage';
import HomePage from 'pages/HomePage/HomePage';
import TransfersPage from 'pages/TransfersPage/TransfersPage';
import { Routes, Route, Navigate } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="transfers" element={<TransfersPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

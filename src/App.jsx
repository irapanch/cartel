import Kharkiv from 'components/Kharkiv/Kharkiv';
import Kyiv from 'components/Kyiv/Kyiv';
import Layout from 'components/Layout/Layout';
import Pokrovsk from 'components/Pokrovsk/Pokrovsk';
import AboutPage from 'pages/AboutPage/AboutPage';
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
          <Route index element={<AboutPage />} />
          <Route path="home/" element={<HomePage />}>
            <Route index element={<Kyiv />} />
            <Route path="kyiv" element={<Kyiv />} />
            <Route path="kharkiv" element={<Kharkiv />} />
            <Route path="pokrovsk" element={<Pokrovsk />} />
          </Route>

          <Route path="transfers" element={<TransfersPage />} />
          <Route path="departments" element={<DepartmentsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

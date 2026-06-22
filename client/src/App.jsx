// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import AllEventsPage from './pages/AllEventsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/locations/:slug" element={<LocationPage />} />
      <Route path="/events" element={<AllEventsPage />} />
    </Routes>
  );
}
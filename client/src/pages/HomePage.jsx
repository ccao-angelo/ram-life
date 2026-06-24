// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import CampusMap from '../components/CampusMap';
import { getLocations } from '../api/client';

export default function HomePage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCampusData() {
        try {
            const data = await getLocations();
            setLocations(data);
        } catch (err) {
            console.error(err);
            setError("Failed to load campus locations.");
        } finally {
            setLoading(false);
        }
    }

    fetchCampusData();
  }, []);

  if (loading) {
    return (
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h2>Loading Campus Map...</h2>
        </div>
    );
  }

  if (error) {
    return (
        <div style={{ textAlign: 'center', marginTop: '4rem', color: '#C0392B' }}>
            <h2>{error}</h2>
        </div>
    );
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#F7F5F0', minHeight: '100vh' }}>
        <h1 style={{ color: '#003DA5', margin: '0 0 1rem 0' }}>RAM Life</h1>
        <p style={{ color: '#1A1A2E', marginBottom: '2rem' }}>Select a campus location to view events.</p>

        <div style={{ marginBottom: '2rem' }}>
            <a href="/events" style={{ backgroundColor: '#003DA5', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
                View All Events List
            </a>
        </div>

        <CampusMap locations={locations} />
    </div>
  );
}
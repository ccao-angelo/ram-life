// src/pages/LocationPage.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLocation, getLocationEvents } from '../api/client';
import EventCard from '../components/EventCard';

export default function LocationPage() {
    const { slug } = useParams();
    const [location, setLocation] = useState(null);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const [locData, eventsData] = await Promise.all([
                    getLocation(slug),
                    getLocationEvents(slug)
                ]);

                setLocation(locData);
                setEvents(eventsData);
            } catch (err) {
                console.error(err);
                setError("Failed to load location details.");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [slug]);

    if (loading) return <h2 style={{ textAlign: 'center', marginTop: '4rem' }}>Loading...</h2>;
    if (error) return <h2 style={{ textAlign: 'center', marginTop: '4rem', color: '#C0392B' }}>{error}</h2>;

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', backgroundColor: '#F7F5F0', minHeight: '100vh' }}>
      
            <Link to="/" style={{ color: '#003DA5', textDecoration: 'none', fontWeight: 'bold' }}>
                &larr; Back to Map
            </Link>
            
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{location.icon}</div>
                <h1 style={{ color: '#003DA5', margin: '0 0 0.5rem 0' }}>{location.name}</h1>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>{location.description}</p>
            </div>

            <h2 style={{ color: '#1A1A2E', borderBottom: '2px solid #C8B99A', paddingBottom: '0.5rem' }}>
                Upcoming Events
            </h2>

            {events.length === 0 ? (
                <p>No events currently scheduled here.</p>
            ) : (
                events.map(event => (
                    <EventCard key={event.id} event={event} />
                ))
            )}
        </div>
    );
}
// src/pages/AllEventsPage.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../api/client';
import EventCard from '../components/EventCard';

export default function AllEventsPage() {
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const data = await getAllEvents();
                setEvents(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);

    if (loading) return <h2 style={{ textAlign: 'center', marginTop: '4rem', fontFamily: 'sans-serif '}}>Loading...</h2>;

    const uniqueLocations = ['All', ...new Set(events.map(e => e.location_name))];

    const filteredEvents = filter === 'All'
        ? events
        : events.filter(e => e.location_name === filter);

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#F7F5F0', minHeight: '100vh' }}>
            <Link to="/" style={{ color: '#003DA5', textDecoration: 'none', fontWeight: 'bold' }}>
                &larr; Back to Map
            </Link>

            <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ color: '#003DA5', margin: 0 }}>All Campus Events</h1>

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #C8B99A' }}
                >
                    {uniqueLocations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>
            </div>

            {filteredEvents.map(event => (
                <div key={event.id}>
                    <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                        📍 {event.location_name}
                    </p>
                    <EventCard event={event} />
                </div>
            ))}
        </div>
    );
}
// src/components/EventCard.jsx
import CategoryBadge from "./CategoryBadge";
import Countdown from './Countdown';
import '../styles/EventCard.css';

export default function EventCard({ event }) {
    const eventDate = new Date(event.event_date);
    const isPast = eventDate < new Date();

    return (
        <div className={`event-card ${isPast ? 'past-event' : ''}`}>
            <div className="event-header">
                <h3>{event.title}</h3>
                <CategoryBadge category={event.category} />
            </div>

            <p className="event-time">
                {eventDate.toLocaleDateString()} @ {eventDate.toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })}
            </p>

            <p className="event-description">{event.description}</p>

            {isPast ? (
                <span className="past-label">Past Events</span>
            ) : (
                <Countdown targetDate={event.event_date} />
            )}
        </div>
    );
}
// server/seed.js
require('dotenv').config();
const pool = require('./db/pool');

const seedQuery = `
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
    id      SERIAL PRIMARY KEY,
    name    TEXT NOT NULL,
    slug    TEXT UNIQUE NOT NULL,
    description TEXT,
    icon    TEXT,
    map_x   INTEGER NOT NULL,
    map_y   INTEGER NOT NULL
);

CREATE TABLE events (
    id      SERIAL PRIMARY KEY,
    location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
    title   TEXT NOT NULL,
    description TEXT,
    category    TEXT CHECK (category IN ('Academic', 'Social', 'Athletics', 'Cultural', 'Civic')),
    event_date  TIMESTAMPTZ NOT NULL
);

INSERT INTO locations (id, name, slug, description, icon, map_x, map_y) VALUES
(1, 'Carr Academic Building', 'carr-academic', 'Home to MIS, CS, and business classrooms.', '🎓', 320, 180),
(2, 'Hardeman Student Center', 'hardeman', 'Student union and services.', '🏛️', 200, 280),
(3, 'Junell Center / Stephens Arena', 'junell-center', 'Athletics and large events.', '🏟️', 480, 320),
(4, 'University Amphitheatre', 'amphitheatre', 'Outdoor performances and gatherings.', '🎵', 150, 160),
(5, 'Texan Hall (Residence)', 'texan-hall', 'Student housing and dorm life.', '🏠', 380, 380);

INSERT INTO events (location_id, title, description, category, event_date) VALUES
(1, 'MIS Career Panel', 'Industry professionals discuss analytics roles', 'Academic', '2026-09-15 14:00:00-05'),
(1, 'Study Hall: Finals Week', 'Open study space with tutoring available', 'Academic', '2026-12-09 09:00:00-05'),
(1, 'Resume Review Workshop', 'One-on-one resume critiques by Career Services', 'Academic', '2026-04-01 11:00:00-05'),
(2, 'Fall Club Fair', 'Meet all 100+ student organizations at ASU', 'Social', '2026-08-28 10:00:00-05'),
(2, 'SGA Town Hall', 'Student Government open forum', 'Civic', '2026-09-22 17:00:00-05'),
(2, 'International Students Mixer', 'Cultural exchange meetup and food', 'Cultural', '2026-03-10 18:00:00-05'),
(3, 'Ram Football Kickoff Pep Rally', 'Season opener rally with the marching band', 'Athletics', '2026-08-30 19:00:00-05'),
(3, 'Intramural 3v3 Basketball', 'Sign-up based bracket tournament', 'Athletics', '2026-11-05 16:00:00-05'),
(3, 'Athletic Department Open House', 'Tour facilities and meet coaches', 'Athletics', '2026-02-05 13:00:00-05'),
(4, 'Sunset Open Mic', 'Student performers: music, poetry, spoken word', 'Cultural', '2026-09-27 18:30:00-05'),
(4, 'Latinx Heritage Month Concert', 'Live performances celebrating Latinx culture', 'Cultural', '2026-10-18 19:00:00-05'),
(4, 'Acoustic Jam Session', 'Bring your instrument, join the circle', 'Social', '2026-11-15 17:00:00-05'),
(5, 'RA Floor Mixer: Game Night', 'Board games and snacks hosted by your RA', 'Social', '2026-09-06 20:00:00-05'),
(5, 'Dorm Room Decor Workshop', 'DIY tips and supplies provided', 'Social', '2026-08-25 14:00:00-05'),
(5, 'Wellness Wednesday: Yoga', 'Outdoor yoga session on the quad', 'Social', '2026-05-08 07:00:00-05');
`;

pool.query(seedQuery, (err, res) => {
    if (err) {
        console.error('✕ Error seeding database:', err);
    } else {
        console.log('✓ Database seeded successfully!');
    }
    pool.end();
});
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
(1, 'Houston Harte University Center', 'houston-harte', 'Student union and campus life hub.', '🏛️', 150, 300),
(2, 'Porter Henderson Library', 'library', 'The main campus library and study space.', '📚', 490, 285),
(3, 'Junell Center / Stephens Arena', 'junell-center', 'Athletics and large events.', '🏟️', 153, 95),
(4, 'ASU Mayer Museum', 'mayer-museum', 'Campus art and history museum.', '🖼️', 470, 135);

INSERT INTO events (location_id, title, description, category, event_date) VALUES
(1, 'Texas DFPS Information Session', 'Information session for careers with Texas Dept of Family and Protective Services', 'Civic', '2026-06-25 10:00:00-05'),
(1, 'Small Business Lender Expo', 'Networking and financing opportunities for business owners', 'Social', '2026-06-24 09:00:00-05'),
(1, 'Summer II Registration Prep', 'Assistance for students scheduling classes for Summer II', 'Academic', '2026-06-29 12:00:00-05'),
(2, 'CLEP & DSST Proctored Exams', 'Earn college credit by achieving qualifying scores', 'Academic', '2026-06-23 14:00:00-05'),
(2, 'Quiet Study: Extended Summer Hours', 'Late night open study space for Summer I students', 'Academic', '2026-06-27 18:00:00-05'),
(2, 'Summer I Finals Prep Session', 'Tutoring and review before final exams', 'Academic', '2026-06-30 14:00:00-05'),
(3, 'Basketball Exposure Showcase', 'Regional showcase tournament for visiting teams', 'Athletics', '2026-06-13 08:00:00-05'),
(3, 'Men''s Basketball: Full Day Camp', 'Skill improvement camp run by Angelo State coaches', 'Athletics', '2026-06-24 10:00:00-05'),
(3, 'The Great Gatsby Dinner Theatre', 'Adapted for the stage by Simon Levy, dinner included', 'Cultural', '2026-06-26 18:45:00-05'),
(4, 'Exhibit: Century of the Scout', '100 Years of Character, Leadership and Community in Texas', 'Cultural', '2026-06-23 10:00:00-05'),
(4, 'Juried Ceramic Competition', 'First Mayer National Juried Student Ceramic Competition', 'Cultural', '2026-06-25 10:00:00-05'),
(4, 'Exhibit: Concho River Legacy Trail', 'Exploring the rich history of the Concho River Valley', 'Civic', '2026-06-28 14:00:00-05');
`;

pool.query(seedQuery, (err, res) => {
    if (err) {
        console.error('✕ Error seeding database:', err);
    } else console.log('✓ Database seeded successfully!');
    pool.end();
});
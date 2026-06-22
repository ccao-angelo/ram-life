// server/routes/locations.js
const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

// GET /api/locations
router.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM locations ORDER BY id');
    res.json(result.rows);
});

// GET /api/locations/:slug
router.get('/:slug', async (req, res) => {
    const result = await pool.query('SELECT * FROM locations WHERE slug = $1', [req.params.slug]);
    if (!result.rows.length) return res.status(404).json({ error: 'Location not found!' });
    res.json(result.rows);
});

//GET /api/locations/:slug/events
router.get('/:slug/events', async (req, res) => {
    const result = await pool.query(
        `SELECT e.* FROM events e
        JOIN locations l ON e.location_id = l.id
        WHERE l.slug = $1
        ORDER BY e.event_date ASC`,
        [req.params.slug]
    );
    res.json(result.rows);
});

module.exports = router;
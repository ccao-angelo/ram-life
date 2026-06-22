// server/routes/events.js
const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

router.get('/', async (req, res) => {
    const result = await pool.query(`
        SELECT e.*, l.name AS location_name
        FROM events e
        JOIN locations l ON e.location_id = l.id
        ORDER BY e.event_date ASC
    `);
    res.json(result.rows);
});

module.exports = router;
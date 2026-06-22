// src/api/client.js
const BASE_URL = import.meta.env.VITE_API_URL;

export async function getLocations() {
    const res = await fetch(`${BASE_URL}/locations`);
    if (!res.ok) throw new Error('Failed to fetch locations');
    return res.json();
}

export async function getLocation(slug) {
    const res = await fetch(`${BASE_URL}/locations/${slug}/events`);
    if (!res.ok) throw new Error('Failed to fetch location');
    return res.json();
}

export async function getLocationEvents(slug) {
    const res = await fetch(`${BASE_URL}/locations/${slug}/events`);
    if (!res.ok) throw new Error('Failed to fetch events');
    return res.json();
}

export async function getAllEvents() {
    const res = await fetch(`${BASE_URL}/events`);
    if(!res.ok) throw new Error('Failed to fetch all events');
    return res.json();
}
// src/components/CampusMap.jsx
import BuildingNode from './BuildingNode';
import '../styles/CampusMap.css';

export default function CampusMap({ locations }) {
  return (
    <svg viewBox="0 0 640 480" className="campus-map">
      {/* Static background: grass, paths */}
      <rect width="640" height="480" fill="#7DB87A" rx="12" />
      <rect x="100" y="100" width="440" height="280" fill="#8DC88A" rx="8" />

      {/* Pathways */}
      <line x1="320" y1="100" x2="320" y2="380" stroke="#C8B99A" strokeWidth="12" />
      <line x1="100" y1="280" x2="540" y2="280" stroke="#C8B99A" strokeWidth="12" />

      {locations.map(loc => (
        <BuildingNode key={loc.id} location={loc} />
      ))}
    </svg>
  );
}
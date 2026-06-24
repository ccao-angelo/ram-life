// src/components/CampusMap.jsx
import BuildingNode from './BuildingNode';
import '../styles/CampusMap.css';

export default function CampusMap({ locations }) {
  return (
    <svg viewBox="0 0 640 480" className="campus-map">
      <image href="/grassland.svg" width="640" height="480" preserveAspectRatio='xMidYMid slice' />

      {locations.map(loc => (
        <BuildingNode key={loc.id} location={loc} />
      ))}
    </svg>
  );
}
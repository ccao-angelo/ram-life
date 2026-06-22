// src/components/BuildingNode.jsx
import { useNavigate } from "react-router-dom";

export default function BuildingNode({ location }) {
    const navigate = useNavigate();

    return (
        <g
            className="building=node"
            onClick={() => navigate(`/locations/${location.slug}`)}
            style={{ cursor: 'pointer' }}
        >
            {/* Building Block */}
            <rect
                x={location.map_x - 28}
                y={location.map_y - 20}
                width="56"
                height="40"
                rx="6"
                fill="#003DA5"
                className="building-rect"
            />
            {/* Icon */}
            <text
                x={location.map_x}
                y={location.map_y + 6}
                textAnchor="middle"
                fontSize="18"
            >
                {location.icon}
            </text>
            {/* Label */}
            <text
                x={location.map_x}
                y={location.map_y + 34}
                textAnchor="middle"
                fontSize="9"
                fill="white"
                fontWeight="600"
            >
                {location.name.split(' ')}
            </text>
        </g>
    );
}
// src/components/BuildingNode.jsx
import { useNavigate } from "react-router-dom";

export default function BuildingNode({ location }) {
    const navigate = useNavigate();

    const imgWidth = 200;
    const imgHeight = 150;

    return (
        <g
            className="building-node"
            onClick={() => navigate(`/locations/${location.slug}`)}
            style={{ cursor: 'pointer' }}
        >
            <image href={`/${location.slug}.png`}
            x={location.map_x - (imgWidth / 2)}
            y={location.map_y - (imgHeight / 2)}
            width={imgWidth}
            height={imgHeight}
            className="building-image"
            />

            <g className="label-wrapper">
                <rect
                    x={location.map_x - 110}
                    y={location.map_y + (imgHeight / 2) - 25}
                    width="220"
                    height="24"
                    rx="12"
                    fill="rgba(26, 26, 46, 0.85)"
                    className="label-bg"
                />
                <text
                    x={location.map_x}
                    y={location.map_y + (imgHeight / 2) -10}
                    textAnchor="middle"
                    fontSize="11"
                    fill="white"
                    fontWeight="600"
                    style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.02rem' }}
                >
                    {location.name}
                </text>
            </g>
        </g>
    );
}
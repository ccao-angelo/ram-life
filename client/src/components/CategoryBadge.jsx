// src/components/CategoryBadge.jsx
export default function CategoryBadge({ category }) {
  // Colors mapped directly from your blueprint
  const colors = {
    Academic: '#003DA5',
    Social: '#FFB700',
    Athletics: '#C0392B',
    Cultural: '#8E44AD',
    Civic: '#27AE60'
  };
  
  const bgColor = colors[category] || '#999';
  // If the background is Social (Yellow), use black text for readability
  const textColor = category === 'Social' ? '#000' : '#FFF';

  return (
    <span style={{
      backgroundColor: bgColor,
      color: textColor,
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '11px',
      fontFamily: 'sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: 'bold'
    }}>
      {category}
    </span>
  );
}
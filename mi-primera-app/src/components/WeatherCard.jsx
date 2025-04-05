// src/components/WeatherCard.jsx

function WeatherCard({ ciudad, temperatura, descripcion }) {
  return (
    <div className="weather-card">
      <h2>{ciudad}</h2>
      <p>{temperatura}°C</p>
      <p>{descripcion}</p>
    </div>
  );
}

export default WeatherCard;

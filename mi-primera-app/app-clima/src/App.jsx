import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const apiKey = "78cc7eabaaa42866c68cf16e0ab0e1c1";
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
      );
      const data = await res.json();

      if (res.ok) {
        setWeather({
          ciudad: data.name,
          temperatura: data.main.temp,
          descripcion: data.weather[0].description,
        });
        setError("");
      } else {
        setError("Ciudad no encontrada");
        setWeather(null);
      }
    } catch {
      setError("Hubo un error al buscar el clima");
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="app-container">
      <h1>App del Clima</h1>
      {/* Eliminado el mensaje de la URL local */}

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Escribí una ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weather && (
        <WeatherCard
          city={weather.ciudad}
          temperature={weather.temperatura}
          description={weather.descripcion}
        />
      )}
    </div>
  );
}

export default App;

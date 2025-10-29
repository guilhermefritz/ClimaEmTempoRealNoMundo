function WeatherCard({ weather }) {
  if (weather.cod !== 200) {
    return <p>Não foi possível encontrar a cidade.</p>;
  }

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>🌡 {weather.main.temp}°C</p>
      <p>💨 Vento: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;

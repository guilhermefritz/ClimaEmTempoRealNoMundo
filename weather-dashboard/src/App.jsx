import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(""); // estado para erros

  return (
    <div>
      <Header />
      <SearchBar setWeather={setWeather} setError={setError} />
      
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <WeatherCard weather={weather} />
      )}

      <Footer />
    </div>
  );
}

export default App;

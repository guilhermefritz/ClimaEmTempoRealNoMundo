import React, { useState } from "react";

const API_KEY = "77805cb7dff57f281b964ef2a6cdc250"; // Sua chave API

export default function SearchBar({ setWeather, setError }) {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city) {
      setError("Digite o nome da cidade");
      setWeather(null);
      return;
    }

    try {
      // URL correta com sua chave API
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt`;
      console.log("Buscando cidade:", city);
      console.log("URL da API:", url);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Não foi possível encontrar a cidade.");
      }

      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  // Permitir buscar ao apertar Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Digite a cidade"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

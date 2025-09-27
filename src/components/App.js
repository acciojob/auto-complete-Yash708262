import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query === "") {
        setSuggestions([]);
      } else {
        const filtered = fruits.filter((fruit) =>
          fruit.toLowerCase().startsWith(query.toLowerCase())
        );
        setSuggestions(filtered);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Autocomplete Search</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* ul हमेशा present रहेगा */}
      <ul>
        {suggestions.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


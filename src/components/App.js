import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
      return;
    }

    // simulate async API call with setTimeout
    const handler = setTimeout(() => {
      const filtered = fruits.filter((fruit) =>
        fruit.toLowerCase().startsWith(query.toLowerCase())
      );
      setSuggestions(filtered);
    }, 300); // delay for async effect

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

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

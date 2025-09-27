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

      {/* हमेशा <ul> रहेगा */}
      <ul>
        {suggestions.length > 0 ? (
          suggestions.map((fruit, index) => <li key={index}>{fruit}</li>)
        ) : (
          <li>No suggestions</li> // invalid data case
        )}
      </ul>
    </div>
  );
};

export default App;

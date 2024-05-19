import React, { useState } from "react";
import { api } from "../Api/api";
import Cart from "../carts/Cart";
import "./search.scss";

interface Result {
  original_title: string;
}

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (query.trim() === "") {
      setError("Please enter a search term");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await api.get(
        `search/movie?api_key=e81b8c747a3769afc226a3266478dd63&query=${query}`
      );
      setResults(response.data.results);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h1>Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
      {error && <p className="error">{error}</p>}
      <div className="results">
        {results.map((cart:any) => (
          <Cart key={cart?.id} cart={cart}  />
        ))}
      </div>
    </div>
  );
};

export default Search;

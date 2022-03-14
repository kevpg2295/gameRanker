import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const doSearch = async () => {
      try {
        const response = await axios.get();

        setResults(response);
      } catch (e) {
        console.log(e);
      }
    };

    doSearch();
  }, [search]);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>Seach Bar</h2>
      <input
        type="text"
        placeholder="Find your favorite game!"
        value={search}
        onChange={handleChangeSearch}
      />
    </div>
  );
};

export default SearchBar;

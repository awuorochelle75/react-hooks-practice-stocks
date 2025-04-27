import React from "react";
import SearchBar from "./SearchBar";  // Add this import statement

function Header({ setSortCriteria, setFilterType }) {
  return (
    <header>
      <h1 className="text-center">Flatiron Stock Exchange</h1>
      <SearchBar
        setSortCriteria={setSortCriteria}
        setFilterType={setFilterType}
      />
    </header>
  );
}

export default Header;

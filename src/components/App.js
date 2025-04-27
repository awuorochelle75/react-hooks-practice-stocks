import React, { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]); // Holds all stocks
  const [portfolio, setPortfolio] = useState([]); // Holds stocks in portfolio
  const [filterType, setFilterType] = useState("All"); // Filter by type
  const [sortCriteria, setSortCriteria] = useState("Alphabetically"); // Sorting by alphabet or price

  return (
    <div>
      <Header
        setSortCriteria={setSortCriteria}
        setFilterType={setFilterType}
      />
      <MainContainer
        stocks={stocks}
        portfolio={portfolio}
        setStocks={setStocks}
        setPortfolio={setPortfolio}
        filterType={filterType}
        sortCriteria={sortCriteria}
      />
    </div>
  );
}

export default App;

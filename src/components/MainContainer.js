import React, { useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import Stock from "./Stock";

function MainContainer({
  stocks,
  portfolio,
  setStocks,
  setPortfolio,
  filterType,
  sortCriteria,
}) {
  useEffect(() => {
    // Fetching stock data (this is where you can replace with actual API call)
    const fetchedStocks = [
      { id: 1, ticker: "AAPL", price: 145.09, type: "Tech" },
      { id: 2, ticker: "GOOGL", price: 2725.60, type: "Tech" },
      { id: 3, ticker: "AMZN", price: 3342.88, type: "Tech" },
      { id: 4, ticker: "TSLA", price: 688.99, type: "Tech" },
      { id: 5, ticker: "MSFT", price: 299.80, type: "Tech" },
      { id: 6, ticker: "JNJ", price: 171.44, type: "Health" },
      { id: 7, ticker: "PFE", price: 40.17, type: "Health" },
      { id: 8, ticker: "GS", price: 377.98, type: "Finance" },
      { id: 9, ticker: "JPM", price: 150.40, type: "Finance" },
    ];

    setStocks(fetchedStocks);
  }, [setStocks]);

  // Sorting function
  const sortedStocks = stocks
    .filter((stock) => filterType === "All" || stock.type === filterType)
    .sort((a, b) => {
      if (sortCriteria === "Alphabetically") {
        return a.ticker.localeCompare(b.ticker);
      }
      if (sortCriteria === "Price") {
        return a.price - b.price;
      }
      return 0;
    });

  // Handle buying a stock
  const onBuy = (stock) => {
    if (!portfolio.some((item) => item.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  // Handle selling a stock
  const onSell = (stock) => {
    setPortfolio(portfolio.filter((item) => item.id !== stock.id));
  };

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h2>Stocks</h2>
          <div>
            {sortedStocks.map((stock) => (
              <Stock
                key={stock.id}
                stock={stock}
                onBuy={onBuy}
                onSell={onSell}
                isInPortfolio={portfolio.some((item) => item.id === stock.id)}
              />
            ))}
          </div>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSell={onSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

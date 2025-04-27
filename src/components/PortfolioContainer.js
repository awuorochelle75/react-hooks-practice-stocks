import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      <div>
        {portfolio.length === 0 ? (
          <p>No stocks in your portfolio</p>
        ) : (
          portfolio.map((stock) => (
            <Stock
              key={stock.id}
              stock={stock}
              onSell={onSell}
              isInPortfolio={true}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default PortfolioContainer;

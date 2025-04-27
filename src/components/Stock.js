import React from "react";

function Stock({ stock, onBuy, onSell, isInPortfolio }) {
  return (
    <div className="card" onClick={() => (isInPortfolio ? onSell(stock) : onBuy(stock))}>
      <div className="card-body">
        <h5 className="card-title">{stock.ticker}</h5>
        <p className="card-text">Price: ${stock.price}</p>
        <p className="card-text">Type: {stock.type}</p>
        <button className="btn btn-primary">
          {isInPortfolio ? "Sell" : "Buy"}
        </button>
      </div>
    </div>
  );
}

export default Stock;

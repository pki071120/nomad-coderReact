import React, { useEffect, useState } from "react";

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState();
  const [cost, setCost] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const select = (e) => {
    setCost(e.target.value);
  };
  console.log(cost);
  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <input
            type="number"
            value={money}
            onChange={(event) => setMoney(event.target.value)}
            placeholder="니 돈 적어"
          />
          <select onChange={select}>
            <option key="-1">select coin</option>
            {coins.map((coin, index) => (
              <option
                key={index}
                name="coin_name"
                value={coin.quotes.USD.price.toFixed(2)}
              >
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price.toFixed(2)}
              </option>
            ))}
          </select>
          <p>
            Coins you can buy: {cost > 0 ? (money / cost).toFixed(5) : null}
          </p>
        </>
      )}
    </div>
  );
};

export default Coin;

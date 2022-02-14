import "../App.css";
import Cards from "./Cards";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function Main() {
  const coinAPI = "https://api.coinlore.net/api/tickers/?start=0&limit=50";
  // let { navigate } = useNavigate();

  const [cryList, setCryList] = useState([]);

  useEffect(() => {
    axios.get(coinAPI).then((response) => {
      setCryList(response.data["data"]);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="heading-1">💸Top 20 Cryptocurrencies💸</h1>
      <h1 className="heading-2">🔴Live</h1>

      <div className="coinList">
        {cryList.map((coin) => {
          return (
            <div>
              <Cards
                coinSymbol={coin.symbol}
                coinName={coin.name}
                priceUSD={coin.price_usd}
                change1hrs={coin.percent_change_1h}
                rank={coin.rank}
              />
            </div>
          );
        })}
      </div>

      <footer>Swami Nawale 2022</footer>
    </div>
  );
}

export default Main;

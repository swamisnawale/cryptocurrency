import "../style/Card.css";

function Cards({ coinSymbol, coinName, priceUSD, change1hrs, rank }) {
  return (
    <div className="card">
      <div className="row-1">
        <span className="coinSymbol">{coinSymbol}</span>

        <span className="coinName">{coinName}</span>
        <span className="rank">#{rank}</span>
      </div>
      <hr />
      <div className="row-2">
        <span className="usdSymbol">$ </span>
        <span className="usdPrice">{priceUSD}</span>
        <span className="perChange24hrs">
          {change1hrs}%<span className="subtitle"> change in last 60 min </span>
        </span>
      </div>
    </div>
  );
}

export default Cards;

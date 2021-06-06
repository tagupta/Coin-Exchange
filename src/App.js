import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Coin Exchange
        </h1>
      </header>
      <AccountBalance  amount = {10000}/>
      <table className="Coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
            <th>Refresh</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={9999.99}/>
          <Coin name="Ethereum" ticker="ETH" price={299.99}/>
          <Coin name="Tether" ticker="USDT" price={2.99}/>
          <Coin name="Dogecoin" ticker="Doge" price={0.4095}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;

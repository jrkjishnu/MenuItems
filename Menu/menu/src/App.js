import logo from './logo.svg';
import './App.css';
import Menu from './menu';
import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Menu data={data} />
      </header>
    </div>
  );
}

export default App;

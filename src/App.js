import logo from "./logo.svg";
import "./App.css";
import SearchEngine from "./SearchEngine"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Weather app</p>
        <SearchEngine />
      </header>
    </div>
  );
}

export default App;

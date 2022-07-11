import Header from "./components/Header";
import GameList from "./components/GameList";
import "./App.css";

function App(name) {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <GameList />
    </div>
  );
}

export default App;

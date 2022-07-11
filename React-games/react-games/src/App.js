import Header from "./components/Header";
import "./App.css";

function App(name) {
  return (
    <div className="App">
      <header className="App-header">
        <Header name={"name"} />
      </header>
    </div>
  );
}

export default App;

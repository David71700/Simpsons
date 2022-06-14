import Card from "./components/Quotecard";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [simpson, setSimpsons] = useState("");

  const getSimpsons = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpsons(data[0]);
      });
  };

  return (
    <div className="App">
      <Card simpson={simpson} getSimpson={getSimpsons} />
    </div>
  );
}

export default App;

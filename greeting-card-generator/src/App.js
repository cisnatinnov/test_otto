import React, { useState } from "react";
import GreetingCardForm from "./components/GreetingCardForm";
import GreetingCardPreview from "./components/GreetingCardPreview";
import "./App.css";

function App() {
  const [cardData, setCardData] = useState({
    image: null,
    dear: "",
    message: "",
    from: ""
  });

  const handleFormSubmit = (data) => {
    setCardData(data);
  };

  return (
    <div className="App">
      <h1>Greeting Card Generator</h1>
      <div className="container">
        <GreetingCardForm onSubmit={handleFormSubmit} />
        <GreetingCardPreview cardData={cardData} />
      </div>
    </div>
  );
}

export default App;
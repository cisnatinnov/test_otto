import { useState } from "react";
import GreetingCardForm from "../components/GreetingCardForm";
import GreetingCardPreview from "../components/GreetingCardPreview";

const GreetingCardGenerator = () => {
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
    <div>
      <h3 className="text-center mb-4">Greeting Card Generator</h3>
      <div className="grid grid-cols-2 gap-2">
        <GreetingCardForm onSubmit={handleFormSubmit} />
        <GreetingCardPreview cardData={cardData} />
      </div>
    </div>
  )
};

export default GreetingCardGenerator;
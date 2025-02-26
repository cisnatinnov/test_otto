import React, { useRef } from "react";
import html2canvas from "html2canvas";

const GreetingCardPreview = ({ cardData }) => {
  const cardRef = useRef(null);

  const handleDownload = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "greeting-card.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="shadow-md rounded">
      <div ref={cardRef} className="card">
        {cardData.image && (
          <img src={cardData.image} alt="Card Background" className="card-image" />
        )}
        <div
          className="card-message"
          style={{
            position: "absolute",
            left: `40%`,
            top: `28%`,
          }}
        >
          {cardData.dear}
        </div>
        <div
          className="card-message"
          style={{
            position: "absolute",
            left: `27%`,
            top: `37%`,
          }}
        >
          {cardData.message}
        </div>
        <div
          className="card-message"
          style={{
            position: "absolute",
            left: `40%`,
            top: `53%`,
          }}
        >
          {cardData.from}
        </div>
      </div>
      <button onClick={handleDownload} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold w-full rounded focus:outline-none focus:shadow-outline">Download Card</button>
    </div>
  );
};

export default GreetingCardPreview;
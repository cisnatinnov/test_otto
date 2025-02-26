import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const GreetingCardForm = ({ onSubmit }) => {
  const [image, setImage] = useState(null);
  const [dear, setDear] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [errorImage, setErrorImage] = useState("");
  const [errorDear, setErrorDear] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorFrom, setErrorFrom] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      setErrorImage("Image is required");
      return
    }
    if (!dear.trim()) {
      setErrorDear("Dear is required");
      return
    }
    if (!message.trim()) {
      setErrorMessage("Message is required");
      return
    }
    if (!message.trim()) {
      setErrorFrom("From is required");
      return
    }
    onSubmit({ image, dear, message, from });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <div {...getRootProps()} className="dropzone mb-4">
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to <label className="underline text-blue-500">browse</label></p>
        <span className="error italic">{errorImage}</span>
      </div>
      {image && <img src={image} alt="Preview" className="preview-image" />}
      <div className="mb-2">
        <label for="dear" className="block text-gray-700 text-sm font-bold mb-2">Dear</label>
        <input
          placeholder="Dear"
          value={dear}
          onChange={(e) => setDear(e.target.value)}
          id="dear"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          autoFocus={true}
        />
        <span className="error italic">{errorDear}</span>
      </div>
      <div className="mb-2">
        <label for="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <span className="error italic">{errorMessage}</span>
      </div>
      <div className="mb-2">
        <label for="from" className="block text-gray-700 text-sm font-bold mb-2">From</label>
        <input
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          id="from"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <span className="error italic">{errorFrom}</span>
      </div>
      <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold w-full rounded focus:outline-none focus:shadow-outline">Generate Card</button>
    </form>
  );
};

export default GreetingCardForm;
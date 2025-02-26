import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const GreetingCardForm = ({ onSubmit }) => {
  const [image, setImage] = useState(null);
  const [dear, setDear] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [errors, setErrors] = useState({});

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const validate = () => {
    const errors = {};
    if (!image) errors.image = "Image is required";
    if (!dear.trim()) errors.message = "Dear is required";
    if (!message.trim()) errors.message = "Message is required";
    if (!from.trim()) errors.message = "From is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit({ image, dear, message, from });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
        {errors.image && <span className="error">{errors.image}</span>}
      </div>
      {image && <img src={image} alt="Preview" className="preview-image" />}
      <input
        placeholder="Dear"
        value={dear}
        onChange={(e) => setDear(e.target.value)}
        data-testid="dear"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        data-testid="message"
      />
      <input
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        data-testid="from"
      />
      {errors.message && <span className="error">{errors.message}</span>}
      <button type="submit">Generate Card</button>
    </form>
  );
};

export default GreetingCardForm;
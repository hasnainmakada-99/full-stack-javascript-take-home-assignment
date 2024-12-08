import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../AuthContext";

const Modal = ({ onClose, onSubmit }) => {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [institution, setInstitution] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [highlights, setHighlights] = useState([""]);

  const handleAddHighlight = () => setHighlights([...highlights, ""]);
  const handleChangeHighlight = (index, value) => {
    const updatedHighlights = [...highlights];
    updatedHighlights[index] = value;
    setHighlights(updatedHighlights);
  };

  const handleSubmit = async () => {
    const newEducation = {
      userId: currentUser._id, // Include user ID
      title,
      institution,
      startDate,
      endDate,
      highlights: highlights.filter((h) => h.trim() !== ""),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/addEdu",
        newEducation
      );
      onSubmit(response.data); // Pass the response data to the parent component
      onClose(); // Close the modal after saving
    } catch (error) {
      console.error(`Error adding education details: ${error.message}`);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add Education</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Institution:
            <input
              type="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <label>
            Highlights:
            {highlights.map((highlight, index) => (
              <input
                key={index}
                type="text"
                value={highlight}
                onChange={(e) => handleChangeHighlight(index, e.target.value)}
              />
            ))}
            <button type="button" onClick={handleAddHighlight}>
              Add Highlight
            </button>
          </label>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

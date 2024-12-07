import React, { useState } from "react";

const Modal = ({ onClose, onSubmit }) => {
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

  const handleSubmit = () => {
    const newEducation = {
      title,
      institution,
      startDate,
      endDate,
      highlights: highlights.filter((h) => h.trim() !== ""),
    };
    onSubmit(newEducation);
    onClose(); // Close the modal after saving
  };

  return (
    <>
      {/* Dimmed Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
        onClick={onClose} // Close modal when clicking on the background
      ></div>

      {/* Modal Box */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#ffffff",
          width: "400px",
          padding: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          borderRadius: "8px",
        }}
      >
        <h3 style={{ margin: "0 0 20px 0" }}>New Education Modal</h3>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        {/* Institution Input */}
        <input
          type="text"
          placeholder="Enter institution"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        {/* Dates Inputs */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <input
            type="text"
            placeholder="End Date (optional)"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Highlights Inputs */}
        <div style={{ marginBottom: "10px" }}>
          <h4 style={{ marginBottom: "5px" }}>Highlights</h4>
          {highlights.map((highlight, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Highlight ${index + 1}`}
              value={highlight}
              onChange={(e) => handleChangeHighlight(index, e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          ))}
          <button
            onClick={handleAddHighlight}
            style={{
              marginTop: "5px",
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add Highlight
          </button>
        </div>

        {/* Save Button */}
        <div style={{ textAlign: "right" }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;

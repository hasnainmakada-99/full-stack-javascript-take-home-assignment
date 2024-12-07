import React, { useState } from "react";
import EducationList from "./EducationList";
import EducationDetails from "./EducationDetails";
import Modal from "../components/Shared/Modal";

import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [educations, setEducations] = useState([]);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAddEducation = (newEducation) => {
    setEducations([newEducation, ...educations]); // Add new education at the top
    setSelectedEducation(newEducation); // Set as the selected entry
    setIsModalOpen(false); // Close modal
  };

  const handleEditEducation = (updatedEducation) => {
    // Update the selected education in the list
    const updatedEducations = educations.map((education) =>
      education === selectedEducation ? updatedEducation : education
    );

    setEducations(updatedEducations);
    setSelectedEducation(updatedEducation);
    setIsModalOpen(false); // Close modal
    setIsEditMode(false); // Exit edit mode
  };

  const handleDeleteEducation = () => {
    // Remove the selected education from the list
    const updatedEducations = educations.filter(
      (education) => education !== selectedEducation
    );

    setEducations(updatedEducations);
    setSelectedEducation(null); // Clear the selected entry
  };

  const handleLogout = async () => {
    try {
      await logout(); // Logout the user
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div
      className="home-container"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>
          Welcome,{" "}
          <span style={{ color: "blue" }}>{currentUser?.email || "User"}</span>!
        </h1>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div className="sidebar" style={{ width: "20%", paddingRight: "10px" }}>
          <EducationList
            educations={educations}
            onSelect={setSelectedEducation}
          />
        </div>

        {/* Main Content Area */}
        <div className="main-content" style={{ width: "80%" }}>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsEditMode(false);
            }}
            style={{
              backgroundColor: "gray",
              color: "white",
              border: "none",
              padding: "10px",
              margin: "10px 0",
              cursor: "pointer",
            }}
          >
            Add New Education
          </button>

          {selectedEducation ? (
            <>
              <EducationDetails education={selectedEducation} />

              {/* Action Buttons for Edit and Delete */}
              <div style={{ marginTop: "20px" }}>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsEditMode(true);
                  }}
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                >
                  Edit Education
                </button>
                <button
                  onClick={handleDeleteEducation}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  Delete Education
                </button>
              </div>
            </>
          ) : (
            <p>
              No education selected. Add and select an entry from the side
              panel.
            </p>
          )}

          {/* Modal for Adding/Editing Education */}
          {isModalOpen && (
            <Modal
              onClose={() => setIsModalOpen(false)}
              onSubmit={isEditMode ? handleEditEducation : handleAddEducation}
              initialData={isEditMode ? selectedEducation : null}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

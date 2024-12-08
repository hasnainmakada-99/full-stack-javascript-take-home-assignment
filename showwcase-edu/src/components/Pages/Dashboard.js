import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import EducationForm from "./EducationForm";
import API from "../../api";

const Dashboard = () => {
  const [experiences, setExperiences] = useState([]);
  const [editing, setEditing] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const fetchExperiences = async () => {
      const { data } = await API.get("/experiences");
      setExperiences(data);
    };
    fetchExperiences();
  }, []);

  const handleSave = async (form) => {
    if (editing) {
      await API.put(`/experiences/${editing._id}`, form);
    } else {
      await API.post("/experiences", form);
    }
    setEditing(null);
    setIsFormVisible(false);
    const { data } = await API.get("/experiences");
    setExperiences(data);
  };

  const handleDelete = async (id) => {
    await API.delete(`/experiences/${id}`);
    setExperiences(experiences.filter((exp) => exp._id !== id));
  };

  const openForm = () => {
    setEditing(null);
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <Layout>
      <div className="flex">
        <div className="w-1/3 p-4 border-r">
          <h1 className="text-2xl mb-4">Education Dashboard</h1>
          <button
            onClick={openForm}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Education
          </button>
          <ul className="mt-4">
            {experiences.map((exp) => (
              <li key={exp._id} className="border p-2 mb-2">
                <h2>{exp.schoolName}</h2>
                <p>{exp.degree}</p>
                <button
                  onClick={() => {
                    setEditing(exp);
                    setIsFormVisible(true);
                  }}
                  className="text-blue-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(exp._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-4">
          {isFormVisible && (
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl mb-4">
                {editing ? "Edit Education" : "Add Education"}
              </h2>
              <EducationForm initialData={editing} onSubmit={handleSave} />
              <button
                onClick={closeForm}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

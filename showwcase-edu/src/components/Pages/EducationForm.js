import React, { useState } from "react";

const EducationForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState({
    schoolName: "",
    degree: "",
    fieldOfStudy: "",
    startYear: "",
    endYear: "",
    grade: "",
    description: "",
    ...initialData,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          value={form[key]}
          onChange={handleChange}
          className="border p-2"
        />
      ))}
      <button type="submit" className="bg-green-500 text-white p-2">
        Save
      </button>
    </form>
  );
};

export default EducationForm;

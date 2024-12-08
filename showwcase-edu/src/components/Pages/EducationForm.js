import React, { useState } from "react";

const EducationForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState({
    schoolName: initialData.schoolName || "",
    degree: initialData.degree || "",
    fieldOfStudy: initialData.fieldOfStudy || "",
    startYear: initialData.startYear || "",
    endYear: initialData.endYear || "",
    grade: initialData.grade || "",
    description: initialData.description || "",
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
      <input
        name="schoolName"
        placeholder="School Name"
        value={form.schoolName}
        onChange={handleChange}
        className="border p-2"
      />
      <input
        name="degree"
        placeholder="Degree"
        value={form.degree}
        onChange={handleChange}
        className="border p-2"
      />
      <input
        name="fieldOfStudy"
        placeholder="Field of Study"
        value={form.fieldOfStudy}
        onChange={handleChange}
        className="border p-2"
      />
      <input
        name="startYear"
        placeholder="Start Year"
        value={form.startYear}
        onChange={handleChange}
        className="border p-2"
      />
      <input
        name="endYear"
        placeholder="End Year"
        value={form.endYear}
        onChange={handleChange}
        className="border p-2"
      />
      <input
        name="grade"
        placeholder="Grade"
        value={form.grade}
        onChange={handleChange}
        className="border p-2"
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border p-2"
      />
      <button type="submit" className="bg-green-500 text-white p-2">
        Save
      </button>
    </form>
  );
};

export default EducationForm;

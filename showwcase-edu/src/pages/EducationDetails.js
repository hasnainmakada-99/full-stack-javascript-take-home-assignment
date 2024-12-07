const EducationDetails = ({ education }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px" }}>
      <h2>{education.title}</h2>
      <p>
        {education.startDate} - {education.endDate || "Present"}
      </p>
      <ul>
        {education.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationDetails;

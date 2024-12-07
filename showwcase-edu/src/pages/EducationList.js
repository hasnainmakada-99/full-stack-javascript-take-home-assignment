const EducationList = ({ educations, onSelect }) => {
  return (
    <div>
      {educations.length === 0 ? (
        <p>No educations added yet.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {educations.map((education, index) => (
            <li
              key={index}
              onClick={() => onSelect(education)}
              style={{
                cursor: "pointer",
                padding: "10px",
                marginBottom: "5px",
                backgroundColor: "#f4f4f4",
                border: "1px solid #ddd",
              }}
            >
              {education.institution}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationList;

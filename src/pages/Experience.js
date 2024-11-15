import "./experience.css"

function Experience({ experience }) {
  return (
    <div className="timeline-container">
      <h1 id="exp">Experience</h1>
      {experience.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="experience-title">
            <h3 className="company-name">{item.company}</h3>
            <span className="duration">{item.duration}</span>
          </div>
          <h4 className="role">{item.role}</h4>
          <p className="description">{item.des}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;

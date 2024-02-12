import React from "react";
import gis1 from './Assets/gis1.jpeg'
import gis2 from './Assets/gis2.jpeg'
import gis3 from './Assets/gis3.jpeg'
import gis4 from './Assets/gis4.png'

const GISData = [
  { id: 1, type: "image", source: gis1, gridColumn: 1, gridRowStart: 1, gridRowEnd: 6 },
  { id: 2, type: "image", source: gis2, gridColumn: 2, gridRowStart: 1, gridRowEnd: 4 },
  { id: 3, type: "image", source: gis3, gridColumn: 2, gridRowStart: 4, gridRowEnd: 6 },
  { id: 4, type: "image", source: gis4, gridColumn: 3, gridRowStart: 4, gridRowEnd: 6 },
  { id: 5, type: "skill", title: "Analytical Thinking", content: "Developed process and analyzed complex geospatial data..." },
  { id: 6, type: "skill", title: "Requirement Gathering and User-Centric Focus", content: "Engaged in collaborative meetings with military personnel..." },
  { id: 7, type: "skill", title: "Data Handling and Database Knowledge", content: "Contributed in integration of diverse datasets from various sources..." },
  { id: 8, type: "skill", title: "Communication for Code Documentation", content: "Communicated analysis methodologies in written reports..." },
  { id: 9, type: "skill", title: "Agile Project Management", content: "Responded proactively to changing requirements and emerging priorities..." },
];

const GISSection = () => {
  return (
    <div className="geoint">
      <div className="grid-container">
      {GISData.map((item) => (
  <div
    key={item.id}
    className={`grid-item${item.id}`}
    style={{
      gridColumn: item.gridColumn,
      gridRowStart: item.gridRowStart,
      gridRowEnd: item.gridRowEnd,
      backgroundImage: item.type === "image" ? `url("${item.source}")` : "none",

    }}
  >
    {item.type === "image" && (
      <img src={item.source} alt="" />
    )}

    {item.type === "skill" && (
      <div className="geoint-skills-container">
        <div className="skills1">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      </div>
    )}
  </div>
))}
      </div>
    </div>
  );
};

export default GISSection;

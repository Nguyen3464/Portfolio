import React from "react";
import army from "./Assets/army.png"
// import gis1 from './Assets/gis1.jpeg'
// import gis2 from './Assets/gis2.jpeg'
// import gis3 from './Assets/gis3.jpeg'
// import gis4 from './Assets/gis4.png'

// const GISData = [
//   { id: 1, type: "image", source: gis1, gridColumn: 1, gridRowStart: 1, gridRowEnd: 6 },
//   { id: 2, type: "image", source: gis2, gridColumn: 2, gridRowStart: 1, gridRowEnd: 4 },
//   { id: 3, type: "image", source: gis3, gridColumn: 2, gridRowStart: 4, gridRowEnd: 6 },
//   { id: 4, type: "image", source: gis4, gridColumn: 3, gridRowStart: 4, gridRowEnd: 6 },
//   { id: 5, type: "skill", title: "Analytical Thinking", content: "Developed process and analyzed complex geospatial data..." },
//   { id: 6, type: "skill", title: "Requirement Gathering and User-Centric Focus", content: "Engaged in collaborative meetings with military personnel..." },
//   { id: 7, type: "skill", title: "Data Handling and Database Knowledge", content: "Contributed in integration of diverse datasets from various sources..." },
//   { id: 8, type: "skill", title: "Communication for Code Documentation", content: "Communicated analysis methodologies in written reports..." },
//   { id: 9, type: "skill", title: "Agile Project Management", content: "Responded proactively to changing requirements and emerging priorities..." },
// ];

const GISSection = () => {
  return (
    <>
      <div className="geoint">
        <h1>Geospatial Intelligence Imagery Analyst</h1>
        <div className="army">
          <img classname="army-image" src={army} alt="" />
        </div>
      </div>
      <div className="geoint-skills-container">
        <div className="skills1">
          <h3>Analytical Thinking</h3>
          <p>
            Developed process and analyzed complex geospatial data. Extracted
            meaningful "patterns of life" to support decision-making operations.
            Conducted fusion between adjacent intelligence disciplines to
            integrate domain-specific knowledge into the analytical processes.
            Produced models based on interdisciplinary insights.
          </p>
        </div>
        <div className="skills1">
          <h3>Requirement Gathering and User-Centric Focus</h3>
          <p>
            Engaged in collaborative meetings with military personnel, officers,
            and decision-makers to understand their information needs. Led
            requirement gathering sessions for geospatial projects, ensuring
            alignment with end-user and operational objectives. Liaison between
            technical teams and end-users, to maintain comprehension between
            chain of command
          </p>
        </div>
        <div className="skills1">
          <h3>Data Handling and Database Knowledge</h3>
          <p>
            Contributed in integration of diverse datasets from various sources,
            including satellite imagery, aerial photographs, and ground-based
            sensor data. Managed large volume datasets to derive actionable
            intelligence for producing products
          </p>
        </div>

        <div className="skills1">
          <h3>Communication for Code Documentation</h3>
          <p>
            Communicated analysis methodologies in written reports. Conducted in
            AAR "After Action Reviews" with analysts and commanders to ensure
            reporting quality and adherence to standards and procedures.
            Provided constructive feedback and suggestions for improvements,
            fostering a collaborative and communicative AAR environment.
          </p>
        </div>
        <div className="skills1">
          <h3>Agile Project Management</h3>
          <p>
            Responded proactively to changing requirements and emerging
            priorities by adjusting the project backlog, and production goals.
            Held daily intelligence reviews to gather feedback on progress,
            changes to environmental conditions; In order to ensure
            adaptability, and accuracy in preparation of project delivery.
            Applied a flexible mindset, accommodating shifts in focus on time
            constraints based on the evolving needs of PIR "Priority Information
            Requests".
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item1"></div>
        <div className="grid-item2"></div>
        <div className="grid-item3"></div>
        <div className="grid-item4"></div>
      </div>
    </>
//     <div className="geoint">
//       <div className="grid-container">
//       {GISData.map((item) => (
//   <div
//     key={item.id}
//     className={`grid-item${item.id}`}
//     style={{
//       gridColumn: item.gridColumn,
//       gridRowStart: item.gridRowStart,
//       gridRowEnd: item.gridRowEnd,
//       backgroundImage: item.type === "image" ? `url("${item.source}")` : "none",

//     }}
//   >
//     {item.type === "image" && (
//       <img src={item.source} alt="" />
//     )}

//     {item.type === "skill" && (
//       <div className="geoint-skills-container">
//         <div className="skills1">
//           <h3>{item.title}</h3>
//           <p>{item.content}</p>
//         </div>
//       </div>
//     )}
//   </div>
// ))}
//       </div>
//     </div>
  );
};

export default GISSection;

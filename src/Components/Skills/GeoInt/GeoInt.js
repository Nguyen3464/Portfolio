import React from "react";
import army from "./Assets/army.png";
// import gis1 from './Assets/gis1.jpeg'
// import gis2 from './Assets/gis2.jpeg'
// import gis3 from './Assets/gis3.jpeg'
// import gis4 from './Assets/gis4.png'

const GISSection = () => {
  return (
    <>
      <div className="geoint">
        <h1>Geospatial Intelligence Imagery Analyst</h1>
        <div className="army">
          <img classname="army-image" src={army} alt="" />
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item1"></div>
        <div className="grid-item2">
          <div className="skills1">
            <h3>Analytical Thinking</h3>
            <p>
              Developed process and analyzed complex geospatial data. Extracted
              meaningful "patterns of life" to support decision-making
              operations. Conducted fusion between adjacent intelligence
              disciplines to integrate domain-specific knowledge into the
              analytical processes. Produced models based on interdisciplinary
              insights.
            </p>
          </div>
        </div>
        <div className="grid-item3"></div>
        <div className="grid-item4">
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
        </div>
         <div className="grid-item5"></div>
        
        <div className="grid-item6">
        <div className="skills1">
          <h3>Data Handling and Database Knowledge</h3>
          <p>
            Contributed in integration of diverse datasets from various sources,
            including satellite imagery, aerial photographs, and ground-based
            sensor data. Managed large volume datasets to derive actionable
            intelligence for producing products
          </p>
        </div>
        </div>
        <div className="grid-item7"></div>
        <div className="grid-item8">
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
        </div>
        <div className="grid-item9"></div>
        
        <div className="grid-item10">
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
        <div className="grid-item11"></div>
      </div>
    </>
  );
};

export default GISSection;

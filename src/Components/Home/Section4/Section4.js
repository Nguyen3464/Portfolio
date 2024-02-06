// import React from 'react'
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Section4 = () => {
//     const [sectionRef, sectionInView] = useInView({
//         triggerOnce: true,
//       });
    
//       const AnimateOnInView = ({ inView, children }) => {
//         return inView ? children : null;
//       };
    
//       const lineItems = [
//         {
//           title: "Wireframing and Prototyping",
//           content:"Create visual representations of page layouts and content placement through wireframes. Firm understanding of UX/UI design principles, knowledge of information architecture.",
//           transitionDuration: 1,
//         },
//         {
//           title: "Design Mockups",
//           content:
//           "Design the visual elements of the website, including colors, typography, images, and branding elements. Collaboration with designers to maintain congruency of technical implementation and alignments with the design vision.",
//           transitionDuration: 0.8,
//         },
//         {
//           title: "Content Creation and Gathering",
//           content:
//           "Develop or gather content such as text, images, videos, and multimedia elements. Conduct content strategy research to refine both the user experience and technical aspects of the design.",
//           transitionDuration: 1.2,
//         },
//       ];
//   return (
//     <>
//         <section className='header'></section>
//         <section className="section3" ref={sectionRef}>
//         <div className="wood-box">
            
//         </div>
//         <div className="list-container">
//           {lineItems.map((item, index) => (
//             <AnimateOnInView key={index} inView={sectionInView}>
//               <motion.div
//                 initial={{ opacity: 0, x: -40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: item.transitionDuration }}
//                 className={`list-item motion-div-${index + 1}`}
//               >
//                 <h3>{item.title}</h3>
//                 <p>{item.content}</p>
//               </motion.div>
//             </AnimateOnInView>
//           ))}
//         </div>
//         <div className="wood-box">
            
//         </div>
//       </section>            
//     </>
//   )
// }
// export default Section4
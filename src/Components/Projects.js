// import React from 'react';
// import ProjectBox from './ProjectBox';
// import NewsletterImage from '../images/NewsletterImage.png';
// import RogfreeImage from '../images/RogfreeImage.png';
// import TindogImage from '../images/TindogImage.png';
// import WigglesImage from '../images/WigglesImage.png';

// const Projects = () => {
//   return (
//     <div>
//       <h1 className='projectHeading'>My <b>Projects</b></h1>
//       <div className='project'>
//         <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
//         <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
//         <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
//         <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
//       </div>

//     </div>
//   )
// }

// export default Projects

import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h3 className="title">Projects</h3>
      <div className="project-container">

        {/* Project 2 */}
        <div className="project">
          <div className="project-details">
            <div className="year"><i className='bx bxs-calendar'></i> 2023 – Present</div>
            <h3>Empowering Communication Through Gesture Recognition</h3>
            <p>
              The Sign Language Recognition System is a groundbreaking initiative aimed at facilitating communication for those with hearing impairments. By accurately translating sign language into text or speech, using advanced computer vision and machine learning methods, it empowers the deaf and hard-of-hearing community, fostering seamless interaction across different settings.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project">
          <div className="project-details">
            <div className="year"><i className='bx bxs-calendar'></i> 2023 - Present</div>
            <h3>Smart E-Market Price Comparator</h3>
            <p>
              The Online E-Markets Price Comparison System is a sophisticated solution aimed at simplifying and enhancing the online shopping experience for consumers. This innovative system leverages data from multiple e-commerce platforms to provide users with a comprehensive and real-time comparison of product prices, enabling them to make informed purchasing decisions. Through intuitive interfaces and advanced algorithms, this system facilitates cost-effective shopping and promotes transparency in the online retail landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

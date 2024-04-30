import React from 'react';

const Education = () => {
  return (
    <div className="Education">

      <div className="section">
        <h2 className="section-heading">UG Degree</h2>
        <div className="section-content">
          <p>
            Currently pursuing my UG in the Bachelor of Engineering in Computer Science and Engineering
            at Karpagam Institute of Technology with a CGPA of 8.02 up to 4th semester.
          </p>
          <p className="year"><i className='bx bxs-calendar'></i> 2021 - 2025</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-heading">HSC</h2>
        <div className="section-content">
          <p>
            Completed Higher Secondary Education at Corporation Girls Higher Secondary School, Coimbatore,
            with a percentage of 91%.
          </p>
          <p className="year"><i className='bx bxs-calendar'></i> 2020 - 2021</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-heading">SSLC</h2>
        <div className="section-content">
          <p>
            Completed SSLC Education at Milton Matriculation School, Coimbatore, with a percentage of 92%.
          </p>
          <p className="year"><i className='bx bxs-calendar'></i> 2018 - 2019</p>
        </div>
      </div>
    </div>
  );
};

export default Education;

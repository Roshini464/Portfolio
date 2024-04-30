import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Roshini</b> and I am from TamilNadu, India.
            I'm a pre-final year college student pursuing <b>B.E in CSE</b>. <br/><br/>
            I am likely to work in cloud based projects and love to explore various services that are available in the stream of cloud computing and DevOps<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            And when it comes to coding, I like to code in languages like java and python and currently learning mern stack for development.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      
        {/* <Skills skill='Java' />
        <Skills skill='Python' />
        <Skills skill='Programming' />
        <Skills skill='Cloud Computing' />
        <Skills skill='HTML' /> 
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>  */}
        
  
    </>
  )
}

export default About

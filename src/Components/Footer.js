import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/Roshini464" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/roshini16/" target='_blank'><FaLinkedin/></a>
        <a href='roshinivinayagamoorthi@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/21csa49/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer
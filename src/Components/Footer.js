import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/Roshini464"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/roshini16/"><FaLinkedin/></a>
        <a href='roshinivinayagamoorthi@gmail.com'><GrMail/></a>
        <a href="https://leetcode.com/u/21csa49/"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer

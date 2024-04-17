import React from "react";
import "../Assets/Styles/About.css";
import img from "../Assets/Images/me.JPG";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function () {
  return (
    <div className="about">
      <div className="box">
      <div className="col">
        <p>Hello I'm</p>
        <h1>SHRUTIKA</h1>
        <h1>SUBBA</h1>
        </div>
        <div className="para">
        <p>A IT Student who has a passion for frontend designing. </p>
       
        <p>
          I have completed my 2months training of Web Development in Bardali
          Creations.{" "}
        </p>
        </div>
        
       
        <div className="findme">
        <p>Find Me on</p>
        </div>
        <div className="findmee">
        <p>
          <FaFacebook /> <FaTwitterSquare />
          <RiInstagramFill />
        </p>
        </div>
        
        <div className="btn">
          <button type="button">Contact Me</button>
        </div>
      </div>
      <div className="image">
        <img src={img}></img>
        </div>
    </div>
  );
}

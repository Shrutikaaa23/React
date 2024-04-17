import React from 'react'
import '../Assets/Styles/Contact.css';
import contact from "../Assets/Images/contact.png";

export default function Contact() {
  return (
  
      <div className="main">
            <div className="headingg">
                <h1>Contact Us</h1>
            </div>
            <div className="container2">
                <div className="details">
                    <label>Name</label><input type="text" name="fname" placeholder="Enter your name" ></input>
                    <label>Email</label> <input type="text"  name="emails" placeholder="Enter your email"></input>
                    <label>Subject</label><textarea class="textarea" name="subj">Enter text here...</textarea>
             </div>
            
                <div className="photo">
                <img src={contact}></img>
                </div>
            </div>
            <div className="send" >
                <button type="submit" >Send Message</button>
              
              
            </div>
            </div>
            
   
  )
}

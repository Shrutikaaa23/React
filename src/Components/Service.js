import React from 'react'
import"../Assets/Styles/Service.css";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

export default function Service() {
  return (
    <div className='whole'>
      
        <div className="heading">
            
            <h1>OUR SERVICES</h1>
            </div>
    <div className="first" >
      <div className="box1">
      <HiOutlineComputerDesktop />
        <h1>GRAPHIC DESIGNING</h1>
        <p>our services are logo design, Broucher design, Web banners, Poster Design, Flyer design, Postcard design</p>
        </div>
        <div className="box2">
            <h1>WEB DEVELOPMENT</h1>
            <p>We focus on quality and cost-effective solutions</p>
        </div>
        <div className="box3">
          <h1>PRODUCTDESIGN</h1>
            <p>It include standardization, mass customization, modular design and robust design</p>
        </div>
    </div>

        <div className="second">
        <div className="box4">
           <h1>BLOG WRITING</h1>
            <p>We write expert content to increase your traffic</p>
        </div>
        <div className="box5">
          <h1>DIGITAL MARKETING</h1>
           <p>It include SEO, email marketing, Content marketing</p>
        </div>
        <div className="box6">
          <h1>PHOTOGRAPHY</h1>
            <p>It include passport photos, photoshoot, video production, Outdoor photography</p>
        </div>
        </div>

    </div>
  )
}

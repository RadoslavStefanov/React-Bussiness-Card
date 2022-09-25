import React from "react"

export default function About() {
    return (
        <div>
            <img id="userImage" src="../images/yazakiImageMe.png"/>
            <p className="userName">R. Stefanov</p>
            <p className="userRole">Full-Stack Developer</p>
            <p className="userSite">https://github.com/RadoslavStefanov</p>
            
            <button className="emailBtn">
                <img src="../images/envelope-solid.svg"/>
                <p>Email</p>
            </button>
               
            <button className="linkedInBtn">
                <img src="../images/linkedin.svg"/>
                <p>LinkedIn</p>
            </button>
            
            <p className="aboutHeader">About</p>
            <p className="aboutText">I am a C# Full-Stack developer with a particular interest in growing my skills daily. I try to keep up with security and best practices, and am always looking for new way to better myself.</p>
        </div>
    )
}
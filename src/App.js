import React, { useState, useEffect } from "react";
import "./App.css";
import NanbanLogo from "../src/Assets/nanban_logo.jpeg";
import LeoraLogo from "../src/Assets/leora_logo.jpeg";
import ResponsiveLogo from "../src/Assets/responsive_logo.jpeg";
import AveonLogo from "../src/Assets/aveon_logo.jpeg";
import SoriceLogo from "../src/Assets/sorice_logo.jpeg";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".blur-animation");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("text-blur");
            entry.target.classList.add("text-clear");
          } else {
            entry.target.classList.remove("text-clear");
            entry.target.classList.add("text-blur");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="gradient-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g4"></div>
      </div>
      <div className="sticky-wrapper">
        <Navbar />
      </div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <div className="header_container">
        <a href="#scroll_top">
          <h1>Jaga</h1>
        </a>

        <div className="header_svglogo">
          <div className="header_svglogo_tags">
            <span>
              <a href="#skills">Skills</a>
            </span>
            <span>
              <a href="#experience">Experience</a>
            </span>
            <span>
              <a href="#projects">Projects</a>
            </span>
            <span>
              <a href="#interests">Interests</a>
            </span>
          </div>

          <div className="resume">
            <a href="https://drive.google.com">Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="main">
      <div className="body_about" id="scroll_top">
        <h1>Jagadheesh M</h1>
        <p>Backend Developer</p>
      </div>

      <div className="body_contact">
        <div className="body_contact_buttons">
          <div>
            <a href="mailto:jagadheesh6@gmail.com">
              <button>Contact Me</button>
            </a>
          </div>

          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/"
            >
              <button>Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  const [isOpen, setIsOpen] = useState("DevOps");
  return (
    <div className="body_container">
      <div id="skills" className="body_about section">
        <h1>Skills</h1>
        <p>Tools and technologies I enjoy working with</p>
      </div>
      <div className="body_skill">
        <div className="body_skill_check">
          <button
            className={isOpen === "DevOps" ? "active" : "inactive"}
            onClick={() => setIsOpen("DevOps")}
          >
            DevOps
          </button>
          <button
            className={isOpen === "BackEnd" ? "active" : "inactive"}
            onClick={() => setIsOpen("BackEnd")}
          >
            BackEnd
          </button>
          <button
            className={isOpen === "Others" ? "active" : "inactive"}
            onClick={() => setIsOpen("Others")}
          >
            Others
          </button>
        </div>
        <div className="blur-animation text-blur">
          {isOpen === "DevOps" && (
            <div className="body_skill_list">
              <div>
                {/* Insert Logo here */}
                <p>Docker</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>Jenkins</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>Nginx</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>Linux</p>
              </div>
            </div>
          )}
          {isOpen === "BackEnd" && (
            <div className="body_skill_list">
              <div>
                {/* Insert Logo here */}
                <p>NextJS</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>ExpressJS</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>NestJS</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>Apollo GraphQL</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>MongoDB</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>Redis</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>PostgreSQL</p>
              </div>
            </div>
          )}
          {isOpen === "Others" && (
            <div className="body_skill_list">
              <div>
                {/* Insert Logo here */}
                <p>GitHub</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>Jira</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>Discord</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>Notion</p>
              </div>
              <div>
                {/* Insert Logo here */}
                <p>Postman</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div id="experience" className="body_workexperience section">
        <h1>Work Experience</h1>
        <div className="body_workexp_grid">
          <div className="sorice blur-animation text-blur">
            <img alt="Sorice Logo" src={SoriceLogo} width={50} />
            <h3>Sorice Solutions · Full-time</h3>
            <p>Backend Developer</p>
            <p>Feb 2023 - Present · 2 yrs</p>
          </div>
          <div className="aveon blur-animation text-blur">
            <img alt="Aveon Logo" src={AveonLogo} width={50} />
            <h3>AVEON Infotech Pvt. Ltd. · Full-time</h3>
            <p>Senior Backend Developer</p>
            <p>Apr 2022 - Jan 2023 · 10 mos</p>
          </div>
          <div className="iresponsive blur-animation text-blur">
            <img alt="iResponsive Logo" src={ResponsiveLogo} width={50} />
            <h3>iResponsive Solutions · Full-time</h3>
            <p>Senior Backend Developer</p>
            <p>Apr 2022 - Jan 2023 · 10 mos</p>
          </div>
          <div className="leora blur-animation text-blur">
            <img alt="Leora Logo" src={LeoraLogo} width={50} />
            <h3>Leora Solutions LLP · Full-time</h3>
            <p>Back End Developer</p>
            <p>Jul 2020 - Apr 2022 · 1 yr 10 mos</p>
          </div>
          <div className="nanban blur-animation text-blur">
            <img alt="Nanban Logo" src={NanbanLogo} width={50} />
            <h3>Nanban Tech Ventures · Internship</h3>
            <p>Web Developer</p>
            <p>Apr 2020 - Dec 2020 · 9 mos</p>
          </div>
        </div>
      </div>
      <div id="projects" className="body_projects section">
        {/* Projects */}
        <h1>Projects</h1>
      </div>
      <div id="interests" className="body_interests section">
        <h1>Interests</h1>
        {/* Interests */}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer_container">
      <h4>Made by Yash Vardhan</h4>
    </div>
  );
}

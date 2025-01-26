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
        threshold: 0.1, // Adjust this value as needed
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
        <a href="/">
          <h1>Jaga</h1>
        </a>

        <div className="header_svglogo">
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
          <span className="resume">
            <a href="https://drive.google.com">Resume</a>
          </span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="main">
      <div className="body_about">
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

        <div className="body_contact_all">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jaga-live/"
            className="body_contact_linkedin"
          >
            <div>
              <svg
                fill="blue"
                width="40px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
              >
                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
              </svg>
            </div>
          </a>
          <a href="mailto:jagadheesh6@gmail.com" className="body_contact_gmail">
            <div>
              <svg width="40px" height="40px" viewBox="0 0 32 32">
                <path
                  d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                  fill="#EA4335"
                />
                <path
                  d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                  fill="#FBBC05"
                />
                <path
                  d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                  fill="#34A853"
                />
                <path
                  d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                  fill="#C5221F"
                />
                <path
                  d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                  fill="#C5221F"
                />
                <path
                  d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                  fill="#C5221F"
                />
                <path
                  d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                  fill="#4285F4"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function Body() {
  const [isOpen, setIsOpen] = useState("DevOps");
  return (
    <div className="body_container ">
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

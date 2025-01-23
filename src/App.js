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
    <div className="main">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header_container">
      <h1>JAGA</h1>
      <div className="header_svglogo">
        <span>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jaga-live/"
          >
            <svg
              fill="#000000"
              width="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
            </svg>
          </a>
        </span>
        <span>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/jaga-live"
          >
            <svg
              fill="#000000"
              width="20px"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              class="jam jam-github"
            >
              <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z" />
            </svg>
          </a>
        </span>
      </div>
      <div>
        <a href="https://drive.google.com">Resume</a>
      </div>
    </div>
  );
}

function Body() {
  const [isOpen, setIsOpen] = useState("DevOps");
  return (
    <div className="body_container">
      <div className="body_about">
        <h1>Jagadheesh M</h1>
        <p>
          Backend Developer with 4 years of hands-on experience in Node.js,
          NestJS, and TypeScript, specializing in building scalable and
          maintainable backend systems with a strong emphasis on clean code and
          best practices.
        </p>
      </div>
      <div className="body_workexperience">
        <h2>Work Experience</h2>
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
      <div className="body_about">
        <h2>Skill List</h2>
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
                {/* Logo */}
                {/* Name */}
                {/* Description */}
              </div>
              <div>
                {/* Logo */}
                {/* Name */}
                {/* Description */}
              </div>
              <div>
                {/* Logo */}
                {/* Name */}
                {/* Description */}
              </div>
            </div>
          )}
          {isOpen === "BackEnd" && (
            <div className="body_skill_list">
              <div>
                {/* Logo */}
                {/* Name */}
                {/* Description */}
              </div>
              <div>
                {/* Logo */}
                {/* Name */}
                {/* Description */}
              </div>
              <div>
                {/* Logo */}
                {/* Name */}
                {/* Description */}
              </div>
            </div>
          )}
          {isOpen === "Others" && (
            <div className="body_skill_list">
              <div>
                {/* Logo */}
                {/* Name */}
                {/* Description */}
              </div>
              <div>
                {/* Logo */}
                {/* Name */}
                {/* Description */}
              </div>
              <div>
                {/* Logo */}
                {/* Name */}
                {/* Description */}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contacts */}
    </div>
  );
}

function Footer() {
  return (
    <div className="footer_container">
      <h4>Copywrite 2025 Jaga</h4>
    </div>
  );
}

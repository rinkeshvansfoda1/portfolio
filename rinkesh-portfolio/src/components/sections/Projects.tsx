import React, { useState } from "react";
import ecommerceImg from "../../assets/Images/E_Commerce_Website.jpg";
import twitterCLIImg from "../../assets/Images/Twitter_CLI_Application.jpg";
import emiCalculationImg from "../../assets/Images/EMI_Calculation_Tool.avif";
import spamdetectionImg from "../../assets/Images/SPAM_Detection_API.jpg";
import streamtorrentImg from "../../assets/Images/StreamTorrent.png";
import voicebasedemailImg from "../../assets/Images/Voice_Based_Email.avif";
import voicenewsassistantImg from "../../assets/Images/Voice_News_Assistant.png";

type Category ="all"|"web"|"backend"|"ui";

const Projects: React.FC = () => {

  const [activeFilter,setActiveFilter]=useState<Category>("all");
  const Projects=[
    {id:1,category:"web"},
    {id:2,category:"backend"},
    {id:3,category:"backend"},
    {id:4,category:"backend"},
    {id:5,category:"backend"},
    {id:6,category:"web"},
    {id:7,category:"backend"}
  ];

  const isVisible=(category:Category)=>{
    return activeFilter==="all"||activeFilter===category;
  }

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          Projects
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Some things I&apos;ve built recently. Each project represents unique
          challenges and solutions.
        </p>
      </div>

      {/* Filter buttons (static for now) */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {[
          {label:"All",value:"all"},
          {label:"Web",value:"web"},
          {label:"Backend",value:"backend"},
          {label:"UI",value:"ui"},
        ].map((filter)=>(
          <button
            key={filter.value}
            className={`px-4 py-2 rounded-full border border-border hover:bg-primary hover:text-white transition-colors duration-300 ${
              activeFilter===filter.value
              ? "bg-primary text-white"
              : "bg-background text-text-muted hover:text-primary"}`}
              onClick={()=>setActiveFilter(filter.value as Category)}
              >
                {filter.label}
          </button>
        ))
        }
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        {isVisible("web") && (
          <div
            className="project-card bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="overflow-hidden">
              <img
                // src="https://images.unsplash.com/photo-1557821552-17105176677c"
                src={ecommerceImg}
                alt="Django E-Commerce Website"
                className="w-full h-48 object-cover project-image transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                E-Commerce Website
              </h3>

              <p className="text-text-muted mb-4">
                E-Commerce web application built using Python Django framework with user
                authentication, product catalog management, shopping cart functionality,
                and order management system.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Python
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Django
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  HTML
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  CSS
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  SQLite
                </span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/rinkeshvansfoda1/E-CommerceWebsite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-opacity-80 transition-colors duration-300 font-medium"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Project 2 */}
        {isVisible("backend") && (
          <div
            className="project-card bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="overflow-hidden">
              <img
                src={twitterCLIImg}
                alt="Twitter CLI Application"
                className="w-full h-48 object-cover project-image transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Twitter CLI Application
              </h3>

              <p className="text-text-muted mb-4">
                Command-line based Twitter-like application developed using pure Python,
                supporting user authentication, tweeting, following users, viewing feeds,
                and basic data persistence.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Python
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  CLI
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  OOP
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  File Handling
                </span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/rinkeshvansfoda1/Twitter_CLI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-opacity-80 transition-colors duration-300 font-medium"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Project 3 */}
        {isVisible("backend") && (
          <div
            className="project-card bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="overflow-hidden">
              <img
                src={streamtorrentImg}
                alt="Stream Torrent Python Utility"
                className="w-full h-48 object-cover project-image transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Stream Torrent
              </h3>

              <p className="text-text-muted mb-4">
                Python-based backend utility that extracts and streams torrent magnet URLs
                directly, eliminating ad-heavy websites while enabling secure connections
                using VPN integration for restricted or blocked sources.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Python
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Web Scraping
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Networking
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  VPN Integration
                </span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/rinkeshvansfoda1/Stream_Torrent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-opacity-80 transition-colors duration-300 font-medium"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Project 4 */}
        {isVisible("backend") && (
          <div
            className="project-card bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="overflow-hidden">
              <img
                src={spamdetectionImg}
                alt="Spam Detection API"
                className="w-full h-48 object-cover project-image transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Spam Detection REST API
              </h3>

              <p className="text-text-muted mb-4">
                Python-based REST API for detecting spam entries using mobile numbers,
                names, and user-provided data, enabling validation and classification
                through structured backend logic.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Python
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  REST API
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Backend Development
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Data Validation
                </span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/rinkeshvansfoda1/Spam_API"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-opacity-80 transition-colors duration-300 font-medium"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Project 5 */}
        {isVisible("backend") && (
          <div
            className="project-card bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="overflow-hidden">
              <img
                src={voicenewsassistantImg}
                alt="Voice News Assistant"
                className="w-full h-48 object-cover project-image transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Voice-Based News Feed Assistant
              </h3>

              <p className="text-text-muted mb-4">
                Python-based voice-enabled news assistant that fetches real-time headlines
                from multiple news sources such as Economics Times, processes RSS feeds,
                and delivers spoken responses using text-to-speech and speech recognition.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Python
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Speech Recognition
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Text-to-Speech (pyttsx3)
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  RSS Feed Parsing
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  SAPI5
                </span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/rinkeshvansfoda1/News_Feed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-opacity-80 transition-colors duration-300 font-medium"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Project 6 */}
        {isVisible("web") && (
          <div
            className="project-card bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="overflow-hidden">
              <img
                src={emiCalculationImg}
                alt="EMI Calculator Application"
                className="w-full h-48 object-cover project-image transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                EMI Calculation Tool
              </h3>

              <p className="text-text-muted mb-4">
                Web-based EMI calculation utility developed using PHP that computes monthly
                installments based on loan amount, interest rate, and tenure, following
                standard financial formulas similar to popular loan comparison platforms.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  PHP
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Financial Calculations
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Backend Logic
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Form Handling
                </span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/rinkeshvansfoda1/EMI_Calculation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-opacity-80 transition-colors duration-300 font-medium"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Project 7 */}
        {isVisible("backend") &&(
          <div
            className="project-card bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="overflow-hidden">
              <img
                src={voicebasedemailImg}
                alt="Voice Based Email Reader"
                className="w-full h-48 object-cover project-image transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Voice-Based Email Reader
              </h3>

              <p className="text-text-muted mb-4">
                Python-based voice-enabled email reader that securely fetches and reads
                recent emails aloud using text-to-speech, allowing users to access inbox
                content without relying on third-party email clients or external tools.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Python
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Email Automation
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Text-to-Speech (pyttsx3)
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  SAPI5
                </span>
                <span className="px-3 py-1 bg-background rounded-full text-sm text-text-muted">
                  Open Source
                </span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/rinkeshvansfoda1/Emails_Reader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-opacity-80 transition-colors duration-300 font-medium"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;

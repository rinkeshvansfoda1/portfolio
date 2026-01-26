import React from "react";
import hero_img from "../../assets/Images/hero_img.jpg"

interface HeroProps {
  onNavClick: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="animate-slide-in-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 mb-6">
            <span className="mr-2">👋</span>
            <span className="text-text-muted">Hi, I'm</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4">
            Rinkesh Vansfoda
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            Full Stack Developer
          </h2>

          <p className="text-text-muted text-lg mb-8 max-w-2xl">
            I build exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive. Let&apos;s bring your ideas to
            life with clean code and modern technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => onNavClick("projects")}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => onNavClick("contact")}
              className="border border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/rinkeshvansfoda1"
              className="text-text-muted hover:text-primary transition-colors duration-300 text-2xl"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/rinkesh-vansfoda/"
              className="text-text-muted hover:text-primary transition-colors duration-300 text-2xl"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="mailto:rinkesh.vansfoda@gmail.com"
              className="text-text-muted hover:text-primary transition-colors duration-300 text-2xl"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative animate-slide-in-right">
          <div className="gradient-ring w-80 h-80 mx-auto relative">
            <img
              // src="https://picsum.photos/300?random=1"
              src={hero_img}
              alt="Rinkesh Vansfoda - Full Stack Developer"
              className="w-full h-full rounded-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Floating chips */}
          <div className="absolute -top-4 left-4 animate-float">
            <div className="bg-surface px-4 py-2 rounded-full border border-border flex items-center space-x-2">
              <span>⚡</span>
              <span>React</span>
            </div>
          </div>

          <div
            className="absolute top-1/4 -right-4 animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-surface px-4 py-2 rounded-full border border-border flex items-center space-x-2">
              <span>🐍</span>
              <span>Python</span>
            </div>
          </div>

          <div
            className="absolute bottom-1/4 -left-4 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="bg-surface px-4 py-2 rounded-full border border-border flex items-center space-x-2">
              <span>🌐</span>
              <span>.NET</span>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

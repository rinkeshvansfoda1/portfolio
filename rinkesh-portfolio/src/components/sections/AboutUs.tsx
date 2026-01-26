import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-12 animate-slide-up">
        {/* About Me */}
        <div className="animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-text-muted">
            <p>
              {/* I&apos;m a passionate Full Stack Developer with 5+ years of
              experience building web applications using modern technologies. I
              specialize in creating scalable, maintainable, and user-friendly
              solutions that solve real-world problems. */}
              I&apos;m a Software Developer with nearly 2 years of professional
              experience specializing in full-stack application development and
              automation-driven solutions. Currently working as a Junior
              Software Engineer, I also collaborate on freelance projects where
              I build scalable, efficient software to solve real-world business
              problems.
            </p>
            <p>
              {/* My approach combines technical expertise with a keen eye for
              design, ensuring that every project not only functions flawlessly
              but also delivers an exceptional user experience. */}
              I work across technologies including .NET, ASP.NET Core, SQL
              Server, React, Python, Flask, and Microsoft Dynamics 365 CRM,
              delivering clean, maintainable, and performance-focused
              applications. I enjoy turning complex requirements into practical
              solutions and continuously improving my skills while contributing
              to impactful projects.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-primary">📍</span>
              <span>Surat, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-primary">💼</span>
              <span>Full Stack Developer</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-primary">🎯</span>
              <span>Web Apps, APIs, Cloud Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

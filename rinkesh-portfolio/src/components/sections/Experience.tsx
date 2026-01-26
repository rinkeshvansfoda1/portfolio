import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
        Experience
      </h2>

      <div className="relative">
        {/* Central Vertical Line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>

        <div className="space-y-12">

          {/* 1. Junior Software Engineer (Merged Role) - Left */}
          <div className="flex flex-col lg:flex-row items-center w-full group">
            <div className="w-full lg:w-1/2 lg:pr-12">
              <div
                className="bg-background p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">
                    Junior Software Engineer
                  </h3>
                  <span className="text-text-muted text-sm">
                    Feb 2024 – Present
                  </span>
                </div>

                <p className="text-primary mb-1">
                  Guj Info Petro Ltd, Gandhinagar
                </p>

                <p className="text-text-muted text-sm italic mb-3">
                  Started as Graduate Engineer Trainee (Feb 2024 – Feb 2025), promoted based on performance.
                </p>

                <ul className="text-text-muted space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Developed and scaled government-grade web applications using <b>.NET Core</b>, <b>ASP.NET</b>, and <b>SQL Server</b>, supporting 5,000+ users.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Architected a school selection system for 300+ institutions using <b>jQuery</b>, improving operational efficiency by 45%.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Built <b>SSRS-based reporting APIs</b> generating PDF, Excel, and Word outputs, reducing manual reporting effort by 60%.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Optimized high-traffic <b>SQL Server</b> queries and CMS modules, cutting response times by up to 50%.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-border border-4 border-background group-hover:bg-primary transition-colors duration-300"></div>
            <div className="w-full lg:w-1/2"></div>
          </div>

          {/* 2. Software Automation (Freelance) - Right */}
          <div className="flex flex-col lg:flex-row items-center w-full group">
            <div className="w-full lg:w-1/2"></div>

            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-border border-4 border-background group-hover:bg-primary transition-colors duration-300"></div>

            <div className="w-full lg:w-1/2 lg:pl-12">
              <div
                className="bg-background p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">
                    Software Automation (Freelancer)
                  </h3>
                  <span className="text-text-muted text-sm">
                    Sept 2023 – Present
                  </span>
                </div>

                <p className="text-primary mb-3">Independent Contractor</p>

                <ul className="text-text-muted space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Engineered a <b>ChatGPT-integrated Chrome Extension</b> to enhance communication workflows, improving productivity by 25%.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Built <b>Python-based web scraping solutions</b> using BeautifulSoup to extract real-time data from multiple sources with 99% accuracy.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Developed a <b>Flask web application</b> to automate data processing and export structured results to Excel using Pandas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Implemented <b>change-detection scripts</b> with alert mechanisms, reducing manual monitoring effort by 70%.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Automated cloud-synced workflows with OneDrive integration, cutting overall manual effort by 60%.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Backend Developer Intern - Left */}
          <div className="flex flex-col lg:flex-row items-center w-full group">
            <div className="w-full lg:w-1/2 lg:pr-12">
              <div
                className="bg-background p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">
                    Backend Developer Intern
                  </h3>
                  <span className="text-text-muted text-sm">
                    Nov 2023 – Jan 2024
                  </span>
                </div>

                <p className="text-primary mb-3">
                  Specstem Digital Pvt. Ltd.
                </p>

                <ul className="text-text-muted space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Built a scalable <b>Job Tracker System</b> using <b>TypeScript</b>, aggregating listings from 5+ platforms.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Designed backend logic to filter 1,000+ daily job posts by role, location, and tech stack.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Managed user preferences with <b>MySQL</b> and implemented notifications, boosting engagement by 35%.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Optimized database queries and APIs, reducing average response time by 40%.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-border border-4 border-background group-hover:bg-primary transition-colors duration-300"></div>
            <div className="w-full lg:w-1/2"></div>
          </div>

          {/* 4. Dynamics 365 Intern - Right */}
          <div className="flex flex-col lg:flex-row items-center w-full group">
            <div className="w-full lg:w-1/2"></div>

            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-border border-4 border-background group-hover:bg-primary transition-colors duration-300"></div>

            <div className="w-full lg:w-1/2 lg:pl-12">
              <div
                className="bg-background p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">
                    Dynamics 365 & PowerApps Intern
                  </h3>
                  <span className="text-text-muted text-sm">
                    Feb 2023 – Jun 2023
                  </span>
                </div>

                <p className="text-primary mb-3">
                  Inkey IT Solutions Pvt. Ltd.
                </p>

                <ul className="text-text-muted space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Developed custom <b>Power Apps</b> and <b>Power Automate</b> flows for internal process automation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Enhanced <b>Dynamics 365 CRM</b> via form customization, entity configuration, and data modeling.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Worked with <b>Dataverse</b>, Canvas Apps, and Model-Driven Apps in real client environments.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;

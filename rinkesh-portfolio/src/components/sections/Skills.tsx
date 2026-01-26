import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          Skills &amp; Expertise
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend */}
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="bg-background p-6 rounded-2xl border border-border h-full">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary bg-opacity-20 flex items-center justify-center">
                <i className="fab fa-react text-primary text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "React", value: 95 },
                { label: "TypeScript", value: 50 },
                { label: "Tailwind CSS", value: 92 },
                { label: "Bootstrap", value: 88 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-text-muted">{item.label}</span>
                    <span className="text-primary">{item.value}%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div
                      className="skill-bar bg-primary rounded-full h-2"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-background p-6 rounded-2xl border border-border h-full">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary bg-opacity-20 flex items-center justify-center">
                <i className="fas fa-server text-secondary text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Python", value: 90 },
                { label: "Django", value: 85 },
                { label: ".NET Core", value: 82 },
                { label: ".NET Framework (ASPX)", value: 80 },
                { label: "REST APIs", value: 95 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-text-muted">{item.label}</span>
                    <span className="text-primary">{item.value}%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div
                      className="skill-bar bg-primary rounded-full h-2"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-background p-6 rounded-2xl border border-border h-full">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-orange-500 bg-opacity-20 flex items-center justify-center">
                <i className="fas fa-tools text-orange-500 text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Tools &amp; Others</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: "Git & GitHub", value: 90 },
                { label: "Visual Studio", value: 95 },
                { label: "Azure DevOps", value: 80 },
                { label: "VS Code", value: 98 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-text-muted">{item.label}</span>
                    <span className="text-primary">{item.value}%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div
                      className="skill-bar bg-primary rounded-full h-2"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Skills;

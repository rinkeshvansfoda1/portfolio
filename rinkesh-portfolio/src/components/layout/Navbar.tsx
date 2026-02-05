import React, { useState } from "react";

interface NavbarProps {
  onNavClick: (id: string) => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "aboutus", label: "AboutMe" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    onNavClick(id);
    setOpen(false);
  };

  const DownLoadResume=()=>{
    const link=document.createElement('a');
    // link.href='../src/assets/Resume/Rinkesh_Vansfoda.pdf';
    link.href = '/Resume/Rinkesh_Vansfoda.pdf'; // absolute path
    link.download='Rinkesh_Vansfoda_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold font-heading">
              <span className="text-text-primary">Rinkesh</span>
              <span className="text-primary">.</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="text-text-muted hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              onClick={()=>DownLoadResume()}
            >
              Download CV
            </button>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setOpen((o) => !o)}
          >
            <i className="fas fa-bars text-xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="text-text-muted hover:text-primary transition-colors duration-300 text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 w-full"
              onClick={()=>DownLoadResume()}
              >
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

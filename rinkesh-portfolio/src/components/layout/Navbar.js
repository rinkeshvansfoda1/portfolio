import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const navItems = [
    { id: "home", label: "Home" },
    { id: "aboutus", label: "AboutMe" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];
const Navbar = ({ onNavClick }) => {
    const [open, setOpen] = useState(false);
    const handleClick = (id) => {
        onNavClick(id);
        setOpen(false);
    };
    const DownLoadResume = () => {
        const link = document.createElement('a');
        link.href = '../src/assets/Resume/Rinkesh_Vansfoda.pdf';
        link.download = 'Rinkesh_Vansfoda_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (_jsx("header", { className: "fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border", children: _jsxs("nav", { className: "container mx-auto px-6 py-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "flex items-center space-x-2", children: _jsxs("h1", { className: "text-2xl font-bold font-heading", children: [_jsx("span", { className: "text-text-primary", children: "Rinkesh" }), _jsx("span", { className: "text-primary", children: "." })] }) }), _jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [navItems.map((item) => (_jsxs("button", { onClick: () => handleClick(item.id), className: "text-text-muted hover:text-primary transition-colors duration-300 relative group", children: [item.label, _jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" })] }, item.id))), _jsx("button", { className: "bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105", onClick: () => DownLoadResume(), children: "Download CV" })] }), _jsx("button", { className: "md:hidden text-text-primary", onClick: () => setOpen((o) => !o), children: _jsx("i", { className: "fas fa-bars text-xl" }) })] }), open && (_jsx("div", { className: "md:hidden mt-4 pb-4 animate-fade-in", children: _jsxs("div", { className: "flex flex-col space-y-4", children: [navItems.map((item) => (_jsx("button", { onClick: () => handleClick(item.id), className: "text-text-muted hover:text-primary transition-colors duration-300 text-left py-2", children: item.label }, item.id))), _jsx("button", { className: "bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 w-full", onClick: () => DownLoadResume(), children: "Download CV" })] }) }))] }) }));
};
export default Navbar;

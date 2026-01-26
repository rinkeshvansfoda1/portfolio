import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../src/components/layout/Navbar";
import Hero from "../src/components/sections/Hero";
import Experience from "../src/components/sections/Experience";
import AboutUs from "../src/components/sections/AboutUs";
import Projects from "../src/components/sections/Projects";
import Skills from "../src/components/sections/Skills";
import Contact from "../src/components/sections/Contact";
const App = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (_jsxs("div", { className: "bg-background text-text-primary font-body min-h-screen", children: [_jsx(Navbar, { onNavClick: scrollToSection }), _jsx("section", { id: "home", className: "min-h-screen flex items-center pt-20", children: _jsx(Hero, { onNavClick: scrollToSection }) }), _jsx("section", { id: "aboutus", className: "py-40 bg-surface", children: _jsx(AboutUs, {}) }), _jsx("section", { id: "experience", className: "py-20", children: _jsx(Experience, {}) }), _jsx("section", { id: "projects", className: "py-20 bg-surface", children: _jsx(Projects, {}) }), _jsx("section", { id: "skills", className: "py-20", children: _jsx(Skills, {}) }), _jsx("section", { id: "contact", className: "py-20 bg-surface", children: _jsx(Contact, {}) })] }));
};
export default App;

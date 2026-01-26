import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Contact = () => {
    const [status, setStatus] = useState("idle");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");
        const form = e.currentTarget;
        const formData = new FormData(form);
        console.log("Form Data: :", Array.from(formData.entries()));
        try {
            await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(),
            });
            // 👉 Netlify submission DONE here
            setStatus("success");
            form.reset();
        }
        catch (error) {
            console.error(error);
            setStatus("error");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "container mx-auto px-6", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [_jsxs("div", { className: "animate-slide-up", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold font-heading mb-6", children: "Let's work together" }), _jsx("p", { className: "text-text-muted text-lg mb-8", children: "I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to chat about technology, feel free to reach out!" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "w-12 h-12 rounded-lg bg-primary bg-opacity-20 flex items-center justify-center", children: _jsx("i", { className: "fas fa-envelope text-primary text-xl" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-text-muted", children: "Email" }), _jsx("a", { href: "mailto:rinkesh.vansfoda@gmail.com", className: "text-text-primary hover:text-primary transition-colors duration-300", children: "Get in touch" })] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "w-12 h-12 rounded-lg bg-secondary bg-opacity-20 flex items-center justify-center", children: _jsx("i", { className: "fab fa-github text-secondary text-xl" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-text-muted", children: "GitHub" }), _jsx("a", { href: "https://github.com/rinkeshvansfoda1", className: "text-text-primary hover:text-primary transition-colors duration-300", children: "View Projects" })] })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: "w-12 h-12 rounded-lg bg-blue-500 bg-opacity-20 flex items-center justify-center", children: _jsx("i", { className: "fab fa-linkedin text-blue-500 text-xl" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-text-muted", children: "LinkedIn" }), _jsx("a", { href: "https://www.linkedin.com/in/rinkesh-vansfoda/", className: "text-text-primary hover:text-primary transition-colors duration-300", children: "Connnect on LinkedIn" })] })] })] })] }), _jsx("div", { className: "animate-slide-up", children: _jsxs("div", { className: "bg-surface rounded-2xl border border-border p-6 lg:p-8", children: [_jsx("h3", { className: "text-2xl font-heading font-semibold mb-4", children: "Send a message" }), _jsx("p", { className: "text-text-muted mb-6", children: "Drop your details and I'll get back to you." }), _jsxs("form", { name: "contact", method: "POST", "data-netlify": "true", "data-netlify-honeypot": "bot-field", onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "hidden", name: "form-name", value: "contact" }), _jsx("input", { type: "hidden", name: "bot-field" }), _jsxs("div", { children: [_jsx("label", { className: "block mb-1 text-sm text-text-muted", children: "Name" }), _jsx("input", { type: "text", name: "name", required: true, placeholder: "Your name", className: "form-input w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none" })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-1 text-sm text-text-muted", children: "Email" }), _jsx("input", { type: "email", name: "email", required: true, placeholder: "you@example.com", className: "form-input w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none" })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-1 text-sm text-text-muted", children: "Message" }), _jsx("textarea", { name: "message", required: true, placeholder: "Tell me about your project...", className: "form-input w-full bg-background border border-border rounded-lg px-3 py-2 text-sm h-28 resize-none focus:outline-none" })] }), _jsx("button", { type: "submit", disabled: loading, className: "bg-primary text-white px-6 py-2 rounded-full disabled:opacity-50", children: loading ? "Sending..." : "Send message" }), status === "success" && (_jsx("p", { className: "text-green-600 text-sm mt-2", children: "\u2705 Message sent successfully!" })), status === "error" && (_jsx("p", { className: "text-red-600 text-sm mt-2", children: "\u274C Something went wrong. Please try again." }))] })] }) })] }) }));
};
export default Contact;

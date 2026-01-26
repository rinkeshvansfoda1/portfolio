import React, { useState } from "react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        body: new URLSearchParams(formData as any).toString(),
      });

      // 👉 Netlify submission DONE here
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left */}
        <div className="animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-text-muted text-lg mb-8">
            I&apos;m currently available for freelance work and full-time
            opportunities. Whether you have a project in mind or just want to
            chat about technology, feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary bg-opacity-20 flex items-center justify-center">
                <i className="fas fa-envelope text-primary text-xl" />
              </div>
              <div>
                <p className="text-text-muted">Email</p>
                <a
                  href="mailto:rinkesh.vansfoda@gmail.com"
                  className="text-text-primary hover:text-primary transition-colors duration-300"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-secondary bg-opacity-20 flex items-center justify-center">
                <i className="fab fa-github text-secondary text-xl" />
              </div>
              <div>
                <p className="text-text-muted">GitHub</p>
                <a
                  href="https://github.com/rinkeshvansfoda1"
                  className="text-text-primary hover:text-primary transition-colors duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500 bg-opacity-20 flex items-center justify-center">
                <i className="fab fa-linkedin text-blue-500 text-xl" />
              </div>
              <div>
                <p className="text-text-muted">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/rinkesh-vansfoda/"
                  className="text-text-primary hover:text-primary transition-colors duration-300"
                >
                  Connnect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right – simple form placeholder (optional) */}
    <div className="animate-slide-up">
      <div className="bg-surface rounded-2xl border border-border p-6 lg:p-8">
        <h3 className="text-2xl font-heading font-semibold mb-4">
          Send a message
        </h3>

        <p className="text-text-muted mb-6">
          Drop your details and I&apos;ll get back to you.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Netlify required */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div>
            <label className="block mb-1 text-sm text-text-muted">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="form-input w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-text-muted">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="form-input w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-text-muted">
              Message
            </label>
            <textarea
              name="message"
              required
              placeholder="Tell me about your project..."
              className="form-input w-full bg-background border border-border rounded-lg px-3 py-2 text-sm h-28 resize-none focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-6 py-2 rounded-full disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send message"}
          </button>

          {/* Inline status message */}
          {status === "success" && (
            <p className="text-green-600 text-sm mt-2">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm mt-2">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Contact;

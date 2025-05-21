import React from "react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/manuelgustavomoran", icon: "🌐" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/manuelgustavomoran", icon: "🔗" },
  // Add more as needed
];

const LandingPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#f9f9f9",
      fontFamily: "'Segoe UI', 'Arial', sans-serif",
    }}>
      <div style={{
        padding: "2rem 3rem",
        borderRadius: "1.5rem",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        background: "#fff",
        textAlign: "center",
        maxWidth: 420,
      }}>
        <h1 style={{ fontSize: "2.7rem", marginBottom: "0.2em" }}>Manuel Gustavo Moran</h1>
        <h2 style={{ fontSize: "1.2rem", fontWeight: "400", color: "#3b3b3b", marginBottom: "1.5em" }}>
          Master’s student in Computer Science at Texas A&M<br />
          Data Engineer · Tech Enthusiast · Traveler
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#505050", marginBottom: "1.5em" }}>
          Welcome! Explore my projects, background, and more.  
        </p>
        <div style={{ display: "flex", gap: "1.2em", justifyContent: "center", marginBottom: "2em" }}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#resume" style={linkStyle}>Resume</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "1em" }}>
          {socialLinks.map(({ name, url, icon }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" style={iconStyle} title={name}>
              {icon}
            </a>
          ))}
        </div>
      </div>
      <footer style={{ marginTop: "2em", color: "#888", fontSize: "0.92em" }}>
        © {new Date().getFullYear()} Manuel Gustavo Moran
      </footer>
    </div>
  );
}

export default LandingPage;
// Inline styles
const linkStyle = {
  textDecoration: "none",
  color: "#1756d9",
  fontWeight: "bold",
  padding: "0.5em 1em",
  borderRadius: "1em",
  background: "#eef3fd",
  transition: "background 0.2s",
};
const iconStyle = {
  fontSize: "1.8em",
  textDecoration: "none",
};



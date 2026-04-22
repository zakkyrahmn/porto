import { useEffect, useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 78 ? 0 : p + 1));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{
      backgroundColor: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      fontFamily: "'Courier New', monospace",
      position: "relative",
      overflow: "hidden",
    }}>

      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `repeating-linear-gradient(0deg,rgba(255,255,255,.04) 0,rgba(255,255,255,.04) 1px,transparent 1px,transparent 60px),
          repeating-linear-gradient(90deg,rgba(255,255,255,.04) 0,rgba(255,255,255,.04) 1px,transparent 1px,transparent 60px)`,
        pointerEvents: "none",
      }} />

      <div style={{ fontSize: "6rem", marginBottom: "2rem", animation: "bounce 1.5s ease infinite" }}>🏗️</div>

      <span style={{
        backgroundColor: "#f5c842", color: "#000", fontSize: "0.7rem", letterSpacing: "0.2em",
        textTransform: "uppercase", padding: "4px 16px", borderRadius: "999px", marginBottom: "1.2rem", fontWeight: "bold",
      }}>
        🚧 Under Construction
      </span>

      <h1 style={{
        fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: "900", textAlign: "center",
        lineHeight: "1.15", marginBottom: "0.8rem", fontFamily: "sans-serif",
      }}>
        Something <span style={{ color: "#f5c842" }}>Awesome</span><br />is Being Built!
      </h1>

      <p style={{ fontSize: "0.7rem", color: "#555", letterSpacing: "0.25em", textAlign: "center", marginBottom: "2rem", textTransform: "uppercase" }}>
        Our crew is working hard — come back soon
      </p>

      <div style={{ width: "min(320px, 80vw)", height: "6px", backgroundColor: "#1a1a1a", borderRadius: "999px", overflow: "hidden", marginBottom: "0.5rem" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #f5c842, #ff9f1c)", borderRadius: "999px", transition: "width 75ms linear" }} />
      </div>

      <p style={{ fontSize: "0.65rem", color: "#444", letterSpacing: "0.2em", marginBottom: "3rem" }}>
        LOADING... PLEASE STAND BY
      </p>

      <div style={{
        display: "flex",
        gap: "1.5rem",
        zIndex: 20,
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {[
          { label: "INSTAGRAM", url: "https://www.instagram.com/zakkyrahmn/" },
          { label: "LINKEDIN", url: "https://www.linkedin.com/in/zakky-rahman-992973335/" },
          { label: "GITHUB", url: "https://github.com/zakkyrahmn" }
        ].map((social, index) => (
          <button
            key={index}
            onClick={() => handleSocialClick(social.url)}
            className="social-btn"
            style={{
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#888",
              cursor: "pointer",
              fontSize: "0.75rem",
              fontWeight: "700",
              padding: "8px 4px",
              letterSpacing: "0.2em",
              transition: "all 0.3s ease",
              fontFamily: "sans-serif",
            }}
          >
            {social.label}
          </button>
        ))}
      </div>

      <p style={{ marginTop: "4rem", fontSize: "0.65rem", color: "#333", letterSpacing: "0.1em" }}>
        © Zakky Rahman | 2026 · Stay tuned, it'll be worth it ⚙️
      </p>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        
        .social-btn:hover {
          color: #f5c842 !important;
          border-bottom-color: #f5c842 !important;
          letter-spacing: 0.3em !important;
          transform: translateY(-2px);
        }

        .social-btn:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default App;
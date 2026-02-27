import React, { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const theme = {
    background: darkMode
      ? "linear-gradient(135deg, #1e3c72, #2a5298)"
      : "linear-gradient(135deg, #667eea, #764ba2)",
    cardBg: darkMode ? "#1f2937" : "#ffffff",
    text: darkMode ? "#f3f4f6" : "#333",
    subText: darkMode ? "#d1d5db" : "#555",
    buttonBg: darkMode ? "#3b82f6" : "#667eea",
    buttonHover: darkMode ? "#2563eb" : "#5a67d8",
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.background,
        fontFamily: "Segoe UI, sans-serif",
        transition: "0.4s ease",
      }}
    >
      <div
        style={{
          background: theme.cardBg,
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
          transition: "0.4s ease",
        }}
      >
        <h1 style={{ color: theme.text, marginBottom: "10px" }}>
          🚀 Beautiful React App
        </h1>

        <p style={{ color: theme.subText, marginBottom: "20px" }}>
          Clean. Modern. No extra dependencies.
        </p>

        <h2 style={{ color: theme.text, marginBottom: "20px" }}>
          {time.toLocaleTimeString()}
        </h2>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: theme.buttonBg,
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "15px",
            transition: "0.3s",
            marginBottom: "15px",
          }}
          onMouseOver={(e) =>
            (e.target.style.background = theme.buttonHover)
          }
          onMouseOut={(e) =>
            (e.target.style.background = theme.buttonBg)
          }
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>

        <br />

        <button
          onClick={() => alert("Welcome! Your app is working perfectly 🎉")}
          style={{
            background: "transparent",
            border: `2px solid ${theme.buttonBg}`,
            color: theme.buttonBg,
            padding: "8px 18px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "0.3s",
          }}
        >
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;
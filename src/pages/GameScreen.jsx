import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GameScreen.css";

const GameScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const difficulty = location.state?.difficulty || "Unknown";

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "#4CAF50";
      case "medium":
        return "#FF9800";
      case "hard":
        return "#f44336";
      default:
        return "#9E9E9E";
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      color: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center",
      animation: "fadeIn 0.6s ease-out"
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        padding: "3rem",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        maxWidth: "600px",
        width: "100%"
      }}>
        <h1 style={{
          fontSize: "3rem",
          marginBottom: "2rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          fontWeight: "700",
          letterSpacing: "-1px"
        }}>
          Game Page
        </h1>
        
        <div style={{
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "15px",
          padding: "2rem",
          marginBottom: "2rem",
          border: "1px solid rgba(255, 255, 255, 0.2)"
        }}>
          <p style={{
            fontSize: "1.5rem",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "1rem"
          }}>
            Selected Difficulty:
          </p>
          <span style={{
            color: getDifficultyColor(difficulty),
            fontWeight: "bold",
            fontSize: "2.5rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            display: "block",
            marginTop: "0.5rem"
          }}>
            {difficulty}
          </span>
        </div>

        <div style={{
          fontSize: "1.2rem",
          color: "rgba(255, 255, 255, 0.8)",
          marginBottom: "2rem",
          lineHeight: "1.6"
        }}>
          <p>Get ready for your gaming experience!</p>
          <p style={{ fontSize: "1rem", opacity: "0.7", marginTop: "0.5rem" }}>
            The game logic will be implemented here based on the selected difficulty level.
          </p>
        </div>

        <button
          onClick={handleBackToHome}
          style={{
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            fontWeight: "600",
            color: "#fff",
            background: "rgba(255, 255, 255, 0.1)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "translateY(-2px) scale(1.05)";
            e.target.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.1)";
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
          }}
        >
          Back to Home
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GameScreen;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartScreen.css";

const StartScreen = () => {
  const navigate = useNavigate();

  const handleDifficultySelect = (difficulty) => {
    navigate("/game", { state: { difficulty } });
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to the my profile!</h1>
      <p className="subtitle">Md Ahmed Hassan </p>
      <div className="buttonContainer">
        <button
          className="button"
          onClick={() => handleDifficultySelect("Easy")}
        >
          Easy
        </button>
        <button
          className="button"
          onClick={() => handleDifficultySelect("Medium")}
        >
          Medium
        </button>
        <button
          className="button"
          onClick={() => handleDifficultySelect("Hard")}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default StartScreen;

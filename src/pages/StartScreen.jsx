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
      <h1 className="title">Welcome to the Game!</h1>
      <p className="subtitle">Select your difficulty level to start:</p>
      <div className="buttonContainer">
        <button
          className="difficulty-button easy"
          onClick={() => handleDifficultySelect("Easy")}
        >
          Easy
        </button>
        <button
          className="difficulty-button medium"
          onClick={() => handleDifficultySelect("Medium")}
        >
          Medium
        </button>
        <button
          className="difficulty-button hard"
          onClick={() => handleDifficultySelect("Hard")}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default StartScreen;

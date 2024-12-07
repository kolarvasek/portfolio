import React, { useEffect } from "react";
import "../snowflake.css";

const SnowfallBackground = () => {
  useEffect(() => {
    const createSnowflakes = () => {
      const snowflakeContainer = document.body;

      for (let i = 0; i < 1; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`;

        snowflakeContainer.appendChild(snowflake);

        setTimeout(() => {
          snowflakeContainer.removeChild(snowflake);
        }, 7000);
      }
    };

    // Set interval for continuous effect
    const interval = setInterval(createSnowflakes, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default SnowfallBackground;

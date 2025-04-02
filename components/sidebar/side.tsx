import React, { useState } from "react";

const HoverSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsVisible(true)} 
      onMouseLeave={() => setIsVisible(false)}
      style={{ position: "relative", width: "60px", height: "100vh", background: "#333", cursor: "pointer" }}
    >
      {/* Sidebar Content */}
      {isVisible && (
        <div style={{
          position: "absolute",
          left: "100%",
          top: 0,
          width: "250px",
          height: "100vh",
          background: "#555",
          color: "white",
          padding: "20px",
          transition: "0.3s",
        }}>
          <h3>Sidebar Menu</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HoverSidebar;

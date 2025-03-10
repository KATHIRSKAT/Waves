import React, { useEffect } from 'react';

const WavesEffect = () => {
  useEffect(() => {
    // Initialize the Vanta Waves effect
    const vantaEffect = window.VANTA.WAVES({
      el: "#vanta-waves",  // The ID of the element where the effect will be applied
      mouseControls: true,  // Enable mouse control
      touchControls: true,  // Enable touch control
      gyroControls: false,  // Disable gyro control
      minHeight: 200.00,  // Minimum height of the element
      minWidth: 200.00,   // Minimum width of the element
      scale: 1.00,        // Scale factor
      scaleMobile: 1.00,
      zoom :0.5 , // Scale factor for mobile
      waveHeight: 5,     // Lower wave height
      waveSpeed: 0.3,
      shininess:10, 
      antialias: false
    });

    // Cleanup function to destroy the effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);  // Empty dependency array ensures it runs once on mount

  return (
    <div
      id="vanta-waves"
      style={{
        position: "absolute",  // Position it behind other content
        top: 0,
        left: 0,
        width: "110%",         // Make it fill the full width of the screen
        height: "100%",        // Make it fill the entire height of the screen
        zIndex: -1,            // Keep the effect behind everything else
      }}
    />
  );
};

export default WavesEffect;

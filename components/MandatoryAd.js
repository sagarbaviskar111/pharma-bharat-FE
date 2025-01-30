import React, { useEffect, useState } from "react";

const MandatoryAd = ({ onAdCompleted }) => {
  const [timer, setTimer] = useState(4); // 4-second timer
  const [adLoaded, setAdLoaded] = useState(false); // To track if the ad is loaded

  useEffect(() => {
    if (!adLoaded) {
      // Push the ad only once
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
        setAdLoaded(true); // Mark the ad as loaded
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }

    // Timer countdown logic
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, [adLoaded]); // Only run if ad hasn't been loaded

  const handleProceed = () => {
    if (timer === 0) {
      onAdCompleted(); // Notify the parent component that the ad is complete
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Advertisement</h1>
        <div
          style={{
            width: "100%",
            maxWidth: "728px",
            margin: "20px auto",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          {/* Google AdSense Slot */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1862946013812607" // Replace with your AdSense Publisher ID
            data-ad-slot="2123663121" // Replace with your specific Ad Slot ID
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
        <p>Watch the ad or wait {timer} seconds to proceed.</p>
        <button
          onClick={handleProceed}
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            backgroundColor: "#2b7a78",
            border: "none",
            color: "#fff",
            cursor: timer === 0 ? "pointer" : "not-allowed",
            opacity: timer === 0 ? 1 : 0.5,
          }}
          disabled={timer > 0} // Disable the button until the timer reaches 0
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default MandatoryAd;

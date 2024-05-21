import React, { useState } from 'react';
import Lottie from "lottie-react";

const Anime = () => {
  const [animationData, setAnimationData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const json = JSON.parse(e.target.result);
        setAnimationData(json);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid JSON file.");
    }
  };

  return (
    <div>
      <input type="file" accept="application/json" onChange={handleFileUpload} />
      {animationData && <Lottie animationData={animationData} />}
    </div>
  );
};

export default Anime;

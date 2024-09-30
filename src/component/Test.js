import { useState, useEffect } from "react";

const Test = () => {
  const words = ["Frontend Development", "Backend Development", "DevOps"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // Runs every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [words.length]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1
        className="text-5xl font-bold text-indigo-600 font-serif transition-opacity duration-1000 opacity-100"
        key={currentWordIndex}
      >
        {words[currentWordIndex]}
      </h1>
    </div>
  );
};

export default Test;

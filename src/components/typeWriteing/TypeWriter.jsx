import React, { useState, useEffect } from "react";

function Typewriter() {
  const words = ["Personal Care", "Home Maintenance", "Transportation"];
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [j, setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentIndex];

      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, j - 1));
        setJ(j - 1);

        if (j === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setDisplayedText(currentWord.substring(0, j + 1));
        setJ(j + 1);

        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? 100 : 200);

    return () => clearTimeout(timer);
  }, [displayedText, j, isDeleting, currentIndex, words]);

  return (
    <span className="text-[#109088] font-semibold animate-fadeIn">
      {displayedText}|
    </span>
  );
}

export default Typewriter;

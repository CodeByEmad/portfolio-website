import { useEffect, useState } from "react";

const WordAnimation = () => {
  const words = ["Web Development", "Artificial Intelligence Solutions", "Data Science"];
  const [displayText, setDisplayText] = useState(""); // Holds the current text being typed
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Tracks the current word being typed
  const [isDeleting, setIsDeleting] = useState(false); // If true, we're deleting
  const [typingSpeed, setTypingSpeed] = useState(50); // Initial typing speed
  const deletingSpeed = 50; // Speed for deleting characters

  const firstHalfSpeed = 50; // Typing speed for the first half of the word
  const secondHalfSpeed = 100; // Typing speed for the second half of the word (half the speed)

  useEffect(() => {
    let interval;

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        // Adjust speed based on the position in the word
        if (displayText.length < currentWord.length / 2) {
          setTypingSpeed(firstHalfSpeed); // Fast for the first half
        } else {
          setTypingSpeed(secondHalfSpeed); // Slow for the second half
        }

        // Add the next character only if within bounds
        if (displayText.length < currentWord.length) {
          setDisplayText((prev) => prev + currentWord[displayText.length]);
        }

        // If the word is fully typed, start deleting
        if (displayText.length === currentWord.length) {
          setIsDeleting(true);
        }
      } else {
        // Delete characters at a constant speed
        setDisplayText((prev) => prev.slice(0, -1));

        // If fully deleted, move to the next word
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    // Set interval for typing or deleting
    interval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    // Cleanup interval on component unmount or state change
    return () => clearInterval(interval);
  }, [displayText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <div className="flex flex-col items-center">
      <span
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-thin tracking-tight text-transparent mt-32"
        style={{ minHeight: "50px" }} // Consistent space
      >
        {displayText}
      </span>
    </div>
  );
};

export default WordAnimation;

import { useEffect, useState } from "react";

const words = ["ASP.NET Core & C#", "EF Core & MSSQL", "React & TypeScript", "Laravel & PostgreSQL", "REST APIs & JWT", "WebSockets & Real-time", "Docker & AWS"];

const WordAnimation = () => {
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
    // Decorative, constantly-changing text — hidden from screen readers
    // (the static intro paragraph already conveys the role).
    <span className="inline-flex items-center font-mono text-sm lg:text-base" aria-hidden="true">
      <span className="mr-2 text-violet-500/70">&gt;</span>
      <span className="tracking-tight text-violet-300">
        {displayText}
      </span>
      <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-violet-400" />
    </span>
  );
};

export default WordAnimation;

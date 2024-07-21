import { useEffect, useState } from "react";

export const WordFlicker = () => {
  const words = ["Help You", "Guide You", "Support You", "Protect You"];

  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((i + 1) % words.length);
          setOffset(0);
        }
      }

      setPart(words[i].substr(0, offset));

      if (skipCount === 0) {
        if (forwards) {
          setOffset(offset + 1);
        } else {
          setOffset(offset - 1);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [i, offset, forwards, skipCount, words]);

  return (
    <>
      <span className="inline-block">{part}</span>
    </>
  );
};

import { useEffect, useState } from "react";

export default function Question({ question, onAnswered }) {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (time === 0) {
      onAnswered(false);
    }
  }, [time, onAnswered]);

  return (
    <div>
      <p>{time} seconds remaining</p>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}

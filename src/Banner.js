import React, { useState, useEffect } from 'react';

function Banner({ data }) {
  const [timeLeft, setTimeLeft] = useState(data.timer);

  useEffect(() => {
    if (data.visible && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, data.visible]);

  if (!data.visible || timeLeft <= 0) return null;

  return (
    <div className="bg-blue-600 text-white p-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">{data.description}</p>
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white hover:text-blue-200"
            >
              Learn more
            </a>
          )}
        </div>
        <div className="text-xl font-bold">
          Time remaining: {timeLeft}s
        </div>
      </div>
    </div>
  );
}

export default Banner;

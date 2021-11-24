import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [start, setStart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 300);
  }, []);

  return (
    <div
      className="grid grid-cols-4 overflow-hidden px-6 lg:px-24"
      style={{ height: "90vh" }}
    >
      <div
        className={`border-2 border-black hidden transform place-self-center self-end bg-primary lg:grid grid-cols-2 gap-6 p-6 ${
          start ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          height: "80vh",
          width: "80%",
          transition: "all 3s ",
        }}
      >
        {Array.from({ length: 14 }, (_, i) => i + 1).map(() => (
          <div className="bg-white col-span-1 h-full border-2 border-black"></div>
        ))}
      </div>
      <div
        className={`border-2 border-black hidden transform place-self-center self-end bg-primary lg:grid grid-cols-2 gap-6 p-6 ${
          start ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          height: "60vh",
          width: "70%",
          transition: "all 3s ",
        }}
      >
        {Array.from({ length: 12 }, (_, i) => i + 1).map(() => (
          <div className="bg-white col-span-1 h-full border-2 border-black"></div>
        ))}
      </div>
      <div className="" style={{ height: "100vh" }}></div>
    </div>
  );
};

export default AboutPage;

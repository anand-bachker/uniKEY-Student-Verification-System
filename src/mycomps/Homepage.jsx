import React from "react";
import Typewriter from "typewriter-effect";

export const Homepage = () => {
  
  return (
    <>
    <div className="h-[40vh] w-full flex justify-center items-center">
      <h1 className="text-[5vw]">
        <Typewriter
            options={{
              strings: [
                "uniKEY",
                "单键",
                "유니키",
                "یونیکی",
                "ಏಕಕೈ",
                "യുനിക്ക്",
                "యునిక్",
                "யுனிக்",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              cursor: "",
              delay: 50,
              pauseFor: 1500,
            }}
          />
      </h1>
      </div>
    </>
  );
};

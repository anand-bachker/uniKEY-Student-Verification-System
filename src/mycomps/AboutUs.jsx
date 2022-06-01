import React from "react";
import { AboutCard } from "./AboutCard";

export const AboutUs = () => {
  const devs = [
    {
      name: "Anand",
      img: "Anand.jpeg",
      tag: "Full Stack Developer",
      desc: "I am god",
      github: "https://github.com/anand-bachker",
      linkedin: "https://www.linkedin.com/in/anand-bachker-216119238/",
    },
    {
      name: "Saatvik",
      img: "Saatvik.png",
      tag: "Full Stack Developer",
      desc: "I am beta male",
      github: "https://github.com/saatvik333",
      linkedin: "https://www.linkedin.com/in/saatvik333/",
    },
    {
      name: "Yathin",
      img: "Yathin.jpg",
      tag: "Full Stack Developer",
      desc: "I am beta male",
      github: "https://github.com/yathin017",
      linkedin: "https://www.linkedin.com/in/yathin-prakash-kethepalli/",
    },
  ];

  return <div id="About">
    <div className="w-full flex justify-center items-center mb-[40px]">
      <div className="text-[50px] font-bold text-white">
            Our Team
      </div>
    </div>
    <div className="w-full flex justify-center">
    <div className="flex flex-row space-x-10 items-center">
  {devs.map((value)=>{
      return <AboutCard name={value.name} img={value.img} github={value.github} tag={value.tag} dec={value.desc} linkedin={value.linkedin}  />
  })}
  </div>
  </div>


  </div>;
};

import React from "react";
import "./About.css";

export default function About() {
  const open = " {";
  const close = "}";

  return (
    <div id="about" className="about">
      <div className="container mx-auto md:px-16 px-4">
        <div className="flex items-center flex-wrap md:gap-x-5 md:flex-nowrap">
          <div className="aboutLeft">
            <h1 className="text-green md:text-h1 text-2xl">
              <span className="font-normal leading-9 md:leading-[96px]">
                Hi
              </span>
              <br />
              <span className="text-white font-bold leading-9 md:leading-[96px]">
                I'm Ruslan,
              </span>
              <br />
              <span className="md:text-7xl md:tracking-normal tracking-wide font-bold text-outline leading-9 md:leading-[108px] text-nowrap">
                Full Stack Developer.
              </span>
            </h1>
          </div>
          <div className="aboutRight md:mt-0 mt-4 z-[1] bg-[#171A1B] h-[400px] w-full border-2 border-[#4A4A4A] border-solid rounded-t-[15px] relative">
            <div className="circleBox">
              <div className="circle red"></div>
              <div className="circle yellow"></div>
              <div className="circle green"></div>
            </div>
            <div className="rounded-[5px] bg-[#202226] w-fit md:px-28 px-10 py-0.5 mt-[5px] mx-auto">
              <p className="text-white text-[10px] leading-[18px]">theblack</p>
            </div>
            <div className="textBox ml-5 mt-8 md:ml-14 md:mt-[70px]">
              <p className="text-[16px] leading-[18px] text-[#7000FF] tracking-[-0.25px] font-firasans">
                .AboutMe
                <span className="text-white">{open}</span>
                <br />
                <br />
                <span className="text-green">Profession:</span>
                <span className="text-white"> Full-Stack Developer;</span>
                <br />
                <span className="text-green">Languages:</span>
                <span className="text-white"> C++, C#, JAVASCRIPT;</span>
                <br />
                <br />
                <span className="text-white">{close}</span>
              </p>
              <br />
              <p className="text-[16px] leading-[18px] text-[#7000FF] tracking-[-0.25px] font-firasans">
                .Education
                <span className="text-white">{open}</span>
                <br />
                <br />
                <span className="text-green">KIUT:</span>
                <span className="text-white">
                  {" "}
                  Information Systems Engineering;
                </span>
                <br />
                <br />
                <span className="text-white">{close}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

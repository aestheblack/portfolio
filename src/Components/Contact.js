import React from "react";
import "./Contact.css";
import { social } from "../utilits/constants";

export default function Contact() {
  return (
    <div
      id="contact"
      className="contact md:mt-52 mt-24 relative text-center text-white"
    >
      <div className="container mx-auto md:px-16 px-4">
        <div className="element bottom-0 right-0 md:left-[-250px]"></div>
        <h3 className="md:text-h3 text-responsH3 font-normal md:mb-16 mb-7">
          I would like to have your contact!
        </h3>
        <ul className="flex md:gap-x-11 gap-x-6 items-center justify-center">
          {social.map((icon) => (
            <li key={icon.title} className="cursor-pointer">
              <a
                href={icon.slug}
                target="_blank"
                rel="noreferrer"
                download={icon.download}
                className="md:w-20 md:h-20 w-10 h-10 bg-white md:rounded-2xl rounded-xl flex items-center justify-center"
              >
                {icon.icon}
              </a>
            </li>
          ))}
        </ul>
        <h3 className="md:text-h3 text-responsH3 text-white md:mt-20 mt-10 md:mb-10 mb-5">
          Do you have a project in mind? Let's make it happen!
        </h3>
        <a
          href="tel: +998913708896"
          className="md:text-h3 text-responsH3 text-green font-normal md:font-normal"
        >
          +998 91 370 88 96
        </a>
        <div className="bg-white w-full h-[1px] md:mb-10 md:mt-32 mb-5 mt-10"></div>
        <p className="md:mb-10 mb-5 text-xs">2024 - All rights reserved</p>
      </div>
    </div>
  );
}

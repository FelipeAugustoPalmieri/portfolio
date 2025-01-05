import React from "react";
import Image from "next/image";
import felipe from "@/assets/felipe2.jpg";
import felipeAbout from "@/assets/felipeAbout.jpg";
import { ABOUT_TEXT } from "@/constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <div className="relative w-96 h-96 rounded-xl overflow-hidden shadow-md opacity-25">
              <Image
                src={felipeAbout}
                alt="Felipe Palmieri"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

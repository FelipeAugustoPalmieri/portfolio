import React from "react";
import Image from "next/image";
import felipe from "@/assets/felipe2.jpg";

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
            <div className="relative w-96 h-96 rounded-xl overflow-hidden shadow-md opacity-30">
              <Image
                src={felipe}
                alt="Felipe Palmieri"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              nostrum distinctio maxime sunt repellendus nobis quibusdam quasi
              ducimus beatae voluptatem consequuntur tempore, officia eveniet
              assumenda optio, minima, provident repudiandae omnis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

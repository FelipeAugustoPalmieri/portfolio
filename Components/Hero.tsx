import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Olá, eu sou o <span className="text-cyan-600">Felipe !</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            doloribus, quisquam incidunt beatae fugit aliquam velit cupiditate,
            dolorum architecto similique qui autem odio nesciunt earum.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm-flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-cyan-600 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#4d1a4e] text-black flex items-center space-x-2">
              <p> Dawload Cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#000000] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/felipe2.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full opacity-55"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

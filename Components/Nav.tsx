import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Nav = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1>LOGO</h1>
        <ul>
          <li>
            <DotLottieReact
              src="https://lottie.host/7c511770-85cf-4b1e-bbbc-b148b990aeb1/jBW1hiDm1s.lottie"
              loop
              autoplay
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

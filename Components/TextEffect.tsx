import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Desenvolvedor Web",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Front-End",
        1500,
        "Back-End",
        1500,
        "Full-Stack",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#4d1a4e] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;

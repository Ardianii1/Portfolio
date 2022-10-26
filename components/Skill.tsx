import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer w-24 h-24 md:h-25 md:w-25 lg:w-34 lg:h-34 ">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500  w-24 h-24 md:h-25 md:w-25 lg:w-34 lg:h-34 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 trasition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-25 md:w-25 lg:w-34 lg:h-34 xl:h-30 xl:w-30 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progres}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;

import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import ExprerienceCard from "./ExprerienceCard";

type Props = { experiences: Experience[] };

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex realtive overflow-hidden flex-col text-left md:flex-row max-w-full xl:h-[820px] px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Work Experience
      </h3>

      <div className="w-full flex justify-start space-x-5 overflow-x-scroll p-10  snap-x snap-mandatory">
        {experiences?.map((experience) => (
          <ExprerienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;

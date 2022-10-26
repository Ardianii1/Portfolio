import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = { skills: SkillType[] };
const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w[2000px] xl:px-10 h-screen  justify-center itmes-center  xl:pt-10 mx-auto "
    >
      <div className="flex justify-center items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current proficiency
        </h3>
      </div>

      {/* <motion.div className="grid grid-cols-6 gap-5  pt-24 xl:w-[800px] items-center"> */}
      <motion.div className="absolute grid grid-cols-5 grid-rows-4 mt-40  gap-5 xl:h-[500px]  items-center justify-center">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;

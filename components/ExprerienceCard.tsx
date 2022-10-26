import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = { experience: Experience };

const ExprerienceCard = ({ experience }: Props) => {
  return (
    <article className=" flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] h-[600px] md:w-[600px]  xl:h-[500px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-y-scrolls ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        // src="https://cdn.sanity.io/images/38iejkwf/production/c911afb95e6bba39bea06ac0949849f82e8eabff-224x44.png"
        className="w-32 h-32 rounded-full xl:w-[130px] xl:h-[130px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-12 w-12 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-60 pr-5">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExprerienceCard;

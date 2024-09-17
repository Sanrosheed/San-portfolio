import React from "react";
import Section from "./common/Section";
import avatar from "../assets/avatar.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const TESTIMONIALS = [
    {
      id: 1,
      image: avatar3,
      name: "Paul Oluwatosin",
      comment: "Sanusi is a hardworking, creative and a determined person.",
    },
    {
      id: 2,
      image: avatar4,
      name: "Oguntan Praise",
      comment:
        "San is an unwaveringly dedicated individual, exemplifying a relentless commitment to excellence.",
    },
    {
      id: 3,
      image: avatar,
      name: "Rufai Azezat",
      comment:
        "You are a committed person, always eager to learn and grow. Keep up the excellent work",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, duration: 10, delay: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <Section
        title="Testimonials 💭"
        subtitle="This is what friends and colleagues have to say about me"
      >
        <div className="max-w-xl flex flex-col gap-8">
          {TESTIMONIALS.map(({ id, image, name, comment }) => (
            <div className="flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300">
              <div className="w-1/3">
                <img
                  src={image}
                  alt={name}
                  className="w-28 h-28 object-cover object-top pt-2"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm font-extralight">{comment}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default Testimonials;

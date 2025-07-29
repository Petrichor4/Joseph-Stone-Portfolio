import { Skill } from "../../lib/definitions";
import { motion } from "framer-motion";

export default function SkillCard({
  skill,
  proj,
}: {
  skill: Skill;
  proj: boolean;
}) {
  const itemVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      variants={itemVariants}
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
        },
      }}
      className={`flex items-center p-3 text-black ${
        proj ? "bg-slate-500 w-fit" : "bg-slate-300 md:w-[200px]"
      } rounded gap-2 bg-opacity-50 px-5 
         shadow-sm text-xs md:text-base`}
    >
      {skill.symbol}
      <p>{skill.techName}</p>
    </motion.div>
  );
}

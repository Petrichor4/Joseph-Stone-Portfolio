import { Skill } from "../../lib/definitions";
import { motion } from "framer-motion";

export default function SkillCard({ skill }: { skill: Skill }) {
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
      className="flex items-center p-3 text-black bg-slate-300 rounded gap-2 bg-opacity-50 px-5 md:w-[200px]
         shadow-sm text-xs md:text-base"
    >
      {skill.symbol}
      <p>{skill.techName}</p>
    </motion.div>
  );
}

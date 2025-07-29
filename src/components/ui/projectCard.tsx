import { Image, Text } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills } from "../../lib/skills";
import SkillCard from "./SkillCard";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

interface Proj {
  photo: string;
  featured: boolean;
  title: string;
  github: string;
  techStack: string[];
  site: string;
  clip: string;
  description: string;
}

const containerVariants = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delay: 0.1,
      staggerChildren: 0.2,
    },
  },
};
export const projContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const dropItemVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .2,
      stiffness: 200,
      damping: 20,
    },
  },
};

const allSkills = [...skills.frontend, ...skills.backend, ...skills.tools];

export default function ProjectCard({ proj }: { proj: Proj }) {
  const [open, setOpen] = useState(false);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setOpen(true);
    }, 500); // trigger after 500ms of hovering
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setOpen(false);
  };

  return (
    <>
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`shadow aspect-video bg-slate-300 bg-opacity-50 rounded hover:p-4 ${
          open && "p-4"
        } duration-300`}
      >
        <motion.div className={`${open ? "h-fit" : "h-full"} w-full flex`}>
          {open ? (
            <motion.div
              className="flex flex-wrap gap-2"
              variants={projContainerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.h2
                className="justify-center items-center text-black text-xl w-full flex flex-nowrap gap-2"
                variants={dropItemVariants}
                initial="hidden"
                animate="show"
              >
                <a href={proj.site}>{proj.title}</a>
                <LiaExternalLinkSquareAltSolid />
              </motion.h2>
              <motion.video
                className="rounded"
                src={proj.clip}
                autoPlay
                playsInline
                loop
                variants={dropItemVariants}
                initial="hidden"
                animate="show"
              ></motion.video>
              <motion.h3
                className="text-black w-full text-lg"
                variants={dropItemVariants}
                initial="hidden"
                animate="show"
              >
                Techstack
              </motion.h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={projContainerVariants} // optional: apply separate stagger
                initial="hidden"
                animate="show"
              >
                {proj.techStack
                  .map((tech) => tech.trim())
                  .map((tech) => {
                    const found = allSkills.find(
                      (s) => s.techName.toLowerCase() === tech.toLowerCase()
                    );
                    return (
                      found && (
                        <motion.span
                          key={found.techName}
                          variants={dropItemVariants}
                        >
                          <SkillCard skill={found} proj />
                        </motion.span>
                      )
                    );
                  })}
              </motion.div>
              <motion.a
                href={proj.github}
                className="flex flex-nowrap text-black items-center gap-1 text-lg"
                variants={dropItemVariants}
              >
                <BsGithub />
                Repo
                <LiaExternalLinkSquareAltSolid />
              </motion.a>
            </motion.div>
          ) : (
            <Image className="h-full w-full rounded" src={proj.photo} />
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

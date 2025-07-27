import { Image } from "@chakra-ui/react";
import ProjectCard from "../components/ui/projectCard";
import { projects } from "../lib/projects";
import { skills } from "../lib/skills";
import SkillCard from "../components/ui/SkillCard";
import { motion } from "framer-motion";

export default function AboutMe() {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <main className="mb-8">
        <section className="md:flex">
          <div className="flex flex-wrap md:w-1/3 md:h-[70%] p-2 md:p-8 bg-opacity-50 justify-start md:justify-center rounded-xl">
            <Image
              className="aspect-square max-md:w-1/4 m-4 w-1/2"
              src="/IMG_0398-EDIT.jpeg"
              alt="Picture of Joseph Stone"
            />
            <p className="text-black text-sm md:text-base md:leading-loose">
              Accomplished developer with direct experience building modern,
              responsive, effective and successful web applications. Leveraging
              communication skills and tools to take on any role needed, working
              seamlessly with peers and stakeholders to achieve desired
              outcomes.
            </p>
          </div>
          <div className="md:w-2/3 pr-4">
            <h2 className="text-black text-3xl text-center mt-4 w-full relative h-fit">
              Skills
              <span className="h-[2px] bg-black w-full absolute bottom-0 left-0"></span>
            </h2>
            <h3 className="text-black py-2 text-lg">Frontend</h3>
            <motion.div
              variants={containerVariants}
              initial="inital"
              animate="animate"
              className="frontend flex flex-wrap gap-4"
            >
              {skills.frontend.map((skill) => (
                <SkillCard key={skill.techName} skill={skill}></SkillCard>
              ))}
            </motion.div>
            <h3 className="text-black py-2 text-lg">Backend</h3>
            <motion.div
              variants={containerVariants}
              initial="inital"
              animate="animate"
              className="frontend flex flex-wrap gap-4"
            >
              {skills.backend.map((skill) => (
                <SkillCard key={skill.techName} skill={skill}></SkillCard>
              ))}
            </motion.div>
            <h3 className="text-black py-2 text-lg">Tools</h3>
            <motion.div
              variants={containerVariants}
              initial="inital"
              animate="animate"
              className="frontend flex flex-wrap gap-4"
            >
              {skills.tools.map((skill) => (
                <SkillCard key={skill.techName} skill={skill}></SkillCard>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="flex justify-center flex-wrap">
          <h2 className="text-black text-3xl text-center my-8 w-full relative h-fit mx-4">
            Projects
            <span className="h-[2px] bg-black w-full absolute bottom-0 left-0"></span>
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {projects.map((proj, i) => (
              <div key={i} className="">
                <ProjectCard proj={proj} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

import { Container, Image } from "@chakra-ui/react";
import ProjCard from "../UI/customCard";
import { projects } from "../lib/projects";

export default function AboutMe() {
  return (
    <>
      <main>
        <section className="aboutMe flex flex-col items-center ml-2 mt-3">
          <Container className="flex m-10 justify-center items-center flex-wrap md:flex-nowrap md:w-1/2">
            <Image height={"200px"} src="/subject.png" alt="Picture of Joseph Stone"/>
            <p className="">
              Hello! My name is Joseph Stone. I love building performant
              websites that look and feel good to interact with. I only started my developer journey
              recently, but I love to learn and believe that it&apos;s the key to being a good developer.
            </p>
          </Container>
          <h3 className="text-3xl md:text-3xl">My projects</h3>
          <div className="w-11/12 flex flex-wrap justify-center items-center">
            {projects.map((item, index) => (
              <ProjCard key={index} proj={item}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

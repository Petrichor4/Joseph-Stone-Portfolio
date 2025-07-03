import { Image, Card, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Proj {
  photo: string;
  title: string;
  site: string;
  clip: string;
  description: string;
}

export default function ProjectCard({ proj }: { proj: Proj }) {
  const [hover, sethover] = useState(true);

  console.log(hover);

  return (
    <>
      <motion.div
        className="my-4 snap-center bg-gray-800 bg-opacity-50 p-4 rounded-[12px] shadow-lg"
        style={{backdropFilter: "blur(8px)"}}
        onHoverStart={() => sethover(true)}
        onHoverEnd={() => sethover(false)}
      >
          <Image className="aspect-video h-[400px]" src={proj.photo}>{}</Image>
      </motion.div>
    </>
  );
}

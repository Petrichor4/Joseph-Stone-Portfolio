import { Image, Card, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AnimatePresence, motion, spring } from "framer-motion";

interface Proj {
  photo: string;
  title: string;
  site: string;
  clip: string;
  description: string;
}

export default function ProjectCard({ proj }: { proj: Proj }) {
  return (
    <>
      <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, transition: {
        delay: .5
      } }}
        className="shadow aspect-video bg-slate-300 bg-opacity-50 rounded duration-300 hover:p-4"
      >
        <div className="h-full w-full flex overflow-hidden">
          <Image className="h-full w-full rounded" src={proj.photo}></Image>
        </div>
      </motion.div>
    </>
  );
}

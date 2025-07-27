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
  return (
    <>
      <motion.div
        className="shadow h-80 bg-slate-300 bg-opacity-50 rounded p-4"
      >
        <div className=" h-full flex">
          <Image className="aspect-video rounded" src={proj.photo}></Image>
        </div>
      </motion.div>
    </>
  );
}

import { Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion"

interface Proj {
  photo: string;
  title: string;
  site: string;
}

export default function ProjCard({ proj }: { proj: Proj }) {
  const [clicked, setClicked] = useState(false)
  return (
    <motion.div layoutId="modal" className="h-48 w-32 md:w-[600px] md:h-auto rounded-md relative m-5 shadow-lg shadow-neutral-950 overflow-hidden">
      <Image className="object-cover h-full w-full" src={proj.photo} alt={`${proj.title}`} />
    </motion.div>
  );
}

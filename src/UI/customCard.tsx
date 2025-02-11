import { Image, Card } from "@chakra-ui/react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Proj {
  photo: string;
  title: string;
  site: string;
  description: string;
}

export default function ProjCard({ proj }: { proj: Proj }) {
  const [open, setOpen] = useState(false);
  console.log(open)
  return (
    <>
      <motion.div
        layoutId={`card-${proj.title}`}
        className="h-48 w-32 md:w-[600px] md:h-auto rounded-md relative m-5 shadow-lg shadow-neutral-950 overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
        style={{zIndex: open ? 100 : 1}}
      >
        <Image
          className="object-cover h-full w-full"
          src={proj.photo}
          alt={`${proj.title}`}
        />
      </motion.div>
      <AnimatePresence>
        {open === true ? (
          <motion.div
            layout
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10 p-4"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              layoutId={`card-${proj.title}`}
              className="relative rounded-lg shadow-xl w-4/5"
              onClick={(e) => e.stopPropagation()}
              style={{ position: "absolute", zIndex: 100 }}
            >
              <h2 className="absolute inset-0 p-3 bg-black h-fit w-full text-2xl font-bold">{proj.title}</h2>
              <motion.img
                className="rounded"
                src={proj.photo}
                alt={`${proj.title}`}
              />
              <p className="absolute bottom-0 left-0 h-fit w-full max-h-[50%] overflow-auto bg-black opacity-70">{proj.description}</p>
            </motion.div>
          </motion.div>
        ):(<></>)}
      </AnimatePresence>
    </>
  );
}

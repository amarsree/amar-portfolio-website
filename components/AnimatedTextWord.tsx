"use client"
import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text, fontSize }: { text: string, fontSize: string }) => {
    const words = text.split(" ");
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { 
                staggerChildren: 0.08,
                delayChildren: 0.02 * i,
                ease: "easeOut"
            },
        }),
    };
    const child = {
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                type: "spring", 
                damping: 20,
                stiffness: 200
            } 
        },
        hidden: { 
            opacity: 0, 
            x: 20, 
            transition: { 
                type: "spring", 
                damping: 20,
                stiffness: 200
            } 
        },
    };

    return (
        <motion.div style={{ overflow: "hidden", display: "flex", fontSize:fontSize }} variants={container} initial="hidden" animate="visible">
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "5px" }} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextWord;

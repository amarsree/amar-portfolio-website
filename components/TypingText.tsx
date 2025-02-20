import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function TypingText({ text, textClasses }: { text: string, textClasses: string }) {
    const baseText = text;
    const count = useMotionValue(0);
    
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => baseText.slice(0, latest));

    useEffect(() => {
        const controls = animate(count, baseText.length, {
            type: "tween",
            duration: 2,
            ease: "easeOut",
            delay: 0.2
        });

        return controls.stop;
    }, [baseText.length]);

    return (
        <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.span className={textClasses}>{displayText}</motion.span>
        </motion.span>
    );
}   

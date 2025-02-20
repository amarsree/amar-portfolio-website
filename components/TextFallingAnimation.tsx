import { motion } from 'framer-motion';


const fallAnimation = {
    initial: { 
        y: -100, 
        opacity: 0 
    },
    animate: { 
        y: 0, 
        opacity: 1,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 1
        }
    },
    exit: { 
        y: 100, 
        opacity: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 1
        }
    }
};


const TextFallingAnimation = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div 
            className="falling-object" 
            variants={fallAnimation} 
            initial="initial" 
            animate="animate" 
            exit="exit"
        >
            {children}
        </motion.div>
    );
};
export default TextFallingAnimation;

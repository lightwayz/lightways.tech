export const smallMotion = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.97 },
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
    },
};

export const mediumMotion = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
    },
};

export const largeMotion = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
    },
};
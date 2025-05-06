import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="w-full h-screen flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hiệu ứng logo scale lên xuống */}
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-light-orange text-5xl font-bold"
      >
        Hiiiiii 🌟
      </motion.div>

      {/* Thanh loading bar */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "80%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="mt-6 h-2 bg-light-orange rounded-full"
        style={{ width: "80%", maxWidth: "300px" }}
      ></motion.div>
    </motion.div>
  );
};

export default LoadingScreen;

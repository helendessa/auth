import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className='min-h-screen bg-[#fbe343] flex items-center justify-center relative overflow-hidden'>
            {/* Simple Loading Spinner */}
            <motion.div
                className='w-16 h-16 border-4 border-t-4 border-t-[#4764fd] border-[#151e4b] rounded-full'
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default LoadingSpinner;
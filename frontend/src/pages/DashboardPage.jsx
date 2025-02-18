import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const DashboardPage = () => {
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    };
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className='max-w-md w-full mx-auto mt-10 p-8 bg-white bg-opacity-100 backdrop-filter backdrop-blur-xl rounded-xl shadow-2xl border border-gray-300'
        >
            <h2 className='text-3xl font-bold mb-6 text-center bg-clip-text text-[#151e4b]'>
                Painel
            </h2>

            <div className='space-y-6'>
                <motion.div
                    className='p-4 bg-yellow-100 bg-opacity-50 rounded-lg border border-gray-900'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className='text-xl font-semibold text-[#4764fd] mb-3'>Informações do Perfil</h3>
                    <p className='text-gray-900'><span className='font-bold'>Nome:</span> {user.name}</p>
                    <p className='text-gray-900'><span className='font-bold'>Email:</span> {user.email}</p>
                </motion.div>
                <motion.div
                    className='p-4 bg-yellow-100 bg-opacity-50 rounded-lg border border-gray-900'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className='text-xl font-semibold text-[#4764fd] mb-3'>Atividade da Conta</h3>
                    <p className='text-gray-900'>
                        <span className='font-bold'>Entrou: </span>
                        {new Date(user.createdAt).toLocaleDateString("pt-BR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <p className='text-gray-900'>
                        <span className='font-bold'>Último Login: </span>
                        {formatDate(user.lastLogin)}
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className='mt-4'
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className='w-full py-3 px-4 bg-[#4764fd] text-white font-bold rounded-lg shadow-lg hover:bg-[#0f143a] focus:outline-none focus:ring-2 focus:ring-[#4764fd] focus:ring-offset-2 focus:ring-offset-white'
                >
                    Sair
                </motion.button>
            </motion.div>
        </motion.div>
    );
};
export default DashboardPage;
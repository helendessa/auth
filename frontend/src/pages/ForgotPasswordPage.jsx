import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { isLoading, forgotPassword } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await forgotPassword(email);
        setIsSubmitted(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-md w-full bg-white bg-opacity-100 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
        >
            <div className='p-8'>
                <h2 className='text-3xl font-bold mb-6 text-center bg-clip-text text-[#151e4b]'>
                    Esqueceu a Senha
                </h2>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                        <p className='text-gray-900 mb-6 text-center'>
                            Insira seu endereço de e-mail e enviaremos um link para redefinir sua senha.
                        </p>
                        <Input
                            icon={Mail}
                            type='email'
                            placeholder='Endereço de E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className='w-full py-3 px-4 bg-[#4764fd] text-white font-bold rounded-lg shadow-lg hover:bg-[#0f143a] focus:outline-none focus:ring-2 focus:ring-[#4764fd] focus:ring-offset-2 focus:ring-offset-white transition duration-200'
                            type='submit'
                        >
                            {isLoading ? <Loader className='size-6 animate-spin mx-auto' /> : "Enviar Link de Redefinição"}
                        </motion.button>
                    </form>
                ) : (
                    <div className='text-center'>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className='w-16 h-16 bg-[#4764fd] rounded-full flex items-center justify-center mx-auto mb-4'
                        >
                            <Mail className='h-8 w-8 text-white' />
                        </motion.div>
                        <p className='text-gray-900 mb-6'>
                            Se uma conta existir para {email}, você receberá um link para redefinir sua senha em breve.
                        </p>
                    </div>
                )}
            </div>

            <div className='px-8 py-4 bg-yellow-200 flex justify-center'>
                <Link to={"/login"} className='text-sm text-[#4764fd] hover:underline flex items-center'>
                    <ArrowLeft className='h-4 w-4 mr-2' /> Voltar para Login
                </Link>
            </div>
        </motion.div>
    );
};
export default ForgotPasswordPage;
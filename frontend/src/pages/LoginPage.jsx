import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, EyeOff, Eye, Loader } from 'lucide-react';
import Input from '../components/Input';
import { useAuthStore } from '../store/authStore';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fbe343' }}>
      <div className="max-w-md w-full bg-white bg-opacity-100 backdrop-filter backdrop-blur-xl
      rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <h2 
            className="text-3xl font-bold mb-6 text-center bg-clip-text text-[#151e4b]">
            Entrar
          </h2>
          <form onSubmit={handleLogin}>
            <Input 
              icon={Mail}
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              icon={Lock}
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleIcon={showPassword ? EyeOff : Eye}
              onToggle={() => setShowPassword(!showPassword)}
            />            
            <div>
              <Link to="/forgot-password" className="text-[#4764fd] text-sm hover:underline">Esqueceu a senha?</Link>
            </div>
            {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
            <motion.button
              className="mt-5 w-full py-3 px-4 bg-[#4764fd] text-white rounded-lg font-bold
              shadow-lg hover:shadow-xl transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Loader className='w-6 h-6 animate-spin text-center mx-auto'/> : 'Entrar'}
            </motion.button>
          </form>
        </div>
        <div className='px-8 py-4 bg-yellow-200 text-gray-500 flex justify-center'>
          <p>
            Ainda não tem uma conta?{" "}
            <Link to={"/signup"} className="text-[#4764fd]">Cadastre-se.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
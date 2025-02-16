import { useState } from 'react'
import Input from '../components/Input';
import { User, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignUpPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md w-full bg-white bg-opacity-900 backdrop-filter backdrop-blur-xl
    rounded-2xl shadow-xl overflow-hidden"
    >
        <div className="p-8">
          <h2 
          className="text-3xl font-bold mb-6 text-center bg-clip-text text-[#151e4b]">
            Crie uma conta
          </h2>
          <form onSubmit={handleSignUp}>
            <Input 
              icon={User}
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input 
              icon={Mail}
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              icon={Lock}
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Password strength meter */}
            <motion.button
            className="mt-5 w-full py-3 px-4 bg-[#4764fd] text-white rounded-lg font-bold
            shadow-lg hover:shadow-xl transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            >
            Cadastrar
            </motion.button>
          </form>
        </div>
        <div className='px-8 py-4 bg-yellow-200 text-gray-500 flex justify-center'>
          <p>
            Já tem uma conta?{" "}
            <Link to={"/login"} className="text-[#4764fd]">Entre.</Link>
          </p>
          
        </div>
    </div>
  )
}

export default SignUpPage;
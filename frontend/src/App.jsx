import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import MouseFollower from "./components/MouseFollower";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
      <FloatingShape src='./images/green-paw.png' size='w-64 h-64' top='-5%' left='10%' delay={0} />
      <FloatingShape src='./images/green-paw.png' size='w-48 h-48' top='70%' left='80%' delay={5} />
      <FloatingShape src='./images/green-paw.png' size='w-32 h-32' top='40%' left='-10%' delay={2} />
      <MouseFollower src='./images/green-paw.png' size='w-5 h-5' />

      <Routes>
        <Route path='/' element={"Home"} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App;
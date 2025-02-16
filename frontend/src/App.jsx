import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import MouseFollower from "./components/MouseFollower";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className='min-h-screen bg-[#fbe343] flex items-center justify-center relative overflow-hidden'>
      <FloatingShape 
        src='./images/blue-paw.png' 
        size='w-64 h-64' 
        top='-5%' 
        left='10%' 
        delay={0} 
        initialRotate={0} 
      />
      <FloatingShape 
        src='./images/blue-paw.png' 
        size='w-48 h-48' 
        top='40%' 
        left='20%' 
        delay={4} 
        initialRotate={180} 
      />
      <FloatingShape 
        src='./images/blue-paw.png' 
        size='w-32 h-32' 
        top='60%' 
        left='40%' 
        delay={5} 
        initialRotate={225} 
      />
       <FloatingShape 
        src='./images/blue-paw.png' 
        size='w-56 h-56' 
        top='20%' 
        left='70%' 
        delay={2} 
        initialRotate={90} 
      />
      <FloatingShape 
        src='./images/blue-paw.png' 
        size='w-40 h-40' 
        top='80%' 
        left='85%' 
        delay={3} 
        initialRotate={135} 
      />
      <FloatingShape 
        src='./images/blue-paw.png' 
        size='w-24 h-24' 
        top='75%' 
        left='5%' 
        delay={1} 
        initialRotate={45} 
      />
      <MouseFollower src='./images/blue-paw.png' size='w-5 h-5' />

      <Routes>
        <Route path='/' element={"Home"} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}
export default App;
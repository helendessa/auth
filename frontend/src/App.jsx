import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import MouseFollower from "./components/MouseFollower";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import { useAuthStore } from "./store/authStore";
import DashboardPage from "./pages/DashboardPage";
import LoadingSpinner from "./components/LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};

function App() {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <LoadingSpinner />;
  }

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
        <Route path='/' element={<ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>} />
        <Route path='/signup' element={
          <RedirectAuthenticatedUser>
            <SignUpPage />
          </RedirectAuthenticatedUser>
        } />
        <Route path='/login' element={<RedirectAuthenticatedUser>
          <LoginPage />
        </RedirectAuthenticatedUser>} />
        <Route path='/verify-email' element={<EmailVerificationPage />} />
      </Routes>
    </div>
  )
}
export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Header from './components/Header';
import { AuthContextProvider } from './components/AuthContext';
import Home from './components/Home';
import EmailComposer from './components/EmailComposer';


const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/EmailComposer" element={<EmailComposer />} />
          </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App; 


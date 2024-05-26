// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navabr';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import AddProperty from './components/AddProperty';
import PropertyList from './components/PropertyList';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/c" element={<PropertyList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

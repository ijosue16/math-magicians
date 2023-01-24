import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './home/home';
import Qoute from './qoute/qoute';
import NavBar from './Navigation/Navbar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/qoute" element={<Qoute />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;

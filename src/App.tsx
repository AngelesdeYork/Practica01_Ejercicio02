import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Combo from './Combo';
import Factura from './Factura';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/combos">Combos</Link>
            </li>
            <li>
              <Link to="/factura">Factura</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/combos" element={<Combo />} />
          <Route path="/factura" element={<Factura />} />
          <Route path="/" element={<div>Bienvenido a la aplicación</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




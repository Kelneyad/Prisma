"use client"

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import Register from './components/register'

export default function Home() {
  const [categoryArray, setCategoryArray] = useState([]);
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<Register categoryArray={categoryArray} setCategoryArray={setCategoryArray} />} />
        </Routes>
      </Router>
    </div>
  );
}

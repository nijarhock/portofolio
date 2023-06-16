import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './components/Layout'
import Portofolio from './pages/Portofolio'
import ReactDOM from "react-dom/client";
import Skill from './pages/Skill'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/skill" element={<Layout><Skill /></Layout>} />
        <Route path="/portofolio" element={<Layout><Portofolio /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

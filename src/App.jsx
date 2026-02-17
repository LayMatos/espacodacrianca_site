import { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Rocket } from "./components";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Turmas from "./pages/Turmas";
import { globalCSS } from "./styles/global.css";

/* ══════════════════════════════════════════════
   APP
══════════════════════════════════════════════ */
export default function App() {
  const [flyers, setFlyers] = useState([]);
  const flyId = useRef(0);

  const launchRocket = () => {
    const id = ++flyId.current;
    const left = Math.random() * 60 + 10;
    setFlyers(f => [...f, {id, left}]);
    setTimeout(() => setFlyers(f => f.filter(x=>x.id!==id)), 2400);
  };

  return (
    <>
      <style>{globalCSS}</style>
      
      {/* FLYING ROCKETS */}
      {flyers.map(f => (
        <div key={f.id} className="fly-rocket" style={{"--fx":`${f.left}vw`}}>
          <Rocket size={1.2} angle={-20} />
        </div>
      ))}

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/turmas" element={<Turmas />} />
        </Routes>
      </Layout>

      {/* LAUNCH ROCKET */}
      <button className="launch-btn" onClick={launchRocket} title="🚀 Lançar foguete!">
        🚀
      </button>
    </>
  );
}

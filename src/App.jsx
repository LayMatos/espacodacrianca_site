import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Turmas from "./pages/Turmas";
import { globalCSS } from "./styles/global.css";

/* ══════════════════════════════════════════════
   APP
══════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <style>{globalCSS}</style>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/turmas" element={<Turmas />} />
        </Routes>
      </Layout>
    </>
  );
}

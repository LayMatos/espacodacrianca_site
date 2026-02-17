import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo } from "./index";
import { C, MENU_ITEMS, CONTACT_INFO } from "../data/constants";

const Layout = ({ children }) => {
  const [sc, setSc] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    // Atualizar seção ativa baseada na rota
    const path = location.pathname;
    if (path === "/" || path === "/home") {
      setActiveSection("home");
    } else if (path === "/quem-somos") {
      setActiveSection("historia");
    } else {
      setActiveSection(path.substring(1));
    }
  }, [location]);

  const go = (id) => {
    if (id === "historia" || id === "quem-somos") {
      navigate("/quem-somos");
      window.scrollTo(0, 0);
    } else if (id === "turmas") {
      navigate("/turmas");
      window.scrollTo(0, 0);
    } else if (id === "home") {
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setOpen(false);
  };

  const agendarVisita = () => {
    const mensagem = encodeURIComponent("olá, gostaria de agenda uma visita guiada");
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${mensagem}`;
    window.open(whatsappUrl, '_blank');
    setOpen(false);
  };

  return (
    <div style={{width:"100%",maxWidth:"100vw",overflowX:"hidden",position:"relative"}}>
      {/* NAV */}
      <nav className={`nav${sc?" sc":""}`}>
        <a className="brand" href="/" onClick={e=>{e.preventDefault();navigate("/");}}>
          <Logo size={0.35} style={{height:"80px"}} />
        </a>
        <ul className="links">
          {MENU_ITEMS.map(item=>(
            <li key={item.id} style={{listStyle:"none"}}>
              <a 
                className={`nav-item${activeSection === item.id ? " active" : ""}`}
                href="#" 
                onClick={e=>{
                  e.preventDefault();
                  go(item.id);
                }}
                style={{
                  "--item-color": item.color
                }}
              >
                <span className="nav-item-icon" style={{color:item.color}}>{item.icon}</span>
                <span className="nav-item-text" style={{color:item.color}}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="pill" onClick={agendarVisita}>Agende uma Visita</button>
          <button className="ham" onClick={()=>setOpen(!open)} aria-label="menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={C.azul} strokeWidth="2.5" strokeLinecap="round">
              {open?<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                   :<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </nav>
      <div className={`drawer${open?" on":""}`}>
        {MENU_ITEMS.map(item=>(
          <a 
            key={item.id} 
            href="#" 
            onClick={e=>{
              e.preventDefault();
              go(item.id);
              setOpen(false);
            }}
            className={`drawer-item${activeSection === item.id ? " active" : ""}`}
            style={{color:item.color}}
          >
            <span style={{fontSize:"24px",marginRight:"12px"}}>{item.icon}</span>
            {item.label}
          </a>
        ))}
        <button className="pill" onClick={agendarVisita}>Agende uma Visita</button>
      </div>

      {/* CONTEÚDO */}
      {children}

      {/* FOOTER */}
      <footer>
        <div style={{marginBottom:8}}>
          © {new Date().getFullYear()} Espaço da Criança – Berçário e Escola. Todos os direitos reservados.
        </div>
        <div>Desenvolvido com <em>❤️</em> para as crianças</div>
      </footer>

      {/* WHATSAPP */}
      <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="wa" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="white" width="30" height="30">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default Layout;


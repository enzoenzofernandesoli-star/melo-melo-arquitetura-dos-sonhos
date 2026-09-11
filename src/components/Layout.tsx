import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { empresa } from "../data/empresa";
import { ExperienciaMotion } from "./ExperienciaMotion";

const links = [
  ["/", "Início"], ["/imoveis", "Imóveis"], ["/empresa", "A empresa"],
  ["/anuncie", "Anuncie seu imóvel"], ["/contato", "Contato"],
];

export function Layout() {
  const [aberto, setAberto] = useState(false);
  return (
    <div className="site-shell">
      <ExperienciaMotion />
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="header">
        <Link className="brand" to="/" aria-label="Melo & Melo — página inicial">
          <img src="/assets/marca/logo.png" alt="" />
          <span><strong>Melo & Melo</strong><small>Consultoria Imobiliária</small></span>
        </Link>
        <button className="menu-button" type="button" aria-label={aberto ? "Fechar menu" : "Abrir menu"} aria-expanded={aberto} onClick={() => setAberto(!aberto)}>
          {aberto ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav className={aberto ? "nav nav--open" : "nav"} aria-label="Navegação principal">
          {links.map(([href, label]) => <NavLink key={href} to={href} onClick={() => setAberto(false)}>{label}</NavLink>)}
        </nav>
      </header>
      <main id="conteudo"><Outlet /></main>
      <footer className="footer">
        <div><strong>{empresa.nome}</strong><p>{empresa.slogan}</p></div>
        <div><strong>Contato</strong><p>{empresa.telefones.join(" · ")}<br />{empresa.email}</p></div>
        <div><strong>Registro</strong><p>CRECI {empresa.creci.join(" · ")}<br />Bragança Paulista e região</p></div>
      </footer>
    </div>
  );
}

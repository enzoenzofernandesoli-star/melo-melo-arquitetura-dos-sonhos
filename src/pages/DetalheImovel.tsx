import { ArrowLeft, Bath, BedDouble, CarFront, Check, Maximize2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { DemoForm } from "../components/DemoForm";
import { imoveis } from "../data/imoveis";

export function DetalheImovel() {
  const { codigo } = useParams();
  const imovel = imoveis.find((item) => item.codigo === codigo);
  if (!imovel) return <section className="section not-found"><h1>Imóvel não encontrado.</h1><Link className="button" to="/imoveis">Voltar ao catálogo</Link></section>;
  return <>
    <section className="property-hero section"><Link to="/imoveis"><ArrowLeft aria-hidden="true" /> Voltar aos imóveis</Link><div><span className="eyebrow">{imovel.finalidade} · Cód. {imovel.codigo}</span><h1>{imovel.titulo}</h1><p>{imovel.bairro}, {imovel.cidade}</p><strong>{imovel.precoTexto}</strong></div></section>
    <section className="gallery section"><div className="gallery-main"><img src={imovel.fotos[0]} alt={`Vista principal do imóvel ${imovel.codigo}`} /></div>{imovel.fotos.slice(1).map((foto, index) => <img key={foto} src={foto} alt={`Vista ${index + 2} do imóvel ${imovel.codigo}`} />)}</section>
    <section className="property-content section"><div><ul className="detail-facts">{imovel.area && <li><Maximize2 aria-hidden="true" /><strong>{imovel.area} m²</strong><span>Área</span></li>}{(imovel.dormitorios || imovel.suites) && <li><BedDouble aria-hidden="true" /><strong>{imovel.dormitorios ?? imovel.suites}</strong><span>Quartos</span></li>}{imovel.banheiros && <li><Bath aria-hidden="true" /><strong>{imovel.banheiros}</strong><span>Banheiros</span></li>}{imovel.vagas && <li><CarFront aria-hidden="true" /><strong>{imovel.vagas}</strong><span>Vagas</span></li>}</ul><h2>Sobre este imóvel</h2><p>{imovel.descricao}</p><h2>Características</h2><ul className="feature-list">{imovel.caracteristicas.map(c => <li key={c}><Check aria-hidden="true" />{c}</li>)}</ul></div><aside className="contact-card"><h2>Agende uma visita</h2><p>Preencha para experimentar fluxo demonstrativo.</p><DemoForm contexto="visita" /></aside></section>
  </>;
}

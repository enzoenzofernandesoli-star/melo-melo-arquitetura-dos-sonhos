import { Compass, Eye, HeartHandshake, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { empresa } from "../data/empresa";

export function Empresa() {
  return <>
    <section className="page-intro section"><span className="eyebrow">Desde {empresa.fundacao}</span><h1>Conhecimento local. Relações que atravessam mudanças.</h1><p>Consultoria imobiliária em Bragança Paulista e região, com atendimento próximo em cada etapa.</p></section>
    <section className="story-placeholder section"><div>Área reservada para fotografia real do escritório ou equipe</div><article><span className="eyebrow">Nossa história</span><h2>Mais de uma década conectando pessoas ao lugar ideal.</h2><p>A Melo & Melo atua em compra, venda, locação, administração e avaliação de imóveis. Cada atendimento começa pela necessidade real de quem chega.</p><p><strong>Propósito:</strong> ser canal de bênção na vida de pessoas.</p></article></section>
    <section className="principles section"><article><Compass aria-hidden="true" /><h2>Missão</h2><p>Oferecer soluções imobiliárias sob medida para compra, venda e locação.</p></article><article><Eye aria-hidden="true" /><h2>Visão</h2><p>Ser a principal escolha em confiabilidade e expertise na região.</p></article><article><Scale aria-hidden="true" /><h2>Valores</h2><p>Transparência, ética, inovação e excelência.</p></article><article><HeartHandshake aria-hidden="true" /><h2>Atendimento</h2><p>Relações personalizadas, claras e próximas.</p></article></section>
    <section className="section final-cta"><h2>Vamos encontrar seu próximo lugar?</h2><Link className="button" to="/contato">Falar com equipe</Link></section>
  </>;
}

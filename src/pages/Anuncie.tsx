import { BarChart3, Camera, FileCheck2, SearchCheck } from "lucide-react";
import { DemoForm } from "../components/DemoForm";

const beneficios = [
  [Camera, "Visibilidade ampliada", "Apresentação cuidadosa nos canais da imobiliária."],
  [BarChart3, "Avaliação precisa", "Leitura de mercado para posicionar seu imóvel."],
  [SearchCheck, "Marketing estratégico", "Divulgação orientada ao perfil certo de interessado."],
  [FileCheck2, "Apoio profissional", "Acompanhamento claro durante toda negociação."],
];
export function Anuncie() {
  return <>
    <section className="page-intro section"><span className="eyebrow">Venda ou locação</span><h1>Seu imóvel merece encontrar a pessoa certa.</h1><p>A Melo & Melo cuida da apresentação, divulgação e negociação.</p></section>
    <section className="benefits section">{beneficios.map(([Icone, titulo, texto]) => <article key={String(titulo)}><Icone aria-hidden="true" /><h2>{String(titulo)}</h2><p>{String(texto)}</p></article>)}</section>
    <section className="process section"><span className="eyebrow">Como funciona</span><h2>Um processo claro do início ao fechamento.</h2><ol><li><span>01</span><div><strong>Conte sobre o imóvel</strong><p>Tipo, localização e objetivo.</p></div></li><li><span>02</span><div><strong>Receba avaliação</strong><p>Equipe analisa posicionamento e próximos passos.</p></div></li><li><span>03</span><div><strong>Prepare divulgação</strong><p>Apresentação e estratégia entram em ação.</p></div></li><li><span>04</span><div><strong>Acompanhe negociação</strong><p>Suporte até conclusão.</p></div></li></ol></section>
    <section className="form-section section"><div><span className="eyebrow">Comece por aqui</span><h2>Cadastre seu imóvel.</h2><p>Fluxo demonstrativo. Nenhum dado será enviado.</p></div><DemoForm contexto="anuncio" /></section>
  </>;
}

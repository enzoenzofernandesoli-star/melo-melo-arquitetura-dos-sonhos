import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { ImovelCard } from "../components/ImovelCard";
import { imoveis } from "../data/imoveis";
import type { FiltroImoveis } from "../types";

const inicial: FiltroImoveis = { termo: "", finalidade: "Todas", tipo: "Todos", cidade: "Todas", dormitorios: "", precoMaximo: "" };
export function Imoveis() {
  const [filtros, setFiltros] = useState(inicial);
  const resultados = useMemo(() => imoveis.filter((i) => {
    const texto = `${i.titulo} ${i.bairro} ${i.cidade} ${i.codigo}`.toLowerCase();
    return (!filtros.termo || texto.includes(filtros.termo.toLowerCase())) &&
      (filtros.finalidade === "Todas" || i.finalidade === filtros.finalidade) &&
      (filtros.tipo === "Todos" || i.tipo === filtros.tipo) &&
      (filtros.cidade === "Todas" || i.cidade === filtros.cidade) &&
      (!filtros.dormitorios || (i.dormitorios ?? i.suites ?? 0) >= Number(filtros.dormitorios)) &&
      (!filtros.precoMaximo || i.preco <= Number(filtros.precoMaximo));
  }), [filtros]);
  const atualizar = (campo: keyof FiltroImoveis, valor: string) => setFiltros((atual) => ({ ...atual, [campo]: valor }));
  return <>
    <section className="page-intro section"><span className="eyebrow">Catálogo demonstrativo</span><h1>Encontre espaço para sua próxima história.</h1><p>Amostra funcional com imóveis reais da Melo & Melo.</p></section>
    <section className="catalog-layout section">
      <aside className="filters"><h2><SlidersHorizontal aria-hidden="true" /> Filtros</h2><label>Busca<input value={filtros.termo} onChange={(e) => atualizar("termo", e.target.value)} placeholder="Bairro, cidade ou código" /></label><label>Finalidade<select value={filtros.finalidade} onChange={(e) => atualizar("finalidade", e.target.value)}><option>Todas</option><option>Venda</option><option>Locação</option></select></label><label>Tipo<select value={filtros.tipo} onChange={(e) => atualizar("tipo", e.target.value)}><option>Todos</option>{[...new Set(imoveis.map(i => i.tipo))].map(t => <option key={t}>{t}</option>)}</select></label><label>Cidade<select value={filtros.cidade} onChange={(e) => atualizar("cidade", e.target.value)}><option>Todas</option>{[...new Set(imoveis.map(i => i.cidade))].map(c => <option key={c}>{c}</option>)}</select></label><label>Dormitórios mínimos<select value={filtros.dormitorios} onChange={(e) => atualizar("dormitorios", e.target.value)}><option value="">Qualquer</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select></label><label>Preço máximo<input type="number" min="0" value={filtros.precoMaximo} onChange={(e) => atualizar("precoMaximo", e.target.value)} placeholder="Ex.: 800000" /></label><button type="button" className="button button--ghost" onClick={() => setFiltros(inicial)}>Limpar filtros</button></aside>
      <div><div className="results-heading"><h2>{resultados.length} {resultados.length === 1 ? "imóvel" : "imóveis"}</h2><Search aria-hidden="true" /></div>{resultados.length ? <div className="property-grid">{resultados.map(i => <ImovelCard key={i.codigo} imovel={i} />)}</div> : <div className="empty-state"><h2>Nenhum imóvel encontrado.</h2><p>Ajuste os filtros para ampliar sua busca.</p><button className="button" type="button" onClick={() => setFiltros(inicial)}>Limpar filtros</button></div>}</div>
    </section>
  </>;
}

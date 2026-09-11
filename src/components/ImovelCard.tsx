import { ArrowUpRight, BedDouble, CarFront, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { Imovel } from "../types";

export function ImovelCard({ imovel }: { imovel: Imovel }) {
  return (
    <article className="property-card">
      <div className="image-placeholder">
        <img src={imovel.fotos[0]} alt={`Vista do imóvel ${imovel.codigo} em ${imovel.bairro}`} loading="lazy" />
        <span>{imovel.finalidade}</span>
      </div>
      <div className="property-card__body">
        <small>Cód. {imovel.codigo} · {imovel.tipo}</small>
        <h3>{imovel.titulo}</h3>
        <p>{imovel.bairro}, {imovel.cidade}</p>
        <ul className="facts" aria-label="Características principais">
          {imovel.area && <li><Maximize2 aria-hidden="true" />{imovel.area} m²</li>}
          {(imovel.dormitorios || imovel.suites) && <li><BedDouble aria-hidden="true" />{imovel.dormitorios ?? imovel.suites} quartos</li>}
          {imovel.vagas && <li><CarFront aria-hidden="true" />{imovel.vagas} vagas</li>}
        </ul>
        <div className="property-card__footer"><strong>{imovel.precoTexto}</strong><Link to={`/imoveis/${imovel.codigo}`}>Ver imóvel <ArrowUpRight aria-hidden="true" /></Link></div>
      </div>
    </article>
  );
}

import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { DemoForm } from "../components/DemoForm";
import { empresa } from "../data/empresa";

export function Contato() {
  return <>
    <section className="page-intro section"><span className="eyebrow">Fale com a Melo & Melo</span><h1>Todo bom negócio começa com uma conversa clara.</h1></section>
    <section className="contact-layout section"><div className="contact-details"><article><MapPin aria-hidden="true" /><div><strong>Endereço</strong><p>{empresa.endereco}</p></div></article><article><Phone aria-hidden="true" /><div><strong>Telefones</strong><p>{empresa.telefones.join(" · ")}</p></div></article><article><Mail aria-hidden="true" /><div><strong>E-mail</strong><p>{empresa.email}</p></div></article><article><Clock3 aria-hidden="true" /><div><strong>Atendimento</strong><p>{empresa.horario}</p></div></article><div className="map-placeholder">Mapa demonstrativo<br /><small>Perfil público ainda aparece com nome divergente [CONFIRMAR]</small></div></div><div><h2>Envie uma mensagem</h2><DemoForm contexto="contato" /></div></section>
  </>;
}

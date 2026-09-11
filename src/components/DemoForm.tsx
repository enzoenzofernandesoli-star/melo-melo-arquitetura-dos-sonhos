import { useState, type FormEvent } from "react";
import type { EstadoFormulario } from "../types";

export function DemoForm({ contexto }: { contexto: "contato" | "visita" | "anuncio" }) {
  const [estado, setEstado] = useState<EstadoFormulario>("inicial");
  function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEstado("enviando");
    window.setTimeout(() => setEstado("sucesso"), 550);
  }
  if (estado === "sucesso") return <div className="form-success" role="status"><strong>Demonstração concluída.</strong><p>Nenhum dado foi enviado. Em versão real, equipe receberia sua solicitação.</p><button type="button" onClick={() => setEstado("inicial")}>Enviar outra</button></div>;
  return (
    <form className="demo-form" onSubmit={enviar}>
      <div><label htmlFor={`${contexto}-nome`}>Nome</label><input id={`${contexto}-nome`} name="nome" required autoComplete="name" /></div>
      <div><label htmlFor={`${contexto}-telefone`}>Telefone</label><input id={`${contexto}-telefone`} name="telefone" required autoComplete="tel" /></div>
      <div><label htmlFor={`${contexto}-email`}>E-mail</label><input id={`${contexto}-email`} name="email" type="email" required autoComplete="email" /></div>
      {contexto === "anuncio" && <div><label htmlFor="finalidade">Quero</label><select id="finalidade" name="finalidade"><option>Vender meu imóvel</option><option>Alugar meu imóvel</option></select></div>}
      <div className="field-wide"><label htmlFor={`${contexto}-mensagem`}>Mensagem</label><textarea id={`${contexto}-mensagem`} name="mensagem" rows={4} required /></div>
      <button className="button field-wide" type="submit" disabled={estado === "enviando"}>{estado === "enviando" ? "Enviando demonstração…" : "Enviar demonstração"}</button>
      <small className="field-wide">Modelo local: nenhuma informação será transmitida.</small>
    </form>
  );
}

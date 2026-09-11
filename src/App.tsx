import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Anuncie } from "./pages/Anuncie";
import { Contato } from "./pages/Contato";
import { DetalheImovel } from "./pages/DetalheImovel";
import { Empresa } from "./pages/Empresa";
import { Home } from "./pages/Home";
import { Imoveis } from "./pages/Imoveis";

export default function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}><Route path="/" element={<Home />} /><Route path="/imoveis" element={<Imoveis />} /><Route path="/imoveis/:codigo" element={<DetalheImovel />} /><Route path="/empresa" element={<Empresa />} /><Route path="/anuncie" element={<Anuncie />} /><Route path="/contato" element={<Contato />} /><Route path="*" element={<section className="section not-found"><h1>Página não encontrada.</h1></section>} /></Route></Routes></BrowserRouter>;
}

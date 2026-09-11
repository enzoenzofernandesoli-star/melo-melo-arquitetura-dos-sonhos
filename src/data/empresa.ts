import type { DadosEmpresa, Depoimento } from "../types";

export const empresa: DadosEmpresa = {
  nome: "Melo & Melo Consultoria Imobiliária",
  slogan: "Não é sobre imóveis. É sobre sonhos.",
  fundacao: 2015,
  creci: ["031160-J", "136645-F"],
  telefones: ["(11) 2473-9199", "(11) 99878-8641"],
  email: "meloemeloimoveis@hotmail.com",
  endereco: "Avenida José Gomes da Rocha Leal, 752 — Centro, Bragança Paulista/SP",
  horario: "Segunda a sexta, das 9h às 17h [CONFIRMAR]",
  instagram: "@meloemeloimoveis",
};

export const servicos = [
  "Compra e venda de imóveis",
  "Locação e administração",
  "Avaliação de imóveis",
  "Consultoria em investimentos",
  "Assessoria jurídica",
  "Obras, reformas e reparos",
];

export const depoimentos: Depoimento[] = [
  { autor: "Camila Rosa Avila", data: "17/08/2024", texto: "Muito atenciosos e parceiros durante todo o processo, desde a visita até o fechamento do contrato de locação! Recomendo!" },
  { autor: "Marcio Brandine", data: "25/07/2024", texto: "Confiança e respeito foi o que a empresa me passou ao realizarmos uma transação." },
  { autor: "Raquel Macedo", data: "06/06/2024", texto: "Ótimos profissionais e agilidade no processo! Parabéns." },
  { autor: "Isabela Camargo", data: "22/08/2024", texto: "Excelentes profissionais, sempre muito educados e prestativos, com profissionalismo e dedicação." },
];

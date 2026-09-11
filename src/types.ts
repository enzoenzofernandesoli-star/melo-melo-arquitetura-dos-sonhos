export type Finalidade = "Venda" | "Locação";

export interface Imovel {
  codigo: string;
  titulo: string;
  tipo: string;
  finalidade: Finalidade;
  preco: number;
  precoTexto: string;
  bairro: string;
  cidade: string;
  area?: number;
  dormitorios?: number;
  suites?: number;
  banheiros?: number;
  vagas?: number;
  caracteristicas: string[];
  descricao: string;
  fotos: string[];
  destaque?: boolean;
}

export interface FiltroImoveis {
  termo: string;
  finalidade: "Todas" | Finalidade;
  tipo: string;
  cidade: string;
  dormitorios: string;
  precoMaximo: string;
}

export interface DadosEmpresa {
  nome: string;
  slogan: string;
  fundacao: number;
  creci: string[];
  telefones: string[];
  email: string;
  endereco: string;
  horario: string;
  instagram: string;
}

export interface Depoimento {
  autor: string;
  data: string;
  texto: string;
}

export type EstadoFormulario = "inicial" | "enviando" | "sucesso" | "erro";

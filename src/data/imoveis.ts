import type { Imovel } from "../types";

export const imoveis: Imovel[] = [
  {
    codigo: "2795", titulo: "Casa contemporânea no Portal de Bragança", tipo: "Casa em Condomínio", finalidade: "Venda", preco: 7500000, precoTexto: "R$ 7.500.000", bairro: "Condomínio Portal de Bragança", cidade: "Bragança Paulista", area: 420, suites: 4, banheiros: 6, vagas: 3, destaque: true,
    caracteristicas: ["Piscina", "Espaço gourmet", "Automação", "Aquecimento solar"],
    descricao: "Residência mobiliada com quatro suítes, ambientes integrados, espaço gourmet, piscina e vista aberta em condomínio clube.",
    fotos: ["/assets/imoveis/2795-1.jpg", "/assets/imoveis/2795-2.jpg", "/assets/imoveis/2795-3.jpg"],
  },
  {
    codigo: "2756", titulo: "Apartamento Arthouse Double Sky", tipo: "Apartamento", finalidade: "Venda", preco: 2990000, precoTexto: "R$ 2.990.000", bairro: "Taquaral", cidade: "Campinas", area: 189, suites: 3, banheiros: 5, vagas: 3, destaque: true,
    caracteristicas: ["Vista 180°", "Elevador privativo", "Mobiliado", "Espaço gourmet"],
    descricao: "Apartamento de alto padrão com três suítes, vista panorâmica e projeto completo de interiores.",
    fotos: ["/assets/imoveis/2756-1.jpg"],
  },
  {
    codigo: "2963", titulo: "Chácara no Recanto Amapola", tipo: "Chácara", finalidade: "Venda", preco: 2800000, precoTexto: "R$ 2.800.000", bairro: "Recanto Amapola", cidade: "Bragança Paulista", area: 2000, dormitorios: 4, suites: 4, banheiros: 5, vagas: 8, destaque: true,
    caracteristicas: ["Piscina", "Sauna", "Salão de jogos", "Espaço gourmet"],
    descricao: "Chácara ampla com quatro suítes, áreas sociais, lazer completo e oito vagas.",
    fotos: ["/assets/imoveis/2963-1.jpeg"],
  },
  {
    codigo: "2652", titulo: "Casa ampla no Jardim América", tipo: "Casa", finalidade: "Locação", preco: 6500, precoTexto: "R$ 6.500/mês", bairro: "Jardim América", cidade: "Bragança Paulista", area: 304, dormitorios: 3, suites: 1, vagas: 6,
    caracteristicas: ["Cozinha planejada", "Salão de festas", "Churrasqueira"], descricao: "Casa nova com ambientes amplos, uma suíte, área de festas e garagem para seis veículos.",
    fotos: ["/assets/imoveis/2652-1.jpg"],
  },
  {
    codigo: "3221", titulo: "Apartamento no Lavapés", tipo: "Apartamento", finalidade: "Locação", preco: 2500, precoTexto: "R$ 2.500/mês", bairro: "Lavapés", cidade: "Bragança Paulista", area: 80.57, dormitorios: 2, banheiros: 1, vagas: 1,
    caracteristicas: ["Sacada", "Armários", "Elevador", "Salão de festas"], descricao: "Apartamento próximo ao Centro, com dois dormitórios, sacada e condomínio com elevador.",
    fotos: ["/assets/imoveis/3221-1.jpeg"],
  },
  {
    codigo: "3233", titulo: "Casa térrea no Ile de France", tipo: "Casa em Condomínio", finalidade: "Locação", preco: 7000, precoTexto: "R$ 7.000/mês", bairro: "Condomínio Ile de France", cidade: "Bragança Paulista", dormitorios: 3, suites: 1, vagas: 2,
    caracteristicas: ["Piscina", "Área gourmet", "Cozinha planejada"], descricao: "Casa térrea com três dormitórios, piscina e área gourmet em condomínio residencial.",
    fotos: ["/assets/imoveis/3233-1.jpeg"],
  },
  {
    codigo: "2372", titulo: "Terreno na Avenida dos Imigrantes", tipo: "Terreno", finalidade: "Venda", preco: 6000000, precoTexto: "R$ 6.000.000", bairro: "Avenida dos Imigrantes", cidade: "Bragança Paulista", area: 1614,
    caracteristicas: ["Estrutura para edifício", "Localização estratégica"], descricao: "Área urbana com estrutura preparada para empreendimento vertical de até sete pavimentos.",
    fotos: ["/assets/imoveis/2372-1.jpeg"],
  },
  {
    codigo: "2770", titulo: "Terreno no Barreiro", tipo: "Terreno", finalidade: "Locação", preco: 4000, precoTexto: "R$ 4.000/mês", bairro: "Barreiro", cidade: "Bragança Paulista", area: 8300,
    caracteristicas: ["Energia", "Acesso regional", "Área para cultivo"], descricao: "Terreno entre Bragança Paulista e Itatiba, próximo à Quinta da Baroneza.",
    fotos: ["/assets/imoveis/2770-1.jpg"],
  },
  {
    codigo: "2897", titulo: "Galpão comercial no Centro", tipo: "Galpão", finalidade: "Venda", preco: 3400000, precoTexto: "R$ 3.400.000", bairro: "Centro", cidade: "Bragança Paulista", area: 442.98, vagas: 5,
    caracteristicas: ["Quatro pavimentos", "Lavabo acessível", "Varanda"], descricao: "Galpão comercial em acabamento, distribuído em quatro pavimentos no Centro.",
    fotos: ["/assets/imoveis/2897-1.jpeg"],
  },
  {
    codigo: "2995", titulo: "Galpão industrial na Penha", tipo: "Galpão", finalidade: "Locação", preco: 18000, precoTexto: "R$ 18.000/mês", bairro: "Penha", cidade: "Bragança Paulista", area: 1000, banheiros: 2, vagas: 10,
    caracteristicas: ["Energia solar", "Energia trifásica", "Estacionamento", "Acessibilidade"], descricao: "Galpão industrial com pé-direito alto, sistemas de segurança e estacionamento amplo.",
    fotos: ["/assets/imoveis/2995-1.jpeg"],
  },
  {
    codigo: "3050", titulo: "Complexo empresarial em São Lourenço", tipo: "Barracão", finalidade: "Locação", preco: 37000, precoTexto: "R$ 37.000/mês", bairro: "São Lourenço", cidade: "Bragança Paulista", area: 3000,
    caracteristicas: ["15 salas", "Ar-condicionado", "Reformado", "Iluminação LED"], descricao: "Complexo reformado para indústria ou operação empresarial, com quinze salas climatizadas.",
    fotos: ["/assets/imoveis/3050-1.jpeg"],
  },
  {
    codigo: "3169", titulo: "Casa no Júlio Mesquita", tipo: "Casa", finalidade: "Locação", preco: 1700, precoTexto: "R$ 1.700/mês", bairro: "Júlio Mesquita", cidade: "Bragança Paulista", dormitorios: 3, suites: 1, banheiros: 2, vagas: 2,
    caracteristicas: ["Quintal", "Área de serviço", "Duas salas"], descricao: "Casa com três dormitórios, quintal amplo e duas vagas em bairro residencial.",
    fotos: ["/assets/imoveis/3169-1.jpeg"],
  },
];

export const imoveisDestaque = imoveis.filter((imovel) => imovel.destaque);

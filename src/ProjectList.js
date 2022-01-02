// import images from '../public/images';
const projetos = [
  {
    nome: 'Microservice TimeStamp',
    stack: 'back-end',
    linkImage: '/images/microstamp-service.jpeg',
    linkRepo: 'https://github.com/FelipeBuso/microservice-timestamp',
    descricao: 'Microservice de apenas uma rota, ao acessar essa rota passando uma data como parametro retorna um JSON. Caso não envie a data como parâmetro, retorna a data atual.'
  },
  {
    nome: 'Recipe App',
    stack: 'front-end',
    linkVideo: 'https://www.youtube.com/embed/06lVYIk9DOM?controls=1"',
    linkProjeto: 'https://FelipeBuso.github.io/recipes-app',
    linkRepo: 'https://github.com/FelipeBuso/recipes-app',
    descricao: 'App com receitas de comidas e bebidas. Consumo de 2 APIs usando Context API e Hooks. Melhor visualização no celular'
  },
  {
    nome: 'Starwars Planet Search',
    stack: 'front-end',
    linkVideo: 'https://www.youtube.com/embed/aHA9o0Rg4GY?controls=1"',
    linkProjeto: 'https://FelipeBuso.github.io/starwars-planets-search',
    linkRepo: 'https://github.com/FelipeBuso/starwars-planets-search',
    descricao: 'Lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais.'
  },
  {
    nome: 'Trybewallet',
    stack: 'front-end',
    linkVideo: 'https://www.youtube.com/embed/G9oEgL2q5ss?controls=1',
    linkProjeto: 'https://FelipeBuso.github.io/trybewallet',
    linkRepo: 'https://github.com/FelipeBuso/trybewallet',
    descricao: 'Projeto desenvolvido com React/Redux de uma carteira de despesas com conversor de moedas'
  },
  {
    nome: 'Front-end Online Store',
    stack: 'front-end',
    linkVideo: 'https://www.youtube.com/embed/Nmhvc_HPS8w?controls=1',
    linkProjeto: 'https://FelipeBuso.github.io/frontend-online-store',
    descricao: 'Versão simplificada, sem persistência no banco de dados, de uma loja online, desenvolvendo em grupo suas funcionalidades.'
  },
];

export default projetos;

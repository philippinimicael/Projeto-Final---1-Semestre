 const galeriaFotos = [
    {
      id: 1,
      titulo: "Aurora Boreal na Noruega",
      descricao: "Captura noturna das luzes do norte sobre fiordes congelados",
      imagem: "https://picsum.photos/800/600?random=301",
      localizacao: "Tromsø, Noruega",
      data: "2023-02-15",
      equipamento: "Canon EOS R5, lente 24-70mm f/2.8",
      tags: ["natureza", "aurora", "noite"],
      likes: 1243,
      licenca: "CC BY-NC-ND"
    },
    {
      id: 2,
      titulo: "Retrato Urbano em Preto e Branco",
      descricao: "Idoso fumando cachimbo em beco de paralelepípedos",
      imagem: "https://picsum.photos/800/600?random=302",
      localizacao: "Lisboa, Portugal",
      data: "2022-09-03",
      equipamento: "Sony A7III, 85mm f/1.4",
      tags: ["retrato", "rua", "PB"],
      likes: 892,
      licenca: "CC BY-SA"
    },
    // ... (continuando com os outros 18 registros)
    {
      id: 3,
      titulo: "Cerimônia do Chá no Japão",
      descricao: "Mãos idosas preparando matcha em tradicional casa de chá",
      imagem: "https://picsum.photos/800/600?random=303",
      localizacao: "Quioto, Japão",
      data: "2023-04-22",
      equipamento: "Fujifilm X-T4, 56mm f/1.2",
      tags: ["cultura", "tradição", "close"],
      likes: 1567,
      licenca: "All Rights Reserved"
    },
    {
      id: 4,
      titulo: "Arranha-Céus de Dubai",
      descricao: "Vista aérea noturna do Burj Khalifa e arredores",
      imagem: "https://picsum.photos/800/600?random=304",
      localizacao: "Dubai, EAU",
      data: "2023-01-10",
      equipamento: "Drone DJI Mavic 3",
      tags: ["cidade", "arquitetura", "aérea"],
      likes: 2105,
      licenca: "CC BY"
    },
    {
      id: 5,
      titulo: "Café da Manhã Minimalista",
      descricao: "Composição com pães, frutas e café em luz natural",
      imagem: "https://picsum.photos/800/600?random=305",
      localizacao: "Estúdio Fotográfico",
      data: "2022-11-17",
      equipamento: "Nikon D850, 100mm macro",
      tags: ["comida", "still", "minimalismo"],
      likes: 743,
      licenca: "CC BY-NC"
    },
    {
      id: 6,
      titulo: "Crianças no Festival Holi",
      descricao: "Meninos brincando com pó colorido durante celebração",
      imagem: "https://picsum.photos/800/600?random=306",
      localizacao: "Jaipur, Índia",
      data: "2023-03-08",
      equipamento: "Sony A9II, 35mm f/1.8",
      tags: ["cultura", "cores", "alegria"],
      likes: 1982,
      licenca: "Editorial"
    },
    {
      id: 7,
      titulo: "Vida Marinha em Noronha",
      descricao: "Tartaruga verde nadando entre corais",
      imagem: "https://picsum.photos/800/600?random=307",
      localizacao: "Fernando de Noronha, Brasil",
      data: "2022-12-05",
      equipamento: "GoPro Hero11 + housing",
      tags: ["natureza", "mergulho", "vida marinha"],
      likes: 2256,
      licenca: "CC BY-ND"
    },
    {
      id: 8,
      titulo: "Casario de Santorini",
      descricao: "Vista icônica das casas brancas e cúpulas azuis",
      imagem: "https://picsum.photos/800/600?random=308",
      localizacao: "Santorini, Grécia",
      data: "2023-06-18",
      equipamento: "Canon 5D Mark IV, 16-35mm",
      tags: ["viagem", "arquitetura", "paisagem"],
      likes: 3102,
      licenca: "CC BY-SA"
    },
    {
      id: 9,
      titulo: "Show de Rock",
      descricao: "Momento de pico com pirotecnia e luzes estroboscópicas",
      imagem: "https://picsum.photos/800/600?random=309",
      localizacao: "São Paulo, Brasil",
      data: "2023-05-12",
      equipamento: "Sony A7SIII, 70-200mm f/2.8",
      tags: ["música", "show", "ação"],
      likes: 1678,
      licenca: "All Rights Reserved"
    },
    {
      id: 10,
      titulo: "Macacos na Floresta",
      descricao: "Família de macacos-pregos interagindo nas árvores",
      imagem: "https://picsum.photos/800/600?random=310",
      localizacao: "Bonito, Brasil",
      data: "2022-10-30",
      equipamento: "Canon R6, 100-400mm",
      tags: ["animais", "natureza", "selva"],
      likes: 1321,
      licenca: "CC BY-NC-ND"
    },
    {
      id: 11,
      titulo: "Mercado Flutuante",
      descricao: "Vendedores em barcos típicos na Tailândia",
      imagem: "https://picsum.photos/800/600?random=311",
      localizacao: "Bangkok, Tailândia",
      data: "2023-01-25",
      equipamento: "Leica Q2",
      tags: ["cultura", "comércio", "água"],
      likes: 1876,
      licenca: "CC BY"
    },
    {
      id: 12,
      titulo: "Moda Editorial Inverno",
      descricao: "Modelo em casaco de pele sintética em estúdio",
      imagem: "https://picsum.photos/800/600?random=312",
      localizacao: "Estúdio Fotográfico",
      data: "2022-08-14",
      equipamento: "Phase One XF, 80mm",
      tags: ["moda", "estúdio", "retrato"],
      likes: 945,
      licenca: "Editorial"
    },
    {
      id: 13,
      titulo: "Deserto do Atacama",
      descricao: "Formações rochosas sob céu estrelado",
      imagem: "https://picsum.photos/800/600?random=313",
      localizacao: "San Pedro de Atacama, Chile",
      data: "2023-07-22",
      equipamento: "Nikon Z7II, 14-24mm",
      tags: ["paisagem", "natureza", "astrofotografia"],
      likes: 2543,
      licenca: "CC BY-SA"
    },
    {
      id: 14,
      titulo: "Arte de Rua em Berlim",
      descricao: "Mural político no East Side Gallery",
      imagem: "https://picsum.photos/800/600?random=314",
      localizacao: "Berlim, Alemanha",
      data: "2022-07-19",
      equipamento: "Fujifilm X100V",
      tags: ["arte", "urbano", "mural"],
      likes: 1120,
      licenca: "CC BY-NC"
    },
    {
      id: 15,
      titulo: "Café Colheita Manual",
      descricao: "Trabalhador colhendo grãos em fazenda montanhosa",
      imagem: "https://picsum.photos/800/600?random=315",
      localizacao: "Minas Gerais, Brasil",
      data: "2023-08-03",
      equipamento: "Sony A6400, 50mm",
      tags: ["trabalho", "agricultura", "close"],
      likes: 876,
      licenca: "Documentary"
    },
    {
      id: 16,
      titulo: "Carnaval de Veneza",
      descricao: "Casais com máscaras tradicionais em piazza",
      imagem: "https://picsum.photos/800/600?random=316",
      localizacao: "Veneza, Itália",
      data: "2023-02-28",
      equipamento: "Leica M11, 35mm",
      tags: ["cultura", "festival", "traje"],
      likes: 2987,
      licenca: "CC BY-ND"
    },
    {
      id: 17,
      titulo: "Surfe no Pipeline",
      descricao: "Atleta pegando onda tubular no Hawaii",
      imagem: "https://picsum.photos/800/600?random=317",
      localizacao: "Oahu, Hawaii",
      data: "2022-12-20",
      equipamento: "Canon 1DX III, 400mm",
      tags: ["esporte", "água", "ação"],
      likes: 3421,
      licenca: "All Rights Reserved"
    },
    {
      id: 18,
      titulo: "Biblioteca Histórica",
      descricao: "Prateleiras de livros antigos em luz lateral",
      imagem: "https://picsum.photos/800/600?random=318",
      localizacao: "Praga, República Tcheca",
      data: "2023-05-05",
      equipamento: "Pentax 645Z, 45mm",
      tags: ["arquitetura", "livros", "interior"],
      likes: 1543,
      licenca: "CC BY-NC-SA"
    },
    {
      id: 19,
      titulo: "Festa Junina Nordestina",
      descricao: "Dançadores de quadrilha em traje típico",
      imagem: "https://picsum.photos/800/600?random=319",
      localizacao: "Campina Grande, Brasil",
      data: "2023-06-24",
      equipamento: "Sony A7IV, 24-70mm",
      tags: ["cultura", "festival", "tradição"],
      likes: 1320,
      licenca: "Editorial"
    },
    {
      id: 20,
      titulo: "Reflexos Urbanos",
      descricao: "Edifícios espelhados após chuva no asfalto",
      imagem: "https://picsum.photos/800/600?random=320",
      localizacao: "Chicago, EUA",
      data: "2022-10-12",
      equipamento: "Nikon Z9, 70-200mm",
      tags: ["cidade", "reflexo", "chuva"],
      likes: 2109,
      licenca: "CC BY"
    }
  ];
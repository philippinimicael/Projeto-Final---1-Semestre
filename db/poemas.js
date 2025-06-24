  const poemas = [
    {
      id: 1,
      titulo: "Canção do Exílio",
      autor: "Gonçalves Dias",
      texto: `Minha terra tem palmeiras Onde canta o Sabiá As aves que aqui gorjeiam Não gorjeiam como lá.`,
      estilo: "Romantismo",
      ano: 1843,
      imagem: "https://picsum.photos/400/300?random=201",
      tema: "saudade"
    },
    {
      id: 2,
      titulo: "No Meio do Caminho",
      autor: "Carlos Drummond de Andrade",
      texto: `No meio do caminho tinha uma pedra tinha uma pedra no meio do caminho tinha uma pedra no meio do caminho tinha uma pedra.`,
      estilo: "Modernismo",
      ano: 1928,
      imagem: "https://picsum.photos/400/300?random=202",
      tema: "obstáculos"
    },
    {
      id: 3,
      titulo: "Soneto de Fidelidade",
      autor: "Vinicius de Moraes",
      texto: `De tudo, ao meu amor serei atento Antes, e com tal zelo, e sempre, e tanto Que mesmo em face do maior encanto Dele se encante mais meu pensamento.`,
      estilo: "Soneto",
      ano: 1957,
      imagem: "https://picsum.photos/400/300?random=203",
      tema: "amor"
    },
    {
      id: 4,
      titulo: "Poema em Linha Reta",
      autor: "Álvaro de Campos",
      texto: `Nunca conheci quem tivesse levado porrada. Todos os meus conhecidos têm sido campeões em tudo.`,
      estilo: "Futurismo",
      ano: 1914,
      imagem: "https://picsum.photos/400/300?random=204",
      tema: "ironia"
    },
    {
      id: 5,
      titulo: "Os Sapos",
      autor: "Manuel Bandeira",
      texto: `Enfunando os papos, Saem da penumbra, Aos pulos, os sapos. A luz os deslumbra.`,
      estilo: "Modernismo",
      ano: 1919,
      imagem: "https://picsum.photos/400/300?random=205",
      tema: "sátira"
    },
    {
      id: 6,
      titulo: "Navio Negreiro",
      autor: "Castro Alves",
      texto: `'Stamos em pleno mar... Doudo no espaço Brinca o luar — dourada borboleta; E as vagas após ele correm... cansam Como turba de infantes inquieta.`,
      estilo: "Condoreirismo",
      ano: 1869,
      imagem: "https://picsum.photos/400/300?random=206",
      tema: "liberdade"
    },
    {
      id: 7,
      titulo: "Quadrilha",
      autor: "João Cabral de Melo Neto",
      texto: `João amava Teresa que amava Raimundo que amava Maria que amava Joaquim que amava Lili que não amava ninguém.`,
      estilo: "Concretismo",
      ano: 1950,
      imagem: "https://picsum.photos/400/300?random=207",
      tema: "amor não correspondido"
    },
    {
      id: 8,
      titulo: "Poética",
      autor: "Manuel Bandeira",
      texto: `Estou farto do lirismo comedido Do lirismo bem comportado Do lirismo funcionário público com livro de ponto`,
      estilo: "Modernismo",
      ano: 1930,
      imagem: "https://picsum.photos/400/300?random=208",
      tema: "revolta"
    },
    {
      id: 9,
      titulo: "O Operário em Construção",
      autor: "Vinicius de Moraes",
      texto: `Era ele que erguia casas Onde antes só havia chão. Como um pássaro sem asas Ele subia com as asas Que lhe brotavam da mão.`,
      estilo: "Poesia Social",
      ano: 1956,
      imagem: "https://picsum.photos/400/300?random=209",
      tema: "trabalho"
    },
    {
      id: 10,
      titulo: "Retrato",
      autor: "Cecília Meireles",
      texto: `Eu não tinha este rosto de hoje, Assim calmo, assim triste, assim magro, Nem estes olhos tão vazios, Nem o lábio amargo.`,
      estilo: "Lírico",
      ano: 1939,
      imagem: "https://picsum.photos/400/300?random=210",
      tema: "identidade"
    },
    {
      id: 11,
      titulo: "A Máquina do Mundo",
      autor: "Carlos Drummond de Andrade",
      texto: `E eis que perto de mim aquela máquina ró-se-lhe a terra para ser tragada na dentada incansável de sua boca de aço.`,
      estilo: "Filosófico",
      ano: 1951,
      imagem: "https://picsum.photos/400/300?random=211",
      tema: "existência"
    },
    {
      id: 12,
      titulo: "Poema Sujo",
      autor: "Ferreira Gullar",
      texto: `trago-te flores — restos do dia colhidas no lixo — trago-te flores`,
      estilo: "Neoconcretismo",
      ano: 1976,
      imagem: "https://picsum.photos/400/300?random=212",
      tema: "cotidiano"
    },
    {
      id: 13,
      titulo: "O Lutador",
      autor: "Augusto dos Anjos",
      texto: `A mão que afaga é a mesma que apedreja. Não há amor sem dor, não há prazer sem pejo E a vida é um combate que a alma não deseja.`,
      estilo: "Parnasianismo",
      ano: 1912,
      imagem: "https://picsum.photos/400/300?random=213",
      tema: "dualidade"
    },
    {
      id: 14,
      titulo: "O Bicho",
      autor: "Manuel Bandeira",
      texto: `Vi ontem um bicho Na imundície do pátio Catando comida entre os detritos.`,
      estilo: "Poesia Social",
      ano: 1947,
      imagem: "https://picsum.photos/400/300?random=214",
      tema: "miséria"
    },
    {
      id: 15,
      titulo: "Motivo",
      autor: "Cecília Meireles",
      texto: `Eu canto porque o instante existe e a minha vida está completa. Não sou alegre nem sou triste: sou poeta.`,
      estilo: "Lírico",
      ano: 1938,
      imagem: "https://picsum.photos/400/300?random=215",
      tema: "poesia"
    },
    {
      id: 16,
      titulo: "Psicologia de um Vencido",
      autor: "Augusto dos Anjos",
      texto: `Eu, filho do carbono e do amoníaco, Monstro de escuridão e rutilância, Sofro, desde a epigênese da infância, A influência má dos signos do zodíaco.`,
      estilo: "Cientificista",
      ano: 1912,
      imagem: "https://picsum.photos/400/300?random=216",
      tema: "angústia"
    },
    {
      id: 17,
      titulo: "Construção",
      autor: "Chico Buarque",
      texto: `Amou daquela vez como se fosse o último Beijou sua mulher como se fosse o último E cada filho seu como se fosse o único.`,
      estilo: "Música-Poesia",
      ano: 1971,
      imagem: "https://picsum.photos/400/300?random=217",
      tema: "morte"
    },
    {
      id: 18,
      titulo: "Vou-me Embora pra Pasárgada",
      autor: "Manuel Bandeira",
      texto: `Vou-me embora pra Pasárgada Lá sou amigo do rei Lá tenho a mulher que eu quero Na cama que escolherei`,
      estilo: "Modernismo",
      ano: 1930,
      imagem: "https://picsum.photos/400/300?random=218",
      tema: "escapismo"
    },
    {
      id: 19,
      titulo: "Ode ao Burguês",
      autor: "Mário de Andrade",
      texto: `Eu insulto o burguês! O burguês-níquel, o burguês-burguês! A digestão bem feita de São Paulo! O homem-curva! o homem-nádegas!`,
      estilo: "Modernismo",
      ano: 1922,
      imagem: "https://picsum.photos/400/300?random=219",
      tema: "crítica social"
    },
    {
      id: 20,
      titulo: "Ismália",
      autor: "Alphonsus de Guimaraens",
      texto: `Quando Ismália enlouqueceu, Pôs-se na torre a sonhar... Viu uma lua no céu, Viu outra lua no mar.`,
      estilo: "Simbolismo",
      ano: 1899,
      imagem: "https://picsum.photos/400/300?random=220",
      tema: "loucura"
    }
  ];
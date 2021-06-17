const dados = [
  {
    id: 1,
    titulo: "Linguística",
    descricao: "Gosto de escrever textos e publicá-los.",
    tipo: "linguistica"
  },
  {
    id: 2,
    titulo: "Linguística",
    descricao: "Leio com frequência algo que não é relacionado com os estudos.",
    tipo: "linguistica"
  },
  {
    id: 3,
    titulo: "Linguística",
    descricao:
      "Ouço rádio e ou gravações de palestras e livros com frequência.",
    tipo: "linguistica"
  },
  {
    id: 4,
    titulo: "Linguística",
    descricao: "Sempre leio outdoors e propagandas.",
    tipo: "linguistica"
  },
  {
    id: 5,
    titulo: "Linguística",
    descricao: "Gosto de palavras cruzadas.",
    tipo: "linguistica"
  },
  {
    id: 6,
    titulo: "Linguística",
    descricao:
      "Gosto quando os professores usam slides, projeções, pôsters, citações, etc, nas aulas.",
    tipo: "linguistica"
  },
  {
    id: 7,
    titulo: "Linguística",
    descricao: "Sou um bom escritor de textos.",
    tipo: "linguistica"
  },
  {
    id: 8,
    titulo: "Linguística",
    descricao: "Se ouvir a música algumas vezes consigo lembrar da letra.",
    tipo: "linguistica"
  },
  {
    id: 9,
    titulo: "Linguística",
    descricao:
      "Gosto quando os professores pedem para ler e escrever na maior parte da aula.",
    tipo: "linguistica"
  },
  {
    id: 10,
    titulo: "Linguística",
    descricao: "Já escrevi algo que gostei.",
    tipo: "linguistica"
  },
  {
    id: 11,
    titulo: "Interpessoal",
    descricao: "Prefiro ir em uma festa a passar a noite sozinha em casa.",
    tipo: "interpessoal"
  },
  {
    id: 12,
    titulo: "Interpessoal",
    descricao: "Discuto meus problemas com meus amigos e família.",
    tipo: "interpessoal"
  },
  {
    id: 13,
    titulo: "Interpessoal",
    descricao: "As pessoas frequentemente compartilham seus problemas comigo.",
    tipo: "interpessoal"
  },
  {
    id: 14,
    titulo: "Interpessoal",
    descricao: "Tenho atividades sociais várias vezes na semana.",
    tipo: "interpessoal"
  },
  {
    id: 15,
    titulo: "Interpessoal",
    descricao: "Gosto de entreter amigos e dar festas.",
    tipo: "interpessoal"
  },
  {
    id: 16,
    titulo: "Interpessoal",
    descricao: "Assumo frequentemente papéis de liderança.",
    tipo: "interpessoal"
  },
  {
    id: 17,
    titulo: "Interpessoal",
    descricao: "Tenho mais de um amigo próximo.",
    tipo: "interpessoal"
  },
  {
    id: 18,
    titulo: "Interpessoal",
    descricao: "Adoro ensinar ou mostrar a alguém como fazer algo.",
    tipo: "interpessoal"
  },
  {
    id: 19,
    titulo: "Interpessoal",
    descricao:
      "Manejo-me com desenvoltura em um grupo grande de pessoas ou em uma festa com pessoas que não conheço",
    tipo: "interpessoal"
  },
  {
    id: 20,
    titulo: "Interpessoal",
    descricao:
      "Gosto quando os professores me dão voz na escolha de conteúdos e no processo de aprendizagem nas aulas.",
    tipo: "interpessoal"
  },
  {
    id: 21,
    titulo: "Intrapessoal",
    descricao: "Gosto de ponderar, pensar sobre o que vou fazer ou meditar.",
    tipo: "intrapessoal"
  },
  {
    id: 22,
    titulo: "Intrapessoal",
    descricao: "Considero-me independente nas minhas decisões.",
    tipo: "intrapessoal"
  },
  {
    id: 23,
    titulo: "Intrapessoal",
    descricao: "Mantenho um registro escrito dos meus pensamentos.",
    tipo: "intrapessoal"
  },
  {
    id: 24,
    titulo: "Intrapessoal",
    descricao:
      "Preferia criar meu próprio método de aprendizagem ao invés de seguir o que me é imposto.",
    tipo: "intrapessoal"
  },
  {
    id: 25,
    titulo: "Intrapessoal",
    descricao:
      "Gosto de criar e adaptar os materiais para os meus estudos com frequência.",
    tipo: "intrapessoal"
  },
  {
    id: 26,
    titulo: "Intrapessoal",
    descricao: "Quando me magoo ou me decepciono me recupero rapidamente.",
    tipo: "intrapessoal"
  },
  {
    id: 27,
    titulo: "Intrapessoal",
    descricao:
      "Os valores que orientem minha vida e atividades estão claros para mim, e consigo expressá-los.",
    tipo: "intrapessoal"
  },
  {
    id: 28,
    titulo: "Intrapessoal",
    descricao: "Tenho hobbies e interesses que gosto de fazer sozinho.",
    tipo: "intrapessoal"
  },
  {
    id: 29,
    titulo: "Intrapessoal",
    descricao:
      "Gosto quando os professores passa atividades individuais em sala.",
    tipo: "intrapessoal"
  },
  {
    id: 30,
    titulo: "Intrapessoal",
    descricao:
      "Gosto quando os professores me dão oportunidade de pensar e refletir sobre o que estou fazendo.",
    tipo: "intrapessoal"
  },
  {
    id: 31,
    titulo: "Lógica-Matemática",
    descricao:
      "Tendo a acreditar que uma resposta é correta caso ela tenha sido medida ou calculada de alguma forma.",
    tipo: "lógica"
  },
  {
    id: 32,
    titulo: "Lógica-Matemática",
    descricao: "Faço cálculos de cabeça facilmente.",
    tipo: "lógica"
  },
  {
    id: 33,
    titulo: "Lógica-Matemática",
    descricao: "Gosto de jogar cartas.",
    tipo: "lógica"
  },
  {
    id: 34,
    titulo: "Lógica-Matemática",
    descricao: "Gosto das aulas de matemática na escola.",
    tipo: "lógica"
  },
  {
    id: 35,
    titulo: "Lógica-Matemática",
    descricao:
      "Acredito que a maioria das coisas tem uma explicação lógica ou racional.",
    tipo: "lógica"
  },
  {
    id: 36,
    titulo: "Lógica-Matemática",
    descricao: "Gosto de jogos que me fazem pensar.",
    tipo: "lógica"
  },
  {
    id: 37,
    titulo: "Lógica-Matemática",
    descricao: "Tenho interesse em novos desenvolvimentos das ciências.",
    tipo: "lógica"
  },
  {
    id: 38,
    titulo: "Lógica-Matemática",
    descricao: "Quando cozinho meço todas as coisas com precisão.",
    tipo: "lógica"
  },
  {
    id: 39,
    titulo: "Lógica-Matemática",
    descricao:
      "Gosto quando os professores usam atividades de resolução de problemas nas aulas.",
    tipo: "lógica"
  },
  {
    id: 40,
    titulo: "Lógica-Matemática",
    descricao:
      "Gosto quando as aulas são uniformes quando já sei o que esperar, em termos de regras e rotinas.",
    tipo: "lógica"
  },
  {
    id: 41,
    titulo: "Musical",
    descricao:
      "Tenho uma voz bem expressiva, variando em intensidade, tom e ênfase.",
    tipo: "musical"
  },
  {
    id: 42,
    titulo: "Musical",
    descricao:
      "Gosto quando os professores usam músicas em seus planos de aulas.",
    tipo: "musical"
  },
  {
    id: 43,
    titulo: "Musical",
    descricao: "Consigo identificar se alguém canta de forma desafinada.",
    tipo: "musical"
  },
  {
    id: 44,
    titulo: "Musical",
    descricao: "Conheço letra de muitas músicas.",
    tipo: "musical"
  },
  {
    id: 45,
    titulo: "Musical",
    descricao: "Toco um instrumento e o pratico com frequência.",
    tipo: "musical"
  },
  {
    id: 46,
    titulo: "Musical",
    descricao:
      "Se eu ouvir uma nova música uma ou duas vezes, consigo lembrar a letra.",
    tipo: "musical"
  },
  {
    id: 47,
    titulo: "Musical",
    descricao: "Canto no banho.",
    tipo: "musical"
  },
  {
    id: 48,
    titulo: "Musical",
    descricao: "Ouvir músicas de que gosto faz-me sentir bem.",
    tipo: "musical"
  },
  {
    id: 49,
    titulo: "Musical",
    descricao: "Quando escuto música, consigo facilmente harmonizar com ela.",
    tipo: "musical"
  },
  {
    id: 50,
    titulo: "Musical",
    descricao: "Não tenho problemas de identificar ou seguir um ritmo.",
    tipo: "musical"
  },
  {
    id: 51,
    titulo: "Corporal-Cinestésica",
    descricao: "Gosto de montanhas russas.",
    tipo: "corporal"
  },
  {
    id: 52,
    titulo: "Corporal-Cinestésica",
    descricao: "Gosto de dançar.",
    tipo: "corporal"
  },
  {
    id: 53,
    titulo: "Corporal-Cinestésica",
    descricao: "Pratico pelo menos um esporte.",
    tipo: "corporal"
  },
  {
    id: 54,
    titulo: "Corporal-Cinestésica",
    descricao: "Gosto de trabalhar com as mãos.",
    tipo: "corporal"
  },
  {
    id: 55,
    titulo: "Corporal-Cinestésica",
    descricao:
      "Prefiro praticar uma nova habilidade a de ler ou assistir um vídeo sobre ela.",
    tipo: "corporal"
  },
  {
    id: 56,
    titulo: "Corporal-Cinestésica",
    descricao:
      "Minhas melhores ideias surgem quando estou correndo, caminhando, limpando a casa ou me mexendo de algum modo",
    tipo: "corporal"
  },
  {
    id: 57,
    titulo: "Corporal-Cinestésica",
    descricao: "Gosto de ambientes abertos.",
    tipo: "corporal"
  },
  {
    id: 58,
    titulo: "Corporal-Cinestésica",
    descricao: "Acho muito difícil ficar sentado por longos períodos.",
    tipo: "corporal"
  },
  {
    id: 59,
    titulo: "Corporal-Cinestésica",
    descricao:
      "Gosto quando os professores propõem atividades em sala que façam eu me movimentar.",
    tipo: "corporal"
  },
  {
    id: 60,
    titulo: "Corporal-Cinestésica",
    descricao:
      "A maioria dos meus hobbies envolvem atividade física de algum modo.",
    tipo: "corporal"
  },
  {
    id: 61,
    titulo: "Visual-Espacial",
    descricao: "Presto atenção nas cores que as pessoas se vestem.",
    tipo: "visual"
  },
  {
    id: 62,
    titulo: "Visual-Espacial",
    descricao: "Tiro muitas fotos em viagens",
    tipo: "visual"
  },
  {
    id: 63,
    titulo: "Visual-Espacial",
    descricao: "Gosto quando os professores usam vídeos em suas aulas.",
    tipo: "visual"
  },
  {
    id: 64,
    titulo: "Visual-Espacial",
    descricao: "Localizo-me com facilidade em cidades que não conheço.",
    tipo: "visual"
  },
  {
    id: 65,
    titulo: "Visual-Espacial",
    descricao: "Gosto de desenhar.",
    tipo: "visual"
  },
  {
    id: 66,
    titulo: "Visual-Espacial",
    descricao: "Gosto de ler artigos com ilustrações.",
    tipo: "visual"
  },
  {
    id: 67,
    titulo: "Visual-Espacial",
    descricao:
      "Gosto de livros didáticos que contém ilustrações, gráficos, quadros e figuras.",
    tipo: "visual"
  },
  {
    id: 68,
    titulo: "Visual-Espacial",
    descricao: "Gosto de montar quebra-cabeças.",
    tipo: "visual"
  },
  {
    id: 69,
    titulo: "Visual-Espacial",
    descricao: "Sou boa em geometria na escola.",
    tipo: "visual"
  },
  {
    id: 70,
    titulo: "Visual-Espacial",
    descricao:
      "Identifico como a disposição do mobiliários, dos alunos e do professor podem influenciar no aprendizado.",
    tipo: "visual"
  }
];
export default dados;

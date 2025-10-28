export interface Noticia {
  id: string;
  titulo: string;
  categoria: string;
  data: string;
  imagem: string;
  resumo: string;
  conteudo: string;
}

export interface Vaga {
  id: string;
  titulo: string;
  empresa: string;
  localizacao: string;
  tipo: string;
  salario: string;
  data: string;
  tags: string[];
  resumo: string;
  descricao: string;
  link: string;
}

export const noticias: Noticia[] = [
  {
    id: "marco-legal-games-brasil-2024",
    titulo: "Marco Legal dos Games é aprovado e transforma indústria brasileira",
    categoria: "Políticas Públicas",
    data: "2024-10-15",
    imagem: "/images/marco-legal.jpg",
    resumo: "Lei nº 14.852/2024 estabelece diretrizes para desenvolvimento da indústria de jogos eletrônicos no Brasil, trazendo incentivos fiscais e segurança jurídica.",
    conteudo: `O Marco Legal dos Games (Lei nº 14.852/2024) foi sancionado e representa um divisor de águas para a indústria brasileira de jogos eletrônicos. A legislação estabelece diretrizes claras para o setor, incluindo incentivos fiscais, proteção à propriedade intelectual e mecanismos de fomento.

Entre os principais pontos da lei estão: redução de impostos para estúdios nacionais, criação de linhas de crédito específicas, reconhecimento dos games como produto cultural e estabelecimento de políticas de capacitação profissional.

Segundo especialistas, a medida pode impulsionar o crescimento do setor em até 300% nos próximos cinco anos, gerando milhares de empregos qualificados e posicionando o Brasil como referência na América Latina.

A lei também prevê a criação de um Fundo Nacional de Desenvolvimento de Jogos Eletrônicos, com orçamento inicial de R$ 500 milhões, destinado a financiar projetos de estúdios independentes e iniciativas de capacitação profissional.`
  },
  {
    id: "brasil-game-show-2025",
    titulo: "Brasil Game Show 2025 bate recorde de público e negócios",
    categoria: "Eventos",
    data: "2025-10-10",
    imagem: "/images/bgs-2025.jpg",
    resumo: "Maior feira de games da América Latina registra 350 mil visitantes e movimenta R$ 2 bilhões em negócios, consolidando o Brasil no cenário global.",
    conteudo: `A Brasil Game Show 2025, realizada em São Paulo, encerrou sua edição com números recordes. O evento recebeu 350 mil visitantes ao longo de cinco dias, superando em 15% a edição anterior.

O destaque ficou por conta da presença massiva de estúdios independentes brasileiros, que ocuparam 40% do espaço expositivo. Foram anunciados 23 novos jogos nacionais, com previsão de lançamento para 2025 e 2026.

A feira também serviu como palco para anúncios importantes da indústria, incluindo parcerias entre desenvolvedoras brasileiras e publishers internacionais, movimentando cerca de R$ 2 bilhões em contratos e investimentos.

Entre os destaques, estão acordos de co-desenvolvimento com estúdios asiáticos e europeus, além do anúncio de três novos escritórios de empresas internacionais no Brasil.`
  },
  {
    id: "economia-criativa-df-crescimento",
    titulo: "Economia criativa em Brasília cresce 45% e gera 12 mil empregos",
    categoria: "Mercado",
    data: "2025-10-13",
    imagem: "/images/economia-criativa-df.jpg",
    resumo: "Setor de economia criativa no DF apresenta crescimento expressivo, impulsionado por games, audiovisual e design, segundo dados do Sebrae.",
    conteudo: `A economia criativa no Distrito Federal apresentou crescimento de 45% em 2024, gerando mais de 12 mil novos postos de trabalho, segundo estudo divulgado pelo Sebrae-DF.

O segmento de games foi um dos destaques, com crescimento de 78% no número de estúdios independentes estabelecidos na capital. Atualmente, Brasília conta com 47 empresas desenvolvedoras de jogos, empregando cerca de 850 profissionais.

O governo do DF tem investido em políticas de fomento, como o FAC (Fundo de Apoio à Cultura), que destinou R$ 49,2 milhões para projetos criativos em 2025, incluindo desenvolvimento de jogos eletrônicos e experiências interativas.

O estudo também aponta que a renda média dos profissionais da economia criativa no DF é 35% superior à média nacional, refletindo a qualificação da mão de obra local.`
  },
  {
    id: "fac-2025-inscricoes-prorrogadas",
    titulo: "FAC 2025 prorroga inscrições e destina R$ 49 milhões para projetos",
    categoria: "Editais",
    data: "2025-10-10",
    imagem: "/images/fac-2025.jpg",
    resumo: "Secretaria de Cultura e Economia Criativa do DF estende prazo para inscrições no Fundo de Apoio à Cultura, contemplando projetos de games e audiovisual.",
    conteudo: `A Secretaria de Cultura e Economia Criativa do Distrito Federal (Secec-DF) prorrogou até 13 de outubro as inscrições para os editais do FAC II/2025, que somam R$ 49,2 milhões em investimentos.

Pela primeira vez, o edital inclui uma categoria específica para desenvolvimento de jogos eletrônicos e experiências interativas, com orçamento de R$ 3,5 milhões. Projetos podem solicitar até R$ 200 mil por proposta.

Os recursos contemplam todas as etapas de desenvolvimento, desde pré-produção até lançamento e divulgação. A iniciativa visa fortalecer o ecossistema local de games e posicionar Brasília como polo criativo nacional.

Segundo o secretário Cláudio Abrantes, a inclusão de games no FAC reconhece a importância econômica e cultural do setor, que movimentou R$ 180 milhões no DF em 2024.`
  },
  {
    id: "industria-games-brasil-crescimento-695",
    titulo: "Indústria de games no Brasil cresceu 695% em uma década",
    categoria: "Mercado",
    data: "2025-10-08",
    imagem: "/images/crescimento-games.jpg",
    resumo: "Setor de jogos eletrônicos brasileiro registra expansão extraordinária, passando de 42 para 1.042 estúdios entre 2014 e 2024, segundo pesquisa da Abragames.",
    conteudo: `A indústria brasileira de jogos eletrônicos apresentou crescimento de 695% na última década, segundo censo divulgado pela Abragames (Associação Brasileira das Desenvolvedoras de Jogos Digitais).

O número de estúdios saltou de 42 em 2014 para 1.042 em 2024, enquanto o número de profissionais empregados cresceu de 1.890 para 13.225 no mesmo período. O faturamento do setor atingiu R$ 8,9 bilhões em 2024.

O estudo aponta que 68% dos estúdios são de pequeno porte (até 10 funcionários), mas há crescimento significativo de empresas médias. A região Sudeste concentra 52% dos estúdios, seguida pelo Sul (23%) e Centro-Oeste (12%).

A pesquisa também revela que 42% dos jogos brasileiros são exportados, com destaque para mercados na América do Norte, Europa e Ásia.`
  },
  {
    id: "kokku-games-expansao-brasilia",
    titulo: "Kokku Games anuncia expansão e abre escritório em Brasília",
    categoria: "Empresas",
    data: "2025-10-05",
    imagem: "/images/kokku-brasilia.jpg",
    resumo: "Maior empresa brasileira de co-desenvolvimento de jogos investe no DF e prevê contratar 80 profissionais até 2026.",
    conteudo: `A Kokku Games, maior empresa brasileira especializada em co-desenvolvimento de jogos para consoles, PC e mobile, anunciou a abertura de um novo escritório em Brasília.

O investimento de R$ 12 milhões prevê a contratação de 80 profissionais até 2026, nas áreas de programação, arte 2D/3D, animação e game design. O escritório ficará no Setor de Indústrias Gráficas e terá estrutura para 120 colaboradores.

A empresa, que já trabalhou em projetos para Ubisoft, Activision e Electronic Arts, escolheu Brasília pela qualidade da mão de obra local e pelos incentivos do governo distrital para empresas de tecnologia e economia criativa.

O CEO da Kokku, Cássio Almeida, destacou que Brasília tem potencial para se tornar um dos principais polos de desenvolvimento de jogos do Brasil nos próximos anos.`
  },
  {
    id: "epic-games-vagas-brasil",
    titulo: "Epic Games abre vagas para programadores no Brasil",
    categoria: "Carreiras",
    data: "2025-10-03",
    imagem: "/images/epic-games-vagas.jpg",
    resumo: "Criadora do Fortnite e da Unreal Engine busca talentos brasileiros para trabalho remoto em projetos globais.",
    conteudo: `A Epic Games, desenvolvedora do fenômeno Fortnite e criadora da Unreal Engine, abriu processo seletivo para contratar programadores brasileiros em regime de trabalho remoto.

São 15 vagas para diferentes especialidades: UI/UX, gameplay, engine, ferramentas e multiplayer. Os salários variam entre R$ 18 mil e R$ 35 mil mensais, com benefícios como plano de saúde internacional e stock options.

A empresa busca profissionais com experiência em C++, Unreal Engine e desenvolvimento para consoles. O processo seletivo inclui testes técnicos, entrevistas e desafio de código. As inscrições vão até 15 de novembro.

Esta é a primeira vez que a Epic Games abre vagas especificamente para o mercado brasileiro, refletindo o reconhecimento da qualidade dos desenvolvedores nacionais.`
  },
  {
    id: "unb-curso-game-design",
    titulo: "UnB lança primeiro curso de graduação em Game Design do Centro-Oeste",
    categoria: "Educação",
    data: "2025-09-28",
    imagem: "/images/unb-game-design.jpg",
    resumo: "Universidade de Brasília inaugura bacharelado em Design de Jogos Digitais com 40 vagas anuais e laboratórios equipados.",
    conteudo: `A Universidade de Brasília (UnB) lançou o primeiro curso de graduação em Game Design do Centro-Oeste. O bacharelado terá duração de quatro anos e oferecerá 40 vagas anuais, com início previsto para o primeiro semestre de 2026.

O curso contará com laboratórios equipados com estações de trabalho de alta performance, captura de movimento, realidade virtual e estúdio de áudio. A grade curricular inclui disciplinas de programação, arte 2D/3D, narrativa, game design, produção e empreendedorismo.

A iniciativa conta com apoio de empresas do setor, que oferecerão estágios e mentorias aos alunos. O coordenador do curso, Prof. Dr. Ricardo Nakamura, destaca que o objetivo é formar profissionais completos e preparados para o mercado global.

O curso também prevê parcerias internacionais com universidades da Europa e América do Norte para intercâmbios e projetos colaborativos.`
  },
  {
    id: "indie-games-brasil-destaque-internacional",
    titulo: "Jogos indie brasileiros ganham destaque em festivais internacionais",
    categoria: "Indie",
    data: "2025-09-25",
    imagem: "/images/indie-internacional.jpg",
    resumo: "Desenvolvedores independentes do Brasil conquistam prêmios na GDC, IndieCade e Tokyo Game Show, elevando reputação nacional.",
    conteudo: `Jogos independentes brasileiros têm se destacado nos principais festivais internacionais de games. Em 2025, títulos nacionais conquistaram 12 prêmios em eventos como GDC (Game Developers Conference), IndieCade e Tokyo Game Show.

O jogo 'Lampião's Revenge', desenvolvido pelo estúdio brasiliense Behold Studios, venceu o prêmio de Melhor Narrativa na IndieCade. Já 'Amazônia: The Last Stand', da paulista Dumativa, levou o prêmio de Inovação na Tokyo Game Show.

Especialistas apontam que o sucesso se deve à combinação de narrativas autênticas, inspiradas na cultura brasileira, com alta qualidade técnica e design inovador. O movimento indie nacional movimentou R$ 450 milhões em 2024.

O reconhecimento internacional tem atraído investidores e publishers estrangeiros interessados em co-produzir jogos com estúdios brasileiros.`
  },
  {
    id: "sebrae-programa-games-df",
    titulo: "Sebrae-DF lança programa de aceleração para startups de games",
    categoria: "Empreendedorismo",
    data: "2025-09-20",
    imagem: "/images/sebrae-games.jpg",
    resumo: "Iniciativa oferece capacitação, mentoria e investimento para empreendedores que desejam criar estúdios de jogos no Distrito Federal.",
    conteudo: `O Sebrae-DF lançou o programa 'Games DF Acelera', voltado para empreendedores que desejam criar ou expandir estúdios de desenvolvimento de jogos eletrônicos no Distrito Federal.

O programa oferece 6 meses de capacitação intensiva, mentorias com especialistas do mercado, acesso a laboratórios equipados e possibilidade de investimento de até R$ 150 mil por startup selecionada.

Serão 20 vagas para a primeira turma, com inscrições abertas até 30 de outubro. Os critérios de seleção incluem inovação, viabilidade técnica e potencial de mercado. O programa também conecta as startups com publishers e investidores nacionais e internacionais.

O diretor do Sebrae-DF, Valdir Oliveira, afirma que o objetivo é consolidar Brasília como polo de inovação em games e economia criativa.`
  }
];

export const vagas: Vaga[] = [
  {
    id: "desenvolvedor-unity-senior-kokku",
    titulo: "Desenvolvedor Unity Sênior",
    empresa: "Kokku Games",
    localizacao: "Brasília, DF (Híbrido)",
    tipo: "CLT - Tempo Integral",
    salario: "R$ 12.000 - R$ 18.000",
    data: "2025-10-20",
    tags: ["Unity", "C#", "Sênior", "Híbrido"],
    resumo: "Desenvolver sistemas e mecânicas para jogos AAA em parceria com publishers internacionais.",
    descricao: `A Kokku Games busca Desenvolvedor Unity Sênior para integrar time que trabalha em projetos para grandes publishers internacionais.

**Responsabilidades:**
- Desenvolver sistemas de gameplay complexos em Unity/C#
- Otimizar performance para múltiplas plataformas (PC, consoles, mobile)
- Colaborar com equipes multidisciplinares (arte, design, QA)
- Participar de code reviews e mentorar desenvolvedores juniores
- Documentar código e processos técnicos

**Requisitos:**
- 5+ anos de experiência com Unity e C#
- Experiência com desenvolvimento para consoles (PlayStation, Xbox, Switch)
- Conhecimento sólido de padrões de projeto e arquitetura de software
- Inglês avançado (leitura e escrita)
- Portfolio com projetos publicados

**Diferenciais:**
- Experiência com Unreal Engine
- Conhecimento de shaders e programação gráfica
- Contribuições em projetos open source

**Benefícios:**
- Plano de saúde e odontológico
- Vale-refeição R$ 40/dia
- Auxílio home office R$ 200/mês
- Participação nos lucros
- Day off no aniversário`,
    link: "https://kokkugames.com/careers"
  },
  {
    id: "game-designer-behold-studios",
    titulo: "Game Designer",
    empresa: "Behold Studios",
    localizacao: "Brasília, DF (Presencial)",
    tipo: "CLT - Tempo Integral",
    salario: "R$ 8.000 - R$ 12.000",
    data: "2025-10-18",
    tags: ["Game Design", "Narrativa", "Pleno", "Presencial"],
    resumo: "Criar mecânicas e sistemas de jogo para novo título indie com foco em narrativa.",
    descricao: `Behold Studios procura Game Designer para novo projeto indie com lançamento previsto para 2026.

**Responsabilidades:**
- Projetar mecânicas de gameplay inovadoras
- Criar e balancear sistemas de progressão
- Desenvolver narrativa interativa e diálogos
- Documentar design através de GDDs e diagramas
- Trabalhar em prototipagem rápida
- Realizar playtests e iterar baseado em feedback

**Requisitos:**
- 3+ anos de experiência em game design
- Portfolio demonstrando projetos completos
- Conhecimento de ferramentas de prototipagem (Unity, Unreal, ou similar)
- Excelente comunicação e trabalho em equipe
- Paixão por jogos indie e narrativas interativas

**Diferenciais:**
- Experiência com jogos narrativos
- Conhecimento de Ink, Twine ou Yarn Spinner
- Formação em Design, Letras ou áreas correlatas

**Benefícios:**
- Plano de saúde
- Vale-refeição R$ 35/dia
- Auxílio transporte
- Ambiente criativo e colaborativo
- Participação em festivais internacionais`,
    link: "https://beholdstudios.com.br/vagas"
  },
  {
    id: "artista-3d-remoto",
    titulo: "Artista 3D Generalista",
    empresa: "Wildlife Studios",
    localizacao: "Remoto (Brasil)",
    tipo: "PJ - Tempo Integral",
    salario: "R$ 10.000 - R$ 16.000",
    data: "2025-10-15",
    tags: ["Arte 3D", "Mobile", "Remoto", "PJ"],
    resumo: "Criar assets 3D de alta qualidade para jogos mobile com milhões de downloads.",
    descricao: `Wildlife Studios, um dos maiores estúdios mobile da América Latina, busca Artista 3D para projetos de sucesso global.

**Responsabilidades:**
- Criar modelos 3D stylized de personagens, props e ambientes
- Desenvolver texturas e materiais otimizados para mobile
- Trabalhar dentro de limitações técnicas de performance
- Colaborar com equipe de arte e programação
- Manter pipeline de produção eficiente

**Requisitos:**
- 4+ anos de experiência em modelagem 3D
- Domínio de Blender, Maya ou 3ds Max
- Experiência com Substance Painter/Designer
- Portfolio demonstrando estilo stylized/cartoon
- Conhecimento de otimização para mobile

**Diferenciais:**
- Experiência com jogos mobile publicados
- Conhecimento de rigging e animação
- Habilidades em concept art

**Benefícios:**
- Trabalho 100% remoto
- Equipamento fornecido pela empresa
- Plano de saúde
- Auxílio educação (cursos e conferências)
- Bônus por performance`,
    link: "https://wildlifestudios.com/careers"
  },
  {
    id: "programador-ui-epic-games",
    titulo: "Programador de UI Sênior",
    empresa: "Epic Games",
    localizacao: "Remoto (Brasil)",
    tipo: "CLT - Tempo Integral",
    salario: "R$ 18.000 - R$ 35.000",
    data: "2025-10-12",
    tags: ["UI/UX", "C++", "Unreal Engine", "Remoto"],
    resumo: "Desenvolver interfaces de usuário para projetos AAA usando Unreal Engine.",
    descricao: `Epic Games busca Programador de UI Sênior para trabalhar em projetos de alto impacto global.

**Responsabilidades:**
- Implementar interfaces de usuário em C++ e Unreal Engine
- Otimizar performance de UI para múltiplas plataformas
- Colaborar com designers UX/UI na implementação de mockups
- Desenvolver ferramentas e sistemas de UI reutilizáveis
- Manter código limpo e bem documentado

**Requisitos:**
- 6+ anos de experiência em programação de UI
- Forte conhecimento de C++ e Unreal Engine
- Experiência com UMG (Unreal Motion Graphics)
- Inglês fluente (reuniões diárias em inglês)
- Portfolio com projetos AAA publicados

**Diferenciais:**
- Experiência com Slate framework
- Conhecimento de acessibilidade em games
- Contribuições para Unreal Engine (open source)

**Benefícios:**
- Salário em dólar (conversão em reais)
- Plano de saúde internacional
- Stock options (ações da empresa)
- Licença parental estendida
- Orçamento anual para equipamentos
- Acesso gratuito a todos os jogos Epic`,
    link: "https://www.epicgames.com/careers"
  },
  {
    id: "produtor-jogos-junior",
    titulo: "Produtor de Jogos Júnior",
    empresa: "Dumativa",
    localizacao: "São Paulo, SP (Híbrido)",
    tipo: "CLT - Tempo Integral",
    salario: "R$ 6.000 - R$ 9.000",
    data: "2025-10-10",
    tags: ["Produção", "Gestão", "Júnior", "Híbrido"],
    resumo: "Auxiliar na gestão de projetos de jogos indie com foco em organização e comunicação.",
    descricao: `Dumativa busca Produtor Júnior para auxiliar na gestão de múltiplos projetos de jogos.

**Responsabilidades:**
- Organizar e facilitar reuniões de equipe
- Manter documentação de projeto atualizada
- Acompanhar progresso de tarefas e milestones
- Comunicar-se com stakeholders e publishers
- Auxiliar na gestão de orçamento e cronograma
- Identificar e resolver bloqueios de produção

**Requisitos:**
- 1-2 anos de experiência em produção ou gestão de projetos
- Conhecimento de metodologias ágeis (Scrum, Kanban)
- Excelente comunicação e organização
- Familiaridade com ferramentas (Jira, Trello, Notion)
- Paixão por jogos e desenvolvimento

**Diferenciais:**
- Experiência prévia em game jams
- Certificação em Scrum ou PMP
- Inglês intermediário

**Benefícios:**
- Plano de saúde
- Vale-refeição R$ 30/dia
- Vale-transporte
- Modelo híbrido (2x presencial, 3x remoto)
- Ambiente jovem e criativo`,
    link: "https://dumativa.com.br/vagas"
  },
  {
    id: "animador-2d-remoto",
    titulo: "Animador 2D",
    empresa: "Aquiris Game Studio",
    localizacao: "Remoto (Brasil)",
    tipo: "PJ - Tempo Integral",
    salario: "R$ 7.000 - R$ 11.000",
    data: "2025-10-08",
    tags: ["Animação 2D", "Spine", "Remoto", "Pleno"],
    resumo: "Criar animações 2D fluidas para jogos mobile e console.",
    descricao: `Aquiris Game Studio procura Animador 2D para projetos mobile e console.

**Responsabilidades:**
- Criar animações de personagens e elementos de UI
- Trabalhar com Spine e/ou After Effects
- Implementar animações no Unity
- Colaborar com artistas e designers
- Manter consistência visual do projeto

**Requisitos:**
- 3+ anos de experiência em animação 2D
- Domínio de Spine ou Dragon Bones
- Portfolio demonstrando animações fluidas
- Conhecimento de princípios de animação
- Experiência com pipelines de jogos

**Diferenciais:**
- Experiência com Unity
- Conhecimento de rigging
- Habilidades em ilustração

**Benefícios:**
- Trabalho remoto
- Horário flexível
- Plano de saúde
- Bônus por projeto concluído
- Participação em lucros`,
    link: "https://aquiris.com.br/careers"
  },
  {
    id: "qa-tester-brasilia",
    titulo: "QA Tester",
    empresa: "Kokku Games",
    localizacao: "Brasília, DF (Presencial)",
    tipo: "CLT - Tempo Integral",
    salario: "R$ 3.500 - R$ 5.500",
    data: "2025-10-05",
    tags: ["QA", "Testes", "Júnior", "Presencial"],
    resumo: "Testar jogos em desenvolvimento, identificar bugs e garantir qualidade.",
    descricao: `Kokku Games busca QA Tester para garantir qualidade de jogos AAA.

**Responsabilidades:**
- Executar planos de teste em diferentes plataformas
- Identificar, documentar e reportar bugs
- Verificar correções e realizar testes de regressão
- Testar funcionalidades novas e existentes
- Colaborar com equipe de desenvolvimento

**Requisitos:**
- Experiência com jogos (como jogador)
- Atenção aos detalhes
- Boa comunicação escrita
- Conhecimento básico de inglês
- Disponibilidade para trabalho presencial

**Diferenciais:**
- Experiência prévia em QA de games
- Conhecimento de ferramentas de bug tracking (Jira, Bugzilla)
- Inglês intermediário ou avançado

**Benefícios:**
- Plano de saúde
- Vale-refeição R$ 35/dia
- Vale-transporte
- Oportunidade de crescimento
- Ambiente gamer`,
    link: "https://kokkugames.com/careers"
  },
  {
    id: "sound-designer-remoto",
    titulo: "Sound Designer",
    empresa: "Behold Studios",
    localizacao: "Remoto (Brasil)",
    tipo: "PJ - Freelance",
    salario: "R$ 8.000 - R$ 14.000",
    data: "2025-10-03",
    tags: ["Áudio", "Sound Design", "Freelance", "Remoto"],
    resumo: "Criar efeitos sonoros e trilha para jogo indie narrativo.",
    descricao: `Behold Studios busca Sound Designer freelancer para projeto de 6 meses.

**Responsabilidades:**
- Criar efeitos sonoros originais
- Desenvolver trilha sonora adaptativa
- Implementar áudio no Unity/Wwise
- Mixar e masterizar áudio do jogo
- Colaborar com equipe criativa

**Requisitos:**
- 3+ anos de experiência em sound design
- Portfolio com projetos de games
- Domínio de DAWs (Reaper, Pro Tools, etc)
- Experiência com middleware de áudio (Wwise, FMOD)
- Equipamento profissional de gravação

**Diferenciais:**
- Experiência com jogos narrativos
- Conhecimento de composição musical
- Inglês intermediário

**Benefícios:**
- Projeto de 6 meses
- Trabalho remoto
- Horário flexível
- Créditos no jogo
- Portfolio piece de destaque`,
    link: "https://beholdstudios.com.br/vagas"
  }
];


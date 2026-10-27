/* ============================================================
   JOGA 2026 — janelas (pop-ups) de cada modalidade e da programação
   Fonte: Regulamento Geral homologado no Congresso Técnico (22/10/2026), Ata do Congresso,
   Informativos 002, 003 e 004, Cronograma oficial e tabela de jogos da Secretaria de Esportes (23/10/2026). Para atualizar uma regra, edite só este arquivo.
   ============================================================ */
(() => {
  const INSCRICAO = 'https://inscricoesgdc.com.br/?param=7288';
  const WPP = 'https://chat.whatsapp.com/GyE0cGUtcu2523b2oBeTil';
  const REGULAMENTO = 'docs/regulamento-joga-2026.pdf';
  const TERMO = 'docs/termo-de-responsabilidade-joga-2026.pdf';
  const INSTA = 'https://www.instagram.com/joga26_pref/';

  const BLOCO = {
    b: ['Coletivos', '#1F4FB8'], g: ['Raquete e pista', '#4DAE3F'], o: ['Atletismo', '#E94E2C'],
    y: ['Aventura e natureza', '#F2C30F'], k: ['Tabuleiro e jogos', '#0E0E0E'], e: ['Programação', '#E94E2C'],
    s: ['Ação solidária', '#4DAE3F'],
  };
  const PT_GERAL = 'Vale pontos no ranking geral da equipe pela tabela geral: 1º lugar 20 · 2º 17 · 3º 15 · 4º 14 · 5º 13 · 6º 12.';
  const PT_INDIV = 'Cada atleta soma pontos para a equipe (1º 11 · 2º 9 · 3º 7 · 4º 5 · 5º 4 · 6º 3 · 7º 2 · 8º 1). A soma define a colocação da equipe na modalidade, que vira pontos no ranking geral (1º lugar 20 pontos).';
  const QUEM = 'Podem participar servidores efetivos, comissionados, contratados (PSS) e estagiários em exercício, a partir de 18 anos. Em todas as partidas, leve crachá, holerite ou número de matrícula com documento oficial com foto.';

  const M = {
    'Futebol 7 Geral': { b: 'b', tags: ['Masculino', 'Livre'], quando: '27/10, 29/10, 03/11, 05/11 e 06/11 · das 18h30 às 21h30', onde: 'Arena Max Atacadista (Arena Tancredão)',
      resumo: 'Regras oficiais da CBF7, com as adaptações do JOGA.',
      itens: ['1 time masculino por equipe, com até 14 atletas (7 titulares e 7 reservas).', 'Mínimo de 5 atletas para começar ou continuar a partida.',
        '2 tempos de 20 minutos corridos, com 5 minutos de intervalo.', 'Empate: decisão direta nos pênaltis, 3 cobranças alternadas; persistindo, uma por equipe até o vencedor.',
        'Categoria livre, sem limite de idade: quem tem 40 anos ou mais pode jogar no Geral e também no Veteranos.', '2 grupos de 3 equipes: A (Preta, Branca e Laranja) e B (Amarela, Verde e Azul). Os 2 primeiros de cada grupo fazem as semifinais cruzadas em 05/11; disputa de 3º lugar e final em 06/11.'], pts: PT_GERAL },
    'Futebol 7 Veteranos': { b: 'b', tags: ['Masculino', '40 anos ou mais'], quando: '27/10, 29/10, 03/11, 05/11 e 06/11 · das 18h30 às 21h30', onde: 'Arena Max Atacadista (Arena Tancredão)',
      resumo: 'Regras oficiais da CBF7, com as mesmas normas do Futebol 7 Geral.',
      itens: ['Para atletas nascidos até 31/12/1986 (40 anos completos em 2026). Documento oficial com foto obrigatório.',
        '1 time masculino por equipe, com até 14 atletas (7 titulares e 7 reservas); mínimo de 5 para começar.', '2 tempos de 20 minutos corridos, com 5 minutos de intervalo.',
        'Vitória no tempo normal vale 3 pontos. Empate: 3 pênaltis alternados e, se continuar, alternados até a definição; quem vence leva 2 pontos e quem perde, 0.', 'Quem tem 40 anos ou mais pode jogar também no Futebol 7 Geral. Quem tem menos de 40 não joga no Veteranos.', 'Disputa em grupo único, todos contra todos, entre as 5 equipes inscritas (Azul, Laranja, Verde, Preta e Branca). Quem somar mais pontos é campeão.'], pts: PT_GERAL },
    'Futsal Feminino': { b: 'b', tags: ['Feminino'], quando: '09/11 a 13/11', onde: 'Ginásio Santa Teresinha',
      resumo: 'Regras oficiais do futsal, com as adaptações do JOGA.',
      itens: ['Todas as equipes disputam. 1 time feminino por equipe, com até 10 atletas (5 titulares e 5 reservas); mínimo de 4 para começar.', '2 tempos de 10 minutos corridos, com 5 minutos de intervalo.',
        'Empate: 3 pênaltis alternados por equipe e, se continuar, alternados até a definição. Na fase classificatória, quem vence nos pênaltis leva 2 pontos e quem perde, 0.',
        'Substituições livres; tiro de meta com as mãos (até 4 segundos); lateral e escanteio com os pés.', '1 tempo técnico de 30 segundos por tempo de jogo; a capitã fala com a arbitragem.',
        '2 cartões amarelos = suspensão de 1 partida; cartão vermelho = suspensão automática da próxima partida.'], pts: PT_GERAL },
    'Voleibol de Quadra': { b: 'b', tags: ['Masculino', 'Feminino'], quando: '27/10 e 29/10 · a partir das 19h', onde: 'Arena Super Muffato (CIE · Pavão) · quadras 01 e 02',
      resumo: 'Regras oficiais da CBV, com disputa por chaves.',
      itens: ['1 time masculino e 1 feminino por equipe, com até 12 atletas cada.', 'Partidas em 2 sets vencedores; o 3º set, se houver, é tie-break.',
        'No feminino, 2 grupos de 3: A (Azul, Branca e Preta) e B (Amarela, Verde e Laranja). Semifinais cruzadas, disputa de 3º lugar e final em 29/10.', 'No masculino, disputa em grupo único, todos contra todos, entre as 5 equipes inscritas (Preta, Laranja, Branca, Verde e Azul).', 'No banco, só o técnico e o assistente técnico, identificados.'], pts: PT_GERAL },
    'Vôlei de Areia 4x4': { b: 'b', tags: ['Misto'], quando: '12/11', onde: 'Arena ATV',
      resumo: 'Quatro contra quatro na areia, com pelo menos uma mulher em quadra o tempo todo.',
      itens: ['6 atletas por time (4 titulares e 2 reservas); mínimo de 3 para começar.', 'Pelo menos 1 mulher em quadra durante toda a partida.',
        'Melhor de 3 sets: 1º e 2º até 21 pontos, tie-break até 15 (diferença mínima de 2).', 'Bloqueio conta como toque; pode usar os pés, sem condução; saque de qualquer ponto atrás da linha de fundo.',
        '1 tempo de 30 segundos por set; troca de lado a cada set e, no tie-break, a cada 7 pontos.', 'Atraso de mais de 10 minutos = W.O.'], pts: PT_GERAL },
    'Basquete 3x3 Geral': { b: 'b', tags: ['Masculino', 'Feminino'], quando: '10/11 e 11/11', onde: 'Ginásio Santana',
      resumo: 'Regras oficiais FIBA 3x3, com adaptações.',
      itens: ['1 time por naipe, com 6 atletas (3 titulares e 3 reservas); mínimo de 3 para começar.', '10 minutos corridos ou até um time chegar a 21 pontos; empate vai para a prorrogação, vence quem fizer 2 pontos primeiro.',
        'Cesta de dentro do arco vale 1 ponto, de fora vale 2; lance livre vale 1.', 'Posse de 12 segundos para atacar; 1 tempo de 30 segundos por jogo; o relógio só para em lance livre e pedido de tempo.',
        'Faltas coletivas: a partir da 7ª, 2 lances livres; a partir da 10ª, 2 lances livres e posse de bola.', 'Quem joga no Geral não pode jogar no Veteranos.'], pts: PT_GERAL },
    'Basquete 3x3 Veteranos': { b: 'b', tags: ['Masculino', '40 anos ou mais'], quando: '10/11 e 11/11', onde: 'Ginásio Santana',
      resumo: 'Regras oficiais FIBA 3x3, com as mesmas adaptações do Basquete 3x3 Geral.',
      itens: ['Para atletas nascidos até 31/12/1986 (40 anos completos em 2026). Documento oficial com foto.', '1 time masculino por equipe, com 6 atletas; mínimo de 3 para começar.', 'Disputa em grupo único, todos contra todos, entre as equipes inscritas.',
        '10 minutos corridos ou até 21 pontos; empate vai para a prorrogação até 2 pontos.', 'Quem joga no Basquete 3x3 Geral não pode jogar no Veteranos.'], pts: PT_GERAL },
    'Cabo de Guerra': { b: 'b', tags: ['Masculino', 'Feminino'], quando: '28/10 (quarta), a partir das 20h, no dia da Cerimônia de Abertura', onde: 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes) · pistas 01 e 02',
      resumo: 'Força, pegada e equipe inteira no mesmo puxão.',
      itens: ['1 time masculino e 1 feminino por equipe, com 12 atletas cada (10 titulares e 2 reservas); mínimo de 8 para começar.',
        'Melhor de 3 puxadas: vence quem ganhar 2.', 'Ganha a puxada quem arrastar o adversário 3 metros a partir da linha central.',
        'Proibido enrolar a corda nas mãos, nos braços ou no corpo: só pegada direta.', 'No feminino, 2 grupos de 3: A (Laranja, Amarela e Branca) e B (Verde, Azul e Preta), com semifinais cruzadas, disputa de 3º lugar e final.', 'No masculino, disputa em grupo único, todos contra todos, entre as 5 equipes inscritas (Branca, Azul, Amarela, Preta e Laranja).'], pts: PT_GERAL },
    'Caçador/Queimada': { b: 'b', tags: ['Masculino', 'Feminino'], quando: '04/11', onde: 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)',
      resumo: 'A queimada de sempre, com regra combinada para todo mundo.',
      itens: ['Até 14 atletas por time (10 titulares e 4 reservas); mínimo de 7 para começar.', 'Melhor de 2 sets vencedores, de 10 minutos cada.',
        'O capitão (base) tem 1 vida e pode ir para a "linha" depois que um companheiro é queimado.',
        'É queimado quem é atingido pela bola e ela toca o chão em seguida. Dá para salvar o companheiro segurando a bola antes de ela cair.',
        'Empate de jogadores vivos no fim do tempo: morte súbita, vence quem queimar primeiro.', 'No masculino, disputa em grupo único, todos contra todos, entre as equipes inscritas.'], pts: PT_GERAL },
    'Beach Tennis': { b: 'g', tags: ['Masculino', 'Feminino', 'Duplas'], quando: '12/11', onde: 'Arena ATV',
      resumo: 'Regras oficiais da CBT, com adaptações.',
      itens: ['Todas as equipes disputam o masculino e o feminino. 1 dupla por categoria por equipe: 2 titulares e 1 reserva opcional.', 'Melhor de 3 sets de 6 games, com vantagem tradicional.',
        'Em 6x6 games, tie-break até 7 pontos; em 1x1 em sets, o 3º set é um super tie-break até 10 (diferença mínima de 2).',
        'Saque por baixo ou lateral, com o pé atrás da linha de fundo. Bola laranja homologada pela CBT.', 'Aquecimento de 3 minutos; 1 minuto entre sets; 1 tempo de 30 segundos por set.'], pts: PT_GERAL },
    'Tênis de Mesa': { b: 'g', tags: ['Masculino', 'Feminino', 'Individual'], quando: '27/10 (masculino) e 29/10 (feminino)', onde: 'Centro de Treinamento de Tênis de Mesa · Rua Inácio Karpinski, 466, Bonsucesso',
      resumo: 'Regras oficiais da CBTM e da Federação de Tênis de Mesa do Paraná.',
      itens: ['Até 4 participantes por naipe por equipe.', 'Melhor de 3 sets; cada set vai até 11 pontos (com 2 pontos de diferença).', 'Saque alternado conforme a regra oficial.'], pts: PT_INDIV },
    'Bocha': { b: 'g', tags: ['Duplas livres'], quando: '27/10', onde: 'Clube Atalaia',
      resumo: 'Duplas de formação livre: dois homens, duas mulheres ou um homem e uma mulher. Regras da Confederação Brasileira de Bocha.',
      itens: ['Até 6 atletas por equipe, em 2 duplas, cada uma com 2 titulares e 1 reserva. São 12 duplas em 4 chaves de 3; classificam as 2 melhores de cada chave.',
        'Dupla contra dupla, com 2 bochas por jogador. Objetivo: deixar suas bochas mais perto do bolim do que as do adversário.',
        'Cada bocha mais próxima do bolim que a melhor adversária vale 1 ponto; as partidas vão até 8 pontos.',
        'Na rafa e no tiro, declare antes ao árbitro o tipo de jogada e o alvo. A medição é do árbitro.',
        'Até 30 segundos para lançar; silêncio durante o lançamento. Proibido usar celular, beber ou fumar durante a partida.', 'Distância oficial: 25 metros.'], pts: PT_GERAL },
    'Bolão': { b: 'g', tags: ['Misto'], quando: '26/10', onde: 'Clube Atalaia',
      resumo: 'Equipes mistas, com atletas de ambos os sexos.',
      itens: ['1 equipe mista por equipe: 5 titulares e 1 reserva (sugestão: 4 de um gênero e 2 do outro); mínimo de 5 para começar.',
        '4 pistas, 5 arremessos por pista: 20 por passada, em 2 passadas (40 arremessos).', 'Vence quem derrubar mais pinos na soma; contam os 4 melhores, com 1 descarte.',
        'Arremesso que passar da linha é anulado; bola fora da pista não conta; pino travado ou falha mecânica: repete.',
        'Substituição só entre rodadas, do mesmo naipe e com autorização da arbitragem.', 'Tolerância de 10 minutos; depois disso, W.O.'], pts: PT_GERAL },
    'Sinuca': { b: 'g', tags: ['Masculino', 'Feminino', 'Misto', 'Duplas'], quando: '05/11', onde: 'Clube Atalaia',
      resumo: 'Bola 8, em duplas, com sorteio inicial e mata-mata.',
      itens: ['Até 3 duplas por equipe: 1 masculina, 1 feminina e 1 mista, com 6 atletas diferentes. A mesma pessoa não joga em mais de uma categoria.', 'Sorteio inicial no local e depois mata-mata; as categorias jogam separadas.',
        'Bola 8: grupo das menores (1 a 7) e das maiores (9 a 15), definido na disputa inicial. Encaçapa o seu grupo e depois a bola 8.',
        'Castigo duplo: só quando o adversário comete infração, a dupla ganha o direito de encaçapar mais uma bola.'], pts: PT_INDIV },
    'Caminhada': { b: 'o', tags: ['Misto', 'Participação'], quando: '14/11', onde: 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)',
      resumo: 'Percurso de 2 km, sem disputa de velocidade.',
      itens: ['Mínimo de 15 participantes por equipe.', 'Vá caracterizado com as cores da sua equipe; inscrição prévia obrigatória.'],
      pts: 'Atividade de participação: a equipe garante 10 pontos fixos no ranking geral quando pelo menos 15 integrantes concluem a caminhada.' },
    'Corrida de Rua': { b: 'o', tags: ['Misto', 'Até 39 anos', '40 anos ou mais'], quando: '14/11 — largada às 8h', onde: 'Largada e chegada na Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)',
      resumo: 'Percurso de 4,8 km, em duas categorias independentes: até 39 anos e 40 anos ou mais, masculino e feminino.',
      itens: ['Chegue das 7h às 7h30 para retirar o número de peito. Largada às 8h.', 'Número de peito obrigatório, preso na frente: sem ele, o tempo não é contado.',
        'Inscrição prévia obrigatória, no prazo da nota técnica. Mínimo de 30 participantes por equipe. Cronometragem manual, com supervisão técnica.',
        'Percurso: Brigadeiro Rocha, Rua das Rosas, Manoel Ribas, XV de Novembro, Getúlio Vargas, Comendador Norberto, Travessa da Independência, Dr. Xavier da Silva até a 17 de Julho, e volta pela Brigadeiro Rocha até o ginásio.',
        'Troféus do 1º ao 5º lugar e medalha para quem concluir.'],
      pts: 'A equipe garante 10 pontos quando 30 inscritos concluem a prova. Em cada categoria, os 8 primeiros somam pontos para a equipe (1º 11 … 8º 1), e a equipe com mais pontos vence a categoria no ranking geral.' },
    'Corrida Kids': { b: 'o', tags: ['Filhos de servidores', '2 a 14 anos'], quando: 'A confirmar', onde: 'A confirmar',
      resumo: 'Corrida para os filhos dos servidores municipais, de 2 a 14 anos.',
      itens: ['Participação livre para filhos de servidores municipais, de 2 a 14 anos.', 'É preciso a autorização do responsável legal.',
        'Data, local e percurso serão divulgados pela organização. Acompanhe o site, o Instagram e o coordenador da sua equipe.'],
      quem: 'A Corrida Kids é a única atividade aberta a quem não é servidor: os filhos dos servidores municipais, de 2 a 14 anos, com autorização do responsável legal.' },
    'Rapel': { b: 'y', tags: ['Misto', 'Participação'], quando: '10/11', onde: 'Praça da Fé',
      resumo: 'Atividade de participação e integração, sem disputa de tempo ou desempenho.',
      itens: ['Exatamente 7 participantes por equipe, divididos em turnos: com menos de 7 a equipe não pontua, e não pode passar de 7. Uma descida por pessoa.',
        'A organização fornece capacete, cadeirinha, freio oito e luvas. Obrigatório usar calça comprida e tênis (shorts não é permitido); cabelo comprido, preso com elástico.', 'É atividade em altura: avalie as suas condições de saúde antes de se inscrever.',
        'Siga todas as orientações dos instrutores. Proibido descer com objetos nas mãos ou acessórios soltos.', 'Proibido consumir bebida alcoólica ou qualquer entorpecente antes ou durante a atividade.',
        'Em caso de chuva, vento forte ou raios, a atividade pode ser adiada pela organização.'],
      pts: 'A equipe garante 10 pontos fixos no ranking geral só com a participação dos 7 integrantes inscritos; com menos de 7, não pontua.' },
    'Trilha Noturna': { b: 'y', tags: ['Misto', 'Participação'], quando: '03/11', onde: 'Parque das Araucárias',
      resumo: 'Atividade de participação e integração, sem caráter competitivo.',
      itens: ['1 grupo misto por equipe, com até 20 participantes. Percurso de cerca de 2 km.', 'Obrigatório: iluminação individual (pode ser a lanterna do celular), roupa confortável e calçado fechado.',
        'Percurso definido e acompanhado por monitores. Chegue no horário: quem não acompanhar todo o protocolo de segurança não participa. Termo de responsabilidade obrigatório.',
        'Proibido correr, se afastar do grupo, usar fone de ouvido ou beber.', 'Em caso de chuva, vento forte ou raios, a atividade não acontece; a organização avisa por nota técnica no dia.'],
      pts: 'A equipe garante 10 pontos fixos no ranking geral quando pelo menos 15 integrantes concluem o percurso, com conferência presencial.' },
    'Xadrez': { b: 'k', tags: ['Misto', 'Individual'], quando: '05/11', onde: 'Clube Atalaia',
      resumo: 'Regras da FIDE combinadas com o regulamento do JOGA.',
      itens: ['Até 5 participantes por equipe.', 'Sistema suíço, 6 rodadas, 15 minutos de reflexão por jogador, sem acréscimo.',
        'Vitória vale 1 ponto, empate 0,5 e derrota 0.', 'Desempate: confronto direto, milésimos medianos, milésimos totais e Sonneborn-Berger.',
        'Peça tocada é peça jogada; aperte o relógio com a mesma mão que moveu a peça.'], pts: PT_INDIV },
    'Truco': { b: 'k', tags: ['Duplas', 'Formação livre'], quando: '05/11', onde: 'Clube Atalaia',
      resumo: 'Truco Paulista na regra de bar, com as regras da Federação Paranaense de Truco no que o regulamento não especificar.',
      itens: ['Duplas de formação livre: masculinas, femininas ou mistas, sem obrigação de ter um homem e uma mulher.', 'Baralho de 40 cartas (sem 8, 9 e 10); a vira define a manilha.',
        'Sem envido e sem flor. Truco vale 3, seis vale 6, nove vale 9 e doze vale 12. Partidas até 12 pontos, em melhor de 3.',
        'Corte livre; cartas dadas uma a uma, sempre por baixo. Proibido trucar com 2 ou 4 cartas.', 'Mão de onze: a dupla com 11 pontos pode trocar as cartas e decidir se joga a mão.',
        'Eliminatória simples. Irregularidade comprovada desclassifica a dupla.'], pts: PT_GERAL },

    /* ---------------- destaques da programação ---------------- */
    'Noite Cultural': { b: 'e', ev: true, tags: ['Show de Talentos', 'Talento Escondido', 'Batalha de Dança'], quando: '26/10 (segunda-feira), às 19h', onde: 'Teatro Municipal Marina Karam Primak · Rua Padre Chagas, 3130, Centro',
      resumo: 'O Show de Talentos abre a programação do JOGA: cada equipe leva um talento e uma dança ao palco. As apresentações são só de servidores municipais.',
      itens: ['<b>19h · Sorteio da ordem de apresentação</b> das duas provas. Logo depois começa o Talento Escondido: quem vai se apresentar precisa estar no teatro às 19h.',
        '<b>20h15 · Batalha de Dança — Túnel do Tempo:</b> todos os dançarinos a postos no teatro às 20h15.',
        '<b>Pontualidade:</b> o atraso pode custar a vez na ordem de apresentação ou a desclassificação da equipe na prova.',
        '<b>Talento Escondido:</b> uma apresentação por equipe, de até 4 minutos, com um ou mais servidores: música, dança, imitação, humor, mágica, poesia, instrumento musical e o que mais aparecer.',
        'Critérios do talento (0 a 10 cada, até 50 pontos por jurado): criatividade, desenvoltura, originalidade, execução e interação com o público.',
        '<b>Batalha de Dança:</b> cada equipe dança a década sorteada no Congresso Técnico, com música, figurino, coreografia e elementos da época, sem limite de participantes. Preta, anos 60 · Amarela, anos 70 · Laranja, anos 80 · Branca, anos 90 · Verde, anos 2000 · Azul, anos 2010.',
        'Critérios da dança (0 a 10 cada, até 50 pontos por jurado): fidelidade ao tema e à época, coreografia e criatividade, sincronia e execução, animação e presença de palco, caracterização e figurino.',
        'As notas das duas provas são somadas: vence o Show de Talentos a equipe com a maior nota final.',
        '<b>Ingressos:</b> 52 por equipe, já contando a torcida e quem vai se apresentar (o teatro tem 312 lugares). A retirada é pelo link que o coordenador da sua equipe repassa: procure o coordenador.'],
      pts: 'Ranking geral: 1º lugar 10 pontos · 2º 6 · 3º 4 · 4º 3 · 5º 2 · 6º 1.' },
    'Cerimônia de Abertura': { b: 'e', ev: true, tags: ['Todas as equipes', 'Presença obrigatória'], quando: '28/10 (quarta-feira), às 19h', onde: 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)',
      resumo: 'A noite em que as seis equipes entram juntas em quadra, com desfile, cerimonial e a passagem da tocha. Presença obrigatória para todas as equipes.',
      itens: ['<b>Desfile das equipes</b> com camisetas e bandeiras. A organização prevê 50 integrantes por equipe no desfile e 30 na torcida.',
        '<b>Passagem da tocha olímpica</b> por um representante de cada equipe.', 'Banda e praça de alimentação com food trucks.',
        'Avaliação das torcidas, com até 10 pontos em cada critério:', '<b>Animação e entrosamento</b> da equipe.', '<b>Disciplina e respeito</b> às demais delegações.',
        '<b>Participação</b> e número de integrantes presentes.', 'No mesmo dia e no mesmo ginásio acontece o Cabo de Guerra, a única modalidade esportiva da data.',
        'Como em todo o JOGA, é proibido consumir bebida alcoólica.'],
      pts: 'Vale até 30 pontos no ranking geral.' },

    /* ---------------- ações solidárias (Informativos 002 e 003) ---------------- */
    'Doação de Sangue': { b: 's', ev: true, k: 'Ação solidária', tags: ['Até 10 doadores por equipe', 'O negativo vale o dobro'], quando: 'Doações de 26/10 a 12/11 · inscrição com o coordenador até 25/10', onde: 'Hemocentro · agendamento pelo WhatsApp <a href="https://wa.me/5542988786311" target="_blank" rel="noopener">(42) 98878-6311</a>',
      resumo: 'Doar sangue salva vidas e soma pontos para a sua equipe. Solidariedade também entra em campo.',
      itens: ['<b>Inscrição:</b> com o coordenador da sua equipe, até domingo, 25/10. Ele envia à organização a lista de doadores (nome completo, CPF, matrícula, lotação, secretaria, equipe e telefone).',
        '<b>Agendamento:</b> é por conta de cada doador, pelo WhatsApp do Hemocentro, <a href="https://wa.me/5542988786311" target="_blank" rel="noopener">(42) 98878-6311</a>. Atendimento das 8h às 11h e das 12h45 às 14h.',
        '<b>No Hemocentro:</b> leve documento oficial com foto, diga que é participante do JOGA 2026 e, depois de doar, assine a lista da sua equipe na recepção. É essa assinatura que valida os pontos.',
        'Valem as doações feitas de 26/10 a 12/11, por servidores das secretarias da equipe.',
        '<b>Requisitos básicos:</b> ter de 18 a 69 anos (primeira doação até 60), pesar mais de 50 kg, estar bem de saúde, ter dormido bem e estar alimentado: refeição leve, sem gordura, nas 4 horas antes. Não doe em jejum.',
        '<b>Impedimentos:</b> algumas condições impedem a doação para sempre e outras por um tempo, como gripe ou resfriado, antibiótico nos últimos 15 dias, vacina nos últimos 30 dias, tatuagem ou piercing nos últimos 12 meses e bebida alcoólica nas últimas 12 horas. A lista completa está no informativo; na dúvida, pergunte ao Hemocentro no agendamento.',
        '<a href="docs/informativo-002-2026-doacao-de-sangue.pdf" target="_blank" rel="noopener">Ler o Informativo nº 002/2026 (PDF)</a>'],
      pts: '2 pontos por doação efetiva, até 20 pontos por equipe. A pedido do Hemocentro, doador O negativo vale 4 pontos (até 2 doadores por equipe).' },
    'Arrecadação de Alimentos': { b: 's', ev: true, k: 'Ação solidária', tags: ['Alimentos não perecíveis', 'Pesagem em 12/11'], quando: 'Até a pesagem oficial, em 12/11', onde: 'Nos locais informados por cada equipe à organização',
      resumo: 'Cada quilo vira ajuda para quem precisa e ponto para a sua equipe.',
      itens: ['Valem só alimentos <b>não perecíveis</b>, dentro da validade e com a embalagem intacta.',
        'Cada equipe guarda e organiza os alimentos arrecadados até a pesagem.',
        '<b>Pesagem oficial em 12/11:</b> a Coordenação Geral passa nos locais combinados com as equipes, em horário agendado no grupo da coordenação. Só conta o que for apresentado nesse dia e local.',
        'A organização entrega uma lista de instituições e projetos sociais, e cada equipe escolhe quem recebe as suas doações.',
        'A equipe registra a entrega em foto e envia as imagens ao grupo oficial da coordenação.',
        '<a href="docs/informativo-003-2026-arrecadacao-de-alimentos.pdf" target="_blank" rel="noopener">Ler o Informativo nº 003/2026 (PDF)</a>'],
      pts: 'A cada 200 kg completos, 2 pontos, até 20 pontos por equipe (2.000 kg). Quantidades abaixo de 200 kg e frações não pontuam.' },
  };

  const AGENDA = [
    ['26/10', 'seg', [['Bolão', 'Clube Atalaia · sorteio na hora'], ['Noite Cultural · 19h', 'Teatro Municipal']]],
    ['27/10', 'ter', [['Futebol 7', 'Arena Max Atacadista (Arena Tancredão) · 18h30 às 21h30'], ['Voleibol de Quadra', 'Arena Super Muffato (CIE · Pavão) · 19h às 21h30'], ['Bocha', 'Clube Atalaia · 19h · sorteio na hora'], ['Tênis de Mesa · Masculino', 'C.T. de Tênis de Mesa · R. Inácio Karpinski, 466, Bonsucesso · sorteio na hora']]],
    ['28/10', 'qua', [['Cerimônia de Abertura · 19h', 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)'], ['Cabo de Guerra', 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes) · a partir das 20h']]],
    ['29/10', 'qui', [['Futebol 7', 'Arena Max Atacadista (Arena Tancredão) · 18h30 às 21h30'], ['Voleibol de Quadra', 'Arena Super Muffato (CIE · Pavão) · 19h às 21h · finais do feminino'], ['Tênis de Mesa · Feminino', 'C.T. de Tênis de Mesa · R. Inácio Karpinski, 466, Bonsucesso · sorteio na hora']]],
    ['30/10', 'sex', [['Recesso', '']]],
    ['02/11', 'seg', [['Feriado', '']]],
    ['03/11', 'ter', [['Futebol 7', 'Arena Max Atacadista (Arena Tancredão) · 18h30 às 21h30'], ['Trilha Noturna', 'Parque das Araucárias']]],
    ['04/11', 'qua', [['Caçador/Queimada', 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)']]],
    ['05/11', 'qui', [['Futebol 7', 'Arena Max Atacadista (Arena Tancredão) · 18h30 às 21h30 · semifinais do Geral'], ['Sinuca, Truco e Xadrez', 'Clube Atalaia · sorteio na hora']]],
    ['06/11', 'sex', [['Futebol 7', 'Arena Max Atacadista (Arena Tancredão) · 18h30 às 21h30 · finais do Geral']]],
    ['09/11', 'seg', [['Futsal Feminino', 'Ginásio Santa Teresinha']]],
    ['10/11', 'ter', [['Futsal Feminino', 'Ginásio Santa Teresinha'], ['Basquete 3x3', 'Ginásio Santana'], ['Rapel', 'Praça da Fé']]],
    ['11/11', 'qua', [['Futsal Feminino', 'Ginásio Santa Teresinha'], ['Basquete 3x3', 'Ginásio Santana']]],
    ['12/11', 'qui', [['Futsal Feminino', 'Ginásio Santa Teresinha'], ['Vôlei de Areia 4x4', 'Arena ATV'], ['Beach Tennis', 'Arena ATV'], ['Pesagem dos alimentos', 'Arrecadação Solidária'], ['Último dia da Doação de Sangue', 'Hemocentro']]],
    ['13/11', 'sex', [['Futsal Feminino', 'Ginásio Santa Teresinha']]],
    ['14/11', 'sáb', [['Corrida de Rua e Caminhada', 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)'], ['Encerramento · 9h', 'resultados e premiação · local a confirmar']]],
  ];


  /* tabela oficial de jogos (Secretaria de Esportes · Gerenciador de Competições, 23/10/2026) */
  const JOGOS = {"Cabo de Guerra": [["28/10", "quarta", "Arena Ilumina Guarapuava (Ginásio Joaquim Prestes) · Pista 01", "Feminino", [["20h", "Laranja", "Amarela", "Grupo A"], ["20h10", "Verde", "Azul", "Grupo B"], ["20h20", "Branca", "Laranja", "Grupo A"], ["20h30", "Azul", "Preta", "Grupo B"], ["20h40", "Amarela", "Branca", "Grupo A"], ["20h50", "Preta", "Verde", "Grupo B"], ["21h", "1º Grupo A", "2º Grupo B", "Semifinal 1"], ["21h10", "1º Grupo B", "2º Grupo A", "Semifinal 2"], ["21h20", "Perdedor SF1", "Perdedor SF2", "3º lugar"], ["21h30", "Vencedor SF1", "Vencedor SF2", "Final"]]], ["28/10", "quarta", "Arena Ilumina Guarapuava (Ginásio Joaquim Prestes) · Pista 02", "Masculino", [["20h", "Branca", "Azul", "Grupo único"], ["20h10", "Amarela", "Preta", "Grupo único"], ["20h20", "Laranja", "Amarela", "Grupo único"], ["20h30", "Azul", "Preta", "Grupo único"], ["20h40", "Preta", "Branca", "Grupo único"], ["20h50", "Azul", "Laranja", "Grupo único"], ["21h", "Amarela", "Azul", "Grupo único"], ["21h10", "Branca", "Laranja", "Grupo único"], ["21h20", "Laranja", "Preta", "Grupo único"], ["21h30", "Branca", "Amarela", "Grupo único"]]]], "Futebol 7 Veteranos": [["27/10", "terça", "Arena Max Atacadista (Arena Tancredão)", "", [["18h30", "Azul", "Laranja", "Grupo único"], ["19h30", "Verde", "Preta", "Grupo único"]]], ["29/10", "quinta", "Arena Max Atacadista (Arena Tancredão)", "", [["19h30", "Laranja", "Preta", "Grupo único"], ["20h30", "Branca", "Verde", "Grupo único"]]], ["03/11", "terça", "Arena Max Atacadista (Arena Tancredão)", "", [["20h30", "Preta", "Azul", "Grupo único"], ["21h30", "Laranja", "Branca", "Grupo único"]]], ["05/11", "quinta", "Arena Max Atacadista (Arena Tancredão)", "", [["18h30", "Verde", "Laranja", "Grupo único"], ["20h30", "Azul", "Branca", "Grupo único"]]], ["06/11", "sexta", "Arena Max Atacadista (Arena Tancredão)", "", [["19h30", "Azul", "Verde", "Grupo único"], ["21h30", "Branca", "Preta", "Grupo único"]]]], "Futebol 7 Geral": [["27/10", "terça", "Arena Max Atacadista (Arena Tancredão)", "", [["20h30", "Amarela", "Verde", "Grupo B"], ["21h30", "Preta", "Branca", "Grupo A"]]], ["29/10", "quinta", "Arena Max Atacadista (Arena Tancredão)", "", [["18h30", "Verde", "Azul", "Grupo B"], ["21h30", "Branca", "Laranja", "Grupo A"]]], ["03/11", "terça", "Arena Max Atacadista (Arena Tancredão)", "", [["18h30", "Laranja", "Preta", "Grupo A"], ["19h30", "Azul", "Amarela", "Grupo B"]]], ["05/11", "quinta", "Arena Max Atacadista (Arena Tancredão)", "", [["19h30", "1º Grupo B", "2º Grupo A", "Semifinal 2"], ["21h30", "1º Grupo A", "2º Grupo B", "Semifinal 1"]]], ["06/11", "sexta", "Arena Max Atacadista (Arena Tancredão)", "", [["18h30", "Perdedor SF1", "Perdedor SF2", "3º lugar"], ["20h30", "Vencedor SF1", "Vencedor SF2", "Final"]]]], "Voleibol de Quadra": [["27/10", "terça", "Arena Super Muffato (CIE · Pavão) · Quadra 01", "Masculino", [["19h", "Preta", "Laranja", "Grupo único"], ["19h30", "Branca", "Verde", "Grupo único"], ["20h", "Azul", "Preta", "Grupo único"], ["20h30", "Verde", "Laranja", "Grupo único"], ["21h", "Laranja", "Branca", "Grupo único"]]], ["27/10", "terça", "Arena Super Muffato (CIE · Pavão) · Quadra 02", "Feminino", [["19h", "Amarela", "Verde", "Grupo B"], ["19h30", "Azul", "Branca", "Grupo A"], ["20h", "Branca", "Preta", "Grupo A"], ["20h30", "Verde", "Laranja", "Grupo B"], ["21h", "Preta", "Azul", "Grupo A"], ["21h30", "Laranja", "Amarela", "Grupo B"]]], ["29/10", "quinta", "Arena Super Muffato (CIE · Pavão) · Quadra 01", "Masculino", [["19h", "Verde", "Azul", "Grupo único"], ["19h30", "Preta", "Verde", "Grupo único"], ["20h", "Branca", "Azul", "Grupo único"], ["20h30", "Azul", "Laranja", "Grupo único"], ["21h", "Branca", "Preta", "Grupo único"]]], ["29/10", "quinta", "Arena Super Muffato (CIE · Pavão) · Quadra 02", "Feminino", [["19h", "1º Grupo A", "2º Grupo B", "Semifinal 1"], ["19h30", "1º Grupo B", "2º Grupo A", "Semifinal 2"], ["20h", "Perdedor SF1", "Perdedor SF2", "3º lugar"], ["20h30", "Vencedor SF1", "Vencedor SF2", "Final"]]]]};
  const COR = { Azul: '#1F4FB8', Verde: '#4DAE3F', Amarela: '#F2C30F', Branca: '#F5F2E9', Preta: '#0E0E0E', Laranja: '#E94E2C' };
  const tm = n => COR[n] ? `<span class="jg__t" style="--c:${COR[n]}"><i></i>${n}</span>` : `<span class="jg__t ph"><i></i>${n}</span>`;
  const SORTEIO_LOCAL = ['Bolão', 'Bocha', 'Tênis de Mesa', 'Sinuca', 'Truco', 'Xadrez'];   // Art. 15, § 2º
  const jogos = key => {
    if (SORTEIO_LOCAL.includes(key)) return `<h4>Jogos</h4><div class="jg"><p class="jg__sort"><b>Sorteio na hora.</b> Não tem tabela antes: as chaves são sorteadas no local, antes do início das disputas. Chegue no horário.</p></div>`;
    const dias = JOGOS[key]; if (!dias) return '';
    return `<h4>Jogos</h4><div class="jg">${dias.map(([d, w, loc, nap, js]) => `<p class="jg__d"><b>${d}</b> ${w}${nap ? ` · <em>${nap}</em>` : ''}<span>${loc}</span></p>
      <ul class="jg__l">${js.map(([h, a, b, g]) => `<li class="jg__r"><span class="jg__h">${h}</span><span class="jg__m">${tm(a)}<span class="jg__x">x</span>${tm(b)}</span><span class="jg__g${/Final|lugar|Semi/.test(g) ? ' fin' : ''}">${g}</span></li>`).join('')}</ul>`).join('')}
      <p class="jg__note">Tabela oficial da Secretaria de Esportes. Mudanças de horário saem nas notas oficiais.</p></div>`;
  };

  const slug = s => 'mod-' + s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const SLUGS = {}; Object.keys(M).forEach(k => SLUGS[slug(k)] = k); SLUGS['mod-programacao'] = '__programacao';

  const IC = {
    cal: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.6" fill="currentColor"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  };
  const INSC = `<div class="mdl__insc"><p><b>Como se inscrever:</b> procure o <b>coordenador da sua equipe</b>. É ele quem faz a inscrição no sistema oficial, até domingo, 25 de outubro.</p><a class="mdl__step" href="#inscricao" data-close>Ver o passo a passo ${IC.arrow}</a></div>`;
  const AVISO = `<p class="mdl__notice"><b>Aviso importante:</b> confira sempre as informações no site oficial do JOGA, no Instagram <a href="${INSTA}" target="_blank" rel="noopener">@joga26_pref</a>, no <a href="${WPP}" target="_blank" rel="noopener">grupo do WhatsApp</a> ou com os coordenadores. Ficou com dúvida? Procure o coordenador da sua equipe.</p>`;

  /* ---------------- janela ---------------- */
  const box = document.createElement('div');
  box.className = 'mdl'; box.hidden = true;
  box.innerHTML = '<div class="mdl__bg" data-close></div><div class="mdl__panel" role="dialog" aria-modal="true" aria-labelledby="mdlTitle" tabindex="-1"><button class="mdl__x" type="button" data-close aria-label="Fechar">×</button><div class="mdl__in"></div></div>';
  document.body.appendChild(box);
  const panel = box.querySelector('.mdl__panel'), inner = box.querySelector('.mdl__in');
  let lastFocus = null;

  const render = key => {
    if (key === '__programacao') {
      const rows = AGENDA.map(([d, w, it]) => `<li class="ag"><div class="ag__d"><b>${d}</b><span>${w}</span></div><div class="ag__it">${it.map(([a, l]) => `<p><b>${a}</b>${l ? `<span>${l}</span>` : ''}</p>`).join('')}</div></li>`).join('');
      return `<div class="mdl__head" style="--c:#E94E2C"><p class="mdl__k">JOGA 2026 · 26 de outubro a 14 de novembro</p><h3 id="mdlTitle">Programação completa</h3></div>
        <div class="mdl__body"><ul class="agenda">${rows}</ul><p class="mdl__small">Datas e locais do cronograma oficial; as tabelas e horários de cada jogo saem nas notas oficiais da organização.</p></div>
        <div class="mdl__foot">${INSC}${AVISO}</div>`;
    }
    const d = M[key]; const [bn, bc] = BLOCO[d.b];
    const tags = d.tags.map(t => `<span>${t}</span>`).join('');
    const itens = d.itens.map(t => `<li>${t}</li>`).join('');
    const pts = d.pts ? `<div class="mdl__pts"><b>Pontuação</b><p>${d.pts}</p></div>` : '';
    const go = d.ev ? '' : INSC;
    const quem = d.ev ? '' : `<p class="mdl__who">${d.quem || QUEM}</p>`;
    return `<div class="mdl__head" style="--c:${bc}"><p class="mdl__k">${d.ev ? (d.k || 'Destaque da programação') : 'Modalidade · ' + bn}</p><h3 id="mdlTitle">${key}</h3><div class="mdl__tags">${tags}</div></div>
      <div class="mdl__meta"><p>${IC.cal}<span><b>Quando</b>${d.quando}</span></p><p>${IC.pin}<span><b>Onde</b>${d.onde}</span></p></div>
      <div class="mdl__body"><p class="mdl__lead">${d.resumo}</p>${jogos(key)}<h4>Como funciona</h4><ul class="mdl__list">${itens}</ul>${pts}</div>
      <div class="mdl__foot">${go}<a class="mdl__doc" href="${REGULAMENTO}" target="_blank" rel="noopener">Regulamento completo (PDF)</a>${quem}${AVISO}</div>`;
  };
  const open = (key, push = true) => {
    if (!(key in M) && key !== '__programacao') return;
    lastFocus = document.activeElement;
    inner.innerHTML = render(key);
    box.hidden = false; document.documentElement.classList.add('mdl-open');
    requestAnimationFrame(() => box.classList.add('is-on'));
    panel.scrollTop = 0; panel.focus({ preventScroll: true });
    if (push) history.replaceState(null, '', '#' + (key === '__programacao' ? 'mod-programacao' : slug(key)));
  };
  const close = () => {
    if (box.hidden) return;
    box.classList.remove('is-on'); document.documentElement.classList.remove('mdl-open');
    setTimeout(() => { box.hidden = true; inner.innerHTML = ''; }, 220);
    if (location.hash.startsWith('#mod-')) history.replaceState(null, '', location.pathname + location.search);
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  };
  const goTo = id => {
    const t = document.querySelector(id); if (!t) return;
    if (t.tagName === 'DETAILS') t.open = true;
    const top = t.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  box.addEventListener('click', e => {
    const c = e.target.closest('[data-close]'); if (!c) return;
    const href = c.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) { e.preventDefault(); close(); setTimeout(() => goTo(href), 30); }
    else close();
  });
  document.addEventListener('keydown', e => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') {   // mantém o foco dentro da janela
      const f = [...panel.querySelectorAll('a[href],button')]; if (!f.length) return;
      const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
  });

  /* ---------------- cartões das modalidades ---------------- */
  document.querySelectorAll('.mod[data-mod]').forEach(card => {
    const key = card.dataset.mod; if (!(key in M)) return;
    card.setAttribute('role', 'button'); card.setAttribute('tabindex', '0'); card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', key + ': ver regras');
    const more = document.createElement('span'); more.className = 'mod__more'; more.textContent = 'Ver regras +';
    (card.querySelector(':scope > div:not(.mod__icon)') || card).appendChild(more);
    card.addEventListener('click', () => open(key));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(key); } });
  });
  document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); open(b.dataset.open); }));


  /* ---------------- calendário dos jogos (abaixo da grade) ---------------- */
  const LABEL_KEYS = {
    'Futebol 7': ['Futebol 7 Geral', 'Futebol 7 Veteranos'],
    'Basquete 3x3': ['Basquete 3x3 Geral', 'Basquete 3x3 Veteranos'],
    'Sinuca, Truco e Xadrez': ['Sinuca', 'Truco', 'Xadrez'],
    'Corrida de Rua e Caminhada': ['Corrida de Rua', 'Caminhada'],
    'Cerimônia de Abertura · 19h': ['Cerimônia de Abertura'],
    'Noite Cultural · 19h': ['Noite Cultural'],
    'Tênis de Mesa · Masculino': ['Tênis de Mesa'],
    'Tênis de Mesa · Feminino': ['Tênis de Mesa'],
    'Pesagem dos alimentos': ['Arrecadação de Alimentos'],
    'Último dia da Doação de Sangue': ['Doação de Sangue'],
  };
  const keysOf = lbl => LABEL_KEYS[lbl] || (lbl in M ? [lbl] : []);
  const FILTRO = [   // [rótulo, chaves]
    ['Futebol 7', ['Futebol 7 Geral', 'Futebol 7 Veteranos']], ['Futsal Feminino', ['Futsal Feminino']], ['Voleibol de Quadra', ['Voleibol de Quadra']],
    ['Vôlei de Areia 4x4', ['Vôlei de Areia 4x4']], ['Basquete 3x3', ['Basquete 3x3 Geral', 'Basquete 3x3 Veteranos']], ['Cabo de Guerra', ['Cabo de Guerra']],
    ['Caçador/Queimada', ['Caçador/Queimada']], ['Beach Tennis', ['Beach Tennis']], ['Tênis de Mesa', ['Tênis de Mesa']], ['Bocha', ['Bocha']], ['Bolão', ['Bolão']],
    ['Sinuca', ['Sinuca']], ['Truco', ['Truco']], ['Xadrez', ['Xadrez']], ['Caminhada', ['Caminhada']], ['Corrida de Rua', ['Corrida de Rua']],
    ['Rapel', ['Rapel']], ['Trilha Noturna', ['Trilha Noturna']], ['Noite Cultural', ['Noite Cultural']], ['Cerimônia de Abertura', ['Cerimônia de Abertura']],
    ['Doação de Sangue', ['Doação de Sangue']], ['Arrecadação de Alimentos', ['Arrecadação de Alimentos']],
  ];
  const WEEKS = [['Semana 1', '26 a 30 de outubro', d => d.endsWith('/10')], ['Semana 2', '2 a 6 de novembro', d => d.endsWith('/11') && +d.slice(0, 2) <= 8],
                 ['Semana 3', '9 a 14 de novembro', d => d.endsWith('/11') && +d.slice(0, 2) >= 9]];
  const WD = { seg: 'Segunda', ter: 'Terça', qua: 'Quarta', qui: 'Quinta', sex: 'Sexta', 'sáb': 'Sábado', dom: 'Domingo' };
  const calBox = document.getElementById('calWeeks');
  if (calBox) {
    const hoje = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date()); // AAAA-MM-DD
    const iso = d => '2026-' + d.slice(3, 5) + '-' + d.slice(0, 2);
    const item = ([lbl, onde]) => {
      const ks = keysOf(lbl);
      const cor = ks.length ? BLOCO[M[ks[0]].b][1] : '#9aa3b5';
      const nome = ks.length ? `<button type="button" class="cal__go" data-cal-open="${ks[0]}">${lbl}</button>` : `<span class="cal__nm">${lbl}</span>`;
      return `<li data-k="${ks.join('|')}" style="--c:${cor}"><i aria-hidden="true"></i><div>${nome}${onde ? `<span class="cal__onde">${onde}</span>` : ''}</div></li>`;
    };
    calBox.innerHTML = WEEKS.map(([t, sub, f]) => {
      const dias = AGENDA.filter(([d]) => f(d)).map(([d, w, its]) => {
        const off = its.length === 1 && /^(Recesso|Feriado)$/.test(its[0][0]);
        const st = iso(d) === hoje ? ' is-today' : (iso(d) < hoje ? ' is-past' : '');
        const body = off ? `<p class="cal__off">${its[0][0]} · sem jogos</p>` : `<ul>${its.map(item).join('')}</ul>`;
        return `<article class="cal__day${off ? ' is-off' : ''}${st}"><header><b>${d.slice(0, 2)}<small>/${d.slice(3)}</small></b><span>${WD[w] || w}</span>${st === ' is-today' ? '<em>Hoje</em>' : ''}</header>${body}</article>`;
      }).join('');
      return `<section class="cal__wk" aria-label="${t}, ${sub}"><h4><span>${t}</span>${sub}</h4><div class="cal__row">${dias}</div></section>`;
    }).join('');
    const td = calBox.querySelector('.cal__day.is-today');   // no celular, a semana já abre no dia de hoje
    if (td) { const row = td.parentElement; row.scrollLeft += td.getBoundingClientRect().left - row.getBoundingClientRect().left - parseFloat(getComputedStyle(row).paddingLeft); }
    calBox.addEventListener('click', e => { const b = e.target.closest('[data-cal-open]'); if (b) open(b.dataset.calOpen); });
    const sel = document.getElementById('calFiltro');
    if (sel) {
      sel.insertAdjacentHTML('beforeend', FILTRO.map(([r], i) => `<option value="${i}">${r}</option>`).join(''));
      sel.addEventListener('change', () => {
        const ks = sel.value === '' ? null : FILTRO[+sel.value][1];
        calBox.classList.toggle('is-filtered', !!ks);
        calBox.querySelectorAll('.cal__day').forEach(day => {
          let hit = false;
          day.querySelectorAll('li').forEach(li => { const on = !!ks && li.dataset.k.split('|').some(k => ks.includes(k)); li.classList.toggle('is-hit', on); hit = hit || on; });
          day.classList.toggle('is-hit', hit);
        });
      });
    }
  }

  const fromHash = () => { const k = SLUGS[location.hash.slice(1)]; if (k) open(k, false); };
  window.addEventListener('hashchange', fromHash);
  fromHash();

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#faq-"]'); if (!a) return;
    const t = document.querySelector(a.getAttribute('href')); if (t && t.tagName === 'DETAILS') t.open = true;
  }, true);
  const faqHash = () => { const el = document.getElementById(location.hash.slice(1)); if (el && el.tagName === 'DETAILS') el.open = true; };
  window.addEventListener('hashchange', faqHash);
  faqHash();
})();

const ELEMENTS = {
  C: { name: 'Carbono', color: '#293241' },
  H: { name: 'Hidrogênio', color: '#edf6ff' },
  O: { name: 'Oxigênio', color: '#e63946' },
  N: { name: 'Nitrogênio', color: '#277da1' },
  Cl: { name: 'Cloro', color: '#2a9d8f' },
  Br: { name: 'Bromo', color: '#8d5524' }
};

const MOLECULES = [
  {
    id: 'metano', name: 'Metano', formula: 'CH₄', world: 'Vale dos Átomos',
    subtitle: 'Primeiro desafio: reconhecer um hidrocarboneto simples.',
    needs: { C: 1, H: 4 },
    prompt: 'Precisamos construir o hidrocarboneto mais simples. Ele tem 1 carbono e seus ligantes são hidrogênios.',
    hypothesis: { question: 'Qual fórmula representa essa molécula?', options: ['CH₄', 'C₂H₆', 'C₂H₄', 'CH₃Br'], answer: 'CH₄', hint: 'O prefixo “met-” indica 1 carbono.' },
    count: { question: 'Confirme a contagem correta para metano.', options: ['C = 1 | H = 4', 'C = 2 | H = 6', 'C = 2 | H = 4', 'C = 1 | H = 3 | Br = 1'], answer: 'C = 1 | H = 4', hint: 'No metano, há apenas 1 carbono e 4 hidrogênios.' },
    justification: { question: 'Por que o metano está correto?', options: ['Porque o carbono fez quatro ligações simples.', 'Porque o oxigênio fez quatro ligações.', 'Porque o hidrogênio fez duas ligações.', 'Porque há uma ligação dupla C=C.'], answer: 'Porque o carbono fez quatro ligações simples.', hint: 'A regra central aqui é a tetravalência do carbono.' },
    diagram: `    H\n    |\nH — C — H\n    |\n    H`,
    success: 'Excelente! O metano respeita a tetravalência do carbono. Agora vamos aumentar a cadeia carbônica.'
  },
  {
    id: 'etano', name: 'Etano', formula: 'C₂H₆', world: 'Oficina dos Hidrocarbonetos',
    subtitle: 'Agora dois carbonos se conectam por ligação simples.',
    needs: { C: 2, H: 6 },
    prompt: 'Ben encontrou dois carbonos que precisam formar uma ligação simples. Complete a molécula com hidrogênios.',
    hypothesis: { question: 'Qual fórmula representa o etano?', options: ['CH₄', 'C₂H₆', 'C₂H₄', 'C₂H₆O'], answer: 'C₂H₆', hint: 'O prefixo “et-” indica 2 carbonos; alcano com 2 carbonos tem 6 H.' },
    count: { question: 'Confirme a contagem correta para etano.', options: ['C = 2 | H = 6', 'C = 2 | H = 4', 'C = 1 | H = 4', 'C = 2 | H = 5 | Br = 1'], answer: 'C = 2 | H = 6', hint: 'Etano é um alcano: só C e H, com ligação simples C–C.' },
    justification: { question: 'Qual justificativa química está correta?', options: ['Dois carbonos estão ligados por ligação simples e completam valência com H.', 'O etano tem uma ligação dupla C=C.', 'O etano é um álcool porque tem OH.', 'O etano é um haleto porque tem Br.'], answer: 'Dois carbonos estão ligados por ligação simples e completam valência com H.', hint: 'Pense em alcano: ligação simples e fórmula geral CnH2n+2.' },
    diagram: `H   H\n|   |\nH—C—C—H\n|   |\nH   H`,
    success: 'Muito bem! Você construiu uma cadeia com ligação simples C–C. Agora compare com uma ligação dupla.'
  },
  {
    id: 'eteno', name: 'Eteno', formula: 'C₂H₄', world: 'Floresta dos Alcenos',
    subtitle: 'A ligação dupla será a porta de entrada para reações de adição.',
    needs: { C: 2, H: 4 },
    prompt: 'Agora precisamos de um hidrocarboneto com dois carbonos e uma ligação dupla. Ele será usado nas reações de adição.',
    hypothesis: { question: 'Qual fórmula representa o eteno?', options: ['C₂H₆', 'C₂H₄', 'CH₄', 'C₂H₅Br'], answer: 'C₂H₄', hint: 'Alcenos têm menos hidrogênios que alcanos correspondentes.' },
    count: { question: 'Confirme a contagem correta para eteno.', options: ['C = 2 | H = 4', 'C = 2 | H = 6', 'C = 1 | H = 4', 'C = 2 | H = 6 | O = 1'], answer: 'C = 2 | H = 4', hint: 'Eteno tem 2 carbonos e 4 hidrogênios.' },
    justification: { question: 'O que diferencia eteno de etano?', options: ['O eteno tem ligação dupla C=C.', 'O eteno tem oxigênio.', 'O eteno tem bromo.', 'O eteno tem apenas um carbono.'], answer: 'O eteno tem ligação dupla C=C.', hint: 'A terminação “-eno” indica alceno, geralmente com C=C.' },
    diagram: `H   H\n \ /\n  C=C\n / \\nH   H`,
    success: 'Perfeito! O eteno tem ligação dupla C=C. Isso desbloqueia a lógica da adição.'
  },
  {
    id: 'etanol', name: 'Etanol', formula: 'C₂H₆O', world: 'Laboratório dos Grupos Funcionais',
    subtitle: 'Entramos no grupo funcional álcool.',
    needs: { C: 2, H: 6, O: 1 },
    prompt: 'Agora o mundo molecular precisa de um álcool simples: dois carbonos, oxigênio e um grupo OH.',
    hypothesis: { question: 'Qual fórmula representa o etanol?', options: ['C₂H₆O', 'C₂H₄', 'C₂H₅Br', 'CH₄'], answer: 'C₂H₆O', hint: 'Etanol contém C, H e O. O grupo funcional é OH.' },
    count: { question: 'Confirme a contagem correta para etanol.', options: ['C = 2 | H = 6 | O = 1', 'C = 2 | H = 4', 'C = 2 | H = 5 | Br = 1', 'C = 1 | H = 4 | O = 1'], answer: 'C = 2 | H = 6 | O = 1', hint: 'O etanol tem dois carbonos e um oxigênio.' },
    justification: { question: 'Por que o etanol é classificado como álcool?', options: ['Porque possui grupo OH ligado à cadeia carbônica.', 'Porque possui bromo como grupo abandonador.', 'Porque possui ligação dupla C=C.', 'Porque não tem carbono.'], answer: 'Porque possui grupo OH ligado à cadeia carbônica.', hint: 'Álcoois têm grupo hidroxila, OH.' },
    diagram: `H   H\n|   |\nH—C—C—O—H\n|   |\nH   H`,
    success: 'Ótimo! O grupo OH muda propriedades e reatividade. Agora vamos para os haletos.'
  },
  {
    id: 'bromoetano', name: 'Bromoetano', formula: 'C₂H₅Br', world: 'Vila dos Haletos',
    subtitle: 'Haletos orgânicos permitem comparar substituição e eliminação.',
    needs: { C: 2, H: 5, Br: 1 },
    prompt: 'Construa um haleto orgânico simples. O bromo será importante como grupo que pode sair em reações.',
    hypothesis: { question: 'Qual fórmula representa o bromoetano?', options: ['C₂H₅Br', 'C₂H₆O', 'C₂H₄', 'CH₄'], answer: 'C₂H₅Br', hint: 'Bromoetano tem 2 carbonos e um Br no lugar de um H.' },
    count: { question: 'Confirme a contagem correta para bromoetano.', options: ['C = 2 | H = 5 | Br = 1', 'C = 2 | H = 6', 'C = 2 | H = 6 | O = 1', 'C = 1 | H = 4'], answer: 'C = 2 | H = 5 | Br = 1', hint: 'Compare com etano: C₂H₆. Ao trocar um H por Br, fica C₂H₅Br.' },
    justification: { question: 'Qual justificativa está correta para bromoetano?', options: ['É um haleto orgânico porque possui ligação C–Br.', 'É um álcool porque possui OH.', 'É um alceno porque possui C=C.', 'É metano com oxigênio.'], answer: 'É um haleto orgânico porque possui ligação C–Br.', hint: 'O bromo ligado ao carbono caracteriza um haleto orgânico.' },
    diagram: `H   H\n|   |\nH—C—C—Br\n|   |\nH   H`,
    success: 'Excelente! Agora você tem um haleto orgânico para testar substituição e eliminação.'
  }
];

const REACTIONS = [
  {
    id: 'add_hbr', prereq: 'eteno', title: 'Adição de HBr ao eteno', equation: 'Eteno + HBr → ?',
    options: ['Bromoetano', 'Etano', 'Etanol', 'Metano'], answer: 'Bromoetano',
    feedback: 'A ligação dupla do eteno recebe H e Br; o produto é bromoetano.',
    why: { question: 'Por que essa reação é de adição?', options: ['Porque grupos entram na ligação dupla C=C.', 'Porque Br é trocado por OH.', 'Porque dois grupos saem formando C=C.', 'Porque não há mudança estrutural.'], answer: 'Porque grupos entram na ligação dupla C=C.' }
  },
  {
    id: 'hydration', prereq: 'eteno', title: 'Hidratação do eteno', equation: 'Eteno + H₂O/H⁺ → ?',
    options: ['Etanol', 'Bromoetano', 'Etano', 'Cloroetano'], answer: 'Etanol',
    feedback: 'Na hidratação, H e OH são adicionados à dupla ligação, formando um álcool.',
    why: { question: 'Qual grupo funcional aparece no produto?', options: ['Álcool, por causa do grupo OH.', 'Haleto, por causa do Br.', 'Alceno, por causa de C=C.', 'Amina, por causa do N.'], answer: 'Álcool, por causa do grupo OH.' }
  },
  {
    id: 'sn_oh', prereq: 'bromoetano', title: 'Substituição nucleofílica', equation: 'Bromoetano + OH⁻ → ?',
    options: ['Etanol', 'Eteno', 'Etano', 'Metano'], answer: 'Etanol',
    feedback: 'O OH⁻ substitui o Br, produzindo etanol.',
    why: { question: 'Quem atua como nucleófilo?', options: ['OH⁻', 'Br⁻', 'C₂H₆', 'H₂'], answer: 'OH⁻' }
  },
  {
    id: 'elim_base', prereq: 'bromoetano', title: 'Eliminação com base forte', equation: 'Bromoetano + base forte → ?',
    options: ['Eteno', 'Etanol', 'Metano', 'Água'], answer: 'Eteno',
    feedback: 'A base remove H, o Br sai, e uma ligação dupla C=C é formada.',
    why: { question: 'Por que é eliminação?', options: ['Porque H e Br são removidos e forma-se C=C.', 'Porque OH entra no lugar do Br.', 'Porque HBr entra na dupla ligação.', 'Porque carbono perde todas as ligações.'], answer: 'Porque H e Br são removidos e forma-se C=C.' }
  },
  {
    id: 'class_add', prereq: 'eteno', title: 'Classificação rápida', equation: 'Alceno + HBr é uma reação de...',
    options: ['Adição', 'Substituição', 'Eliminação', 'Esterificação'], answer: 'Adição',
    feedback: 'Em alcenos, HBr adiciona-se à ligação dupla.',
    why: { question: 'Qual pista identifica a adição?', options: ['O substrato tem ligação C=C.', 'O substrato tem Br saindo.', 'O produto perde dois grupos.', 'O produto não muda.'], answer: 'O substrato tem ligação C=C.' }
  },
  {
    id: 'class_sub_elim', prereq: 'bromoetano', title: 'Decisão: substituição ou eliminação?', equation: 'Haleto orgânico + base forte pode favorecer...',
    options: ['Eliminação', 'Hidratação', 'Combustão', 'Polimerização radicalar'], answer: 'Eliminação',
    feedback: 'Com base forte, haletos orgânicos podem perder HBr e formar alcenos.',
    why: { question: 'Qual produto indica eliminação?', options: ['Um alceno com C=C.', 'Um álcool com OH.', 'Um alcano sem reação.', 'Uma amida.'], answer: 'Um alceno com C=C.' }
  }
];

const state = {
  player: 'Aluno', turma: 'Turma livre', score: 0,
  targetIndex: 0,
  gridSize: 8,
  playerPos: { x: 0, y: 0 },
  mapAtoms: [],
  inventory: {},
  hypothesisDone: false,
  countDone: false,
  justificationDone: false,
  built: [],
  completedReactions: [],
  optionOrders: {},
  selectedReactionId: null,
  reactionAnswered: false,
  reactionJustified: false,
  lastFeedback: '',
  stats: {
    collectionCorrect: 0, collectionWrong: 0, formulaAttempts: 0, formulaErrors: 0,
    countAttempts: 0, countErrors: 0, justificationAttempts: 0, justificationErrors: 0,
    reactionAttempts: 0, reactionErrors: 0, reactionJustificationAttempts: 0, reactionJustificationErrors: 0,
    hintsUsed: 0, moleculesBuilt: 0, startedAt: null, finishedAt: null
  }
};

const $ = (id) => document.getElementById(id);
const allSymbols = Object.keys(ELEMENTS);

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function orderedOptions(key, options) {
  if (!state.optionOrders[key]) state.optionOrders[key] = shuffleArray(options);
  return state.optionOrders[key];
}

const XYZ_MODELS = {
  metano: `5
Metano CH4
C 0.000 0.000 0.000
H 0.629 0.629 0.629
H -0.629 -0.629 0.629
H -0.629 0.629 -0.629
H 0.629 -0.629 -0.629`,
  etano: `8
Etano C2H6
C -0.770 0.000 0.000
C 0.770 0.000 0.000
H -1.170 1.020 0.000
H -1.170 -0.510 0.884
H -1.170 -0.510 -0.884
H 1.170 -1.020 0.000
H 1.170 0.510 0.884
H 1.170 0.510 -0.884`,
  eteno: `6
Eteno C2H4
C -0.670 0.000 0.000
C 0.670 0.000 0.000
H -1.230 0.930 0.000
H -1.230 -0.930 0.000
H 1.230 0.930 0.000
H 1.230 -0.930 0.000`,
  etanol: `9
Etanol C2H6O
C -1.200 0.000 0.000
C 0.200 0.000 0.000
O 1.520 0.000 0.000
H 2.000 0.780 0.000
H -1.560 1.020 0.000
H -1.560 -0.510 0.884
H -1.560 -0.510 -0.884
H 0.540 0.510 0.884
H 0.540 0.510 -0.884`,
  bromoetano: `8
Bromoetano C2H5Br
C -0.900 0.000 0.000
C 0.540 0.000 0.000
Br 2.420 0.000 0.000
H -1.280 1.020 0.000
H -1.280 -0.510 0.884
H -1.280 -0.510 -0.884
H 0.850 0.930 0.000
H 0.850 -0.930 0.000`
};

function moleculeSVG(id) {
  const atom = (x, y, label, cls='') => `<g class="svg-atom ${cls}"><circle cx="${x}" cy="${y}" r="22"></circle><text x="${x}" y="${y+7}">${label}</text></g>`;
  const bond = (x1, y1, x2, y2, cls='') => `<line class="svg-bond ${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
  const doubleBond = (x1, y1, x2, y2) => `${bond(x1, y1-6, x2, y2-6, 'double')}${bond(x1, y1+6, x2, y2+6, 'double')}`;
  let body = '';
  if (id === 'metano') body = bond(210,130,210,62)+bond(210,130,210,198)+bond(210,130,115,130)+bond(210,130,305,130)+atom(210,130,'C','c')+atom(210,48,'H','h')+atom(210,212,'H','h')+atom(92,130,'H','h')+atom(328,130,'H','h');
  else if (id === 'etano') body = bond(168,130,252,130)+bond(168,130,106,65)+bond(168,130,106,195)+bond(168,130,168,60)+bond(252,130,314,65)+bond(252,130,314,195)+bond(252,130,252,200)+atom(168,130,'C','c')+atom(252,130,'C','c')+atom(106,65,'H','h')+atom(106,195,'H','h')+atom(168,46,'H','h')+atom(314,65,'H','h')+atom(314,195,'H','h')+atom(252,214,'H','h');
  else if (id === 'eteno') body = doubleBond(170,130,250,130)+bond(170,130,105,70)+bond(170,130,105,190)+bond(250,130,315,70)+bond(250,130,315,190)+atom(170,130,'C','c')+atom(250,130,'C','c')+atom(95,60,'H','h')+atom(95,200,'H','h')+atom(325,60,'H','h')+atom(325,200,'H','h');
  else if (id === 'etanol') body = bond(145,130,220,130)+bond(220,130,290,130)+bond(290,130,350,95)+bond(145,130,95,70)+bond(145,130,95,190)+bond(145,130,145,55)+bond(220,130,220,205)+bond(220,130,270,190)+atom(145,130,'C','c')+atom(220,130,'C','c')+atom(290,130,'O','o')+atom(358,88,'H','h')+atom(85,62,'H','h')+atom(85,198,'H','h')+atom(145,42,'H','h')+atom(220,218,'H','h')+atom(280,198,'H','h');
  else if (id === 'bromoetano') body = bond(145,130,225,130)+bond(225,130,315,130)+bond(145,130,90,70)+bond(145,130,90,190)+bond(145,130,145,55)+bond(225,130,225,205)+bond(225,130,275,190)+atom(145,130,'C','c')+atom(225,130,'C','c')+atom(330,130,'Br','br')+atom(80,62,'H','h')+atom(80,198,'H','h')+atom(145,42,'H','h')+atom(225,218,'H','h')+atom(285,198,'H','h');
  else body = '<text x="210" y="130" text-anchor="middle">Estrutura indisponível</text>';
  return `<svg class="molecule-svg" viewBox="0 0 420 260" role="img" aria-label="Representação 2D da molécula">${body}</svg>`;
}

function render3DViewer(mol) {
  const viewerEl = $('mol3dViewer');
  if (!viewerEl || !mol) return;
  const xyz = XYZ_MODELS[mol.id];
  if (!xyz) { viewerEl.innerHTML = '<div class="viewer-fallback">Modelo 3D indisponível.</div>'; return; }
  if (!window.$3Dmol) { viewerEl.innerHTML = '<div class="viewer-fallback">Viewer 3D não carregou. A estrutura 2D continua disponível. Em GitHub Pages com internet, o 3D abre automaticamente.</div>'; return; }
  viewerEl.innerHTML = '';
  const viewer = $3Dmol.createViewer(viewerEl, { backgroundColor: 'rgba(0,0,0,0)' });
  viewer.addModel(xyz, 'xyz');
  viewer.setStyle({}, { stick: { radius: 0.16 }, sphere: { scale: 0.32 } });
  viewer.zoomTo();
  viewer.rotate(18, 'y');
  viewer.rotate(8, 'x');
  viewer.render();
}

function currentMolecule() { return MOLECULES[state.targetIndex] || null; }
function clampScore() { state.score = Math.max(0, state.score); }
function hasBuilt(id) { return state.built.includes(id); }
function isComplete() { return state.built.length === MOLECULES.length && state.completedReactions.length === REACTIONS.length; }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showTab(id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.action-row .secondary-btn').forEach(b => b.classList.remove('active'));
  $(id).classList.add('active');
  const btnMap = { mapTab: 'mapTabBtn', builderTab: 'builderTabBtn', reactionTab: 'reactionTabBtn', resultTab: 'resultsTabBtn' };
  if (btnMap[id]) $(btnMap[id]).classList.add('active');
  renderAll();
}

function toast(message, type = 'good') {
  const el = $('toast');
  el.textContent = message;
  el.className = `toast show ${type}`;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { el.className = 'toast'; }, 3200);
}

function resetForTarget() {
  state.inventory = Object.fromEntries(allSymbols.map(s => [s, 0]));
  state.hypothesisDone = false;
  state.countDone = false;
  state.justificationDone = false;
  state.playerPos = { x: 0, y: 0 };
  state.lastFeedback = '';
  generateMap();
}

function resetGame(keepIdentity = true) {
  const player = keepIdentity ? state.player : 'Aluno';
  const turma = keepIdentity ? state.turma : 'Turma livre';
  Object.assign(state, {
    player, turma, score: 0, targetIndex: 0, playerPos: { x: 0, y: 0 }, mapAtoms: [], inventory: {},
    hypothesisDone: false, countDone: false, justificationDone: false, built: [], completedReactions: [], optionOrders: {},
    selectedReactionId: null, reactionAnswered: false, reactionJustified: false, lastFeedback: '',
    stats: {
      collectionCorrect: 0, collectionWrong: 0, formulaAttempts: 0, formulaErrors: 0,
      countAttempts: 0, countErrors: 0, justificationAttempts: 0, justificationErrors: 0,
      reactionAttempts: 0, reactionErrors: 0, reactionJustificationAttempts: 0, reactionJustificationErrors: 0,
      hintsUsed: 0, moleculesBuilt: 0, startedAt: new Date(), finishedAt: null
    }
  });
  resetForTarget();
  renderAll();
}

function startGame() {
  state.player = $('studentName').value.trim() || 'Aluno';
  state.turma = $('studentClass').value.trim() || 'Turma livre';
  resetGame(true);
  showScreen('gameScreen');
  showTab('mapTab');
  toast(`Bem-vindo(a), ${state.player}! Primeiro formule uma hipótese química.`, 'good');
}

function targetNeeds() {
  const mol = currentMolecule();
  return mol ? mol.needs : {};
}

function hasAllNeeded() {
  const needs = targetNeeds();
  return Object.entries(needs).every(([s, q]) => state.inventory[s] >= q);
}

function missingText() {
  const needs = targetNeeds();
  const missing = Object.entries(needs)
    .filter(([s, q]) => state.inventory[s] < q)
    .map(([s, q]) => `${s}: ${state.inventory[s]}/${q}`);
  return missing.length ? missing.join(' • ') : 'todos os átomos necessários foram coletados';
}

function isNeededAtom(symbol) {
  const mol = currentMolecule();
  if (!mol) return false;
  return Object.prototype.hasOwnProperty.call(mol.needs, symbol) && state.inventory[symbol] < mol.needs[symbol];
}

function randomFreeCell(occupied) {
  let x, y, key, guard = 0;
  do {
    x = Math.floor(Math.random() * state.gridSize);
    y = Math.floor(Math.random() * state.gridSize);
    key = `${x},${y}`;
    guard++;
  } while (occupied.has(key) && guard < 500);
  occupied.add(key);
  return { x, y };
}

function generateMap() {
  const mol = currentMolecule();
  const occupied = new Set(['0,0']);
  const atoms = [];
  if (!mol) {
    state.mapAtoms = [];
    return;
  }
  for (const [symbol, qty] of Object.entries(mol.needs)) {
    const deficit = Math.max(0, qty - (state.inventory[symbol] || 0));
    for (let i = 0; i < Math.max(1, deficit); i++) atoms.push(symbol);
  }
  const distractors = allSymbols.filter(s => !Object.prototype.hasOwnProperty.call(mol.needs, s));
  const neededSymbols = Object.keys(mol.needs);
  while (atoms.length < 17) {
    const pool = atoms.length < 10 ? neededSymbols : [...distractors, ...neededSymbols];
    atoms.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  state.mapAtoms = atoms.slice(0, 22).map(symbol => ({ symbol, ...randomFreeCell(occupied) }));
}

function ensureNeededAtomsVisible() {
  const mol = currentMolecule();
  if (!mol || !state.hypothesisDone || hasAllNeeded()) return;
  const occupied = new Set([`${state.playerPos.x},${state.playerPos.y}`]);
  state.mapAtoms.forEach(a => occupied.add(`${a.x},${a.y}`));
  for (const [symbol, qty] of Object.entries(mol.needs)) {
    const missing = Math.max(0, qty - state.inventory[symbol]);
    const visible = state.mapAtoms.filter(a => a.symbol === symbol).length;
    for (let i = visible; i < Math.max(1, missing); i++) {
      state.mapAtoms.push({ symbol, ...randomFreeCell(occupied) });
    }
  }
}

function renderGrid() {
  ensureNeededAtomsVisible();
  const grid = $('gameGrid');
  grid.innerHTML = '';
  for (let y = 0; y < state.gridSize; y++) {
    for (let x = 0; x < state.gridSize; x++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      const atom = state.mapAtoms.find(a => a.x === x && a.y === y);
      if (state.playerPos.x === x && state.playerPos.y === y) {
        tile.classList.add('player');
        tile.innerHTML = '<span>Ben</span>';
      } else if (atom) {
        tile.classList.add('atom');
        if (isNeededAtom(atom.symbol)) tile.classList.add('need');
        else tile.classList.add('distractor');
        tile.style.setProperty('--atom-color', ELEMENTS[atom.symbol].color);
        tile.innerHTML = `<span>${atom.symbol}</span>`;
        tile.title = ELEMENTS[atom.symbol].name;
      }
      grid.appendChild(tile);
    }
  }
}

function renderTargetPanel() {
  const mol = currentMolecule();
  if (!mol) {
    $('targetPanel').innerHTML = '<p class="small-text">Todas as moléculas foram construídas.</p>';
    return;
  }
  $('targetPanel').innerHTML = Object.entries(mol.needs).map(([s, q]) => {
    const value = Math.min(q, state.inventory[s] || 0);
    const pct = Math.round((value / q) * 100);
    return `<div class="target-row"><b>${s}</b><div class="target-meter"><div style="width:${pct}%"></div></div><span>${value}/${q}</span></div>`;
  }).join('');
}

function renderHypothesis() {
  const mol = currentMolecule();
  const box = $('hypothesisBox');
  if (!mol) {
    box.innerHTML = '<h3>Moléculas concluídas</h3><p class="small-text">Agora finalize ou revise a Arena de Reações.</p>';
    return;
  }
  if (state.hypothesisDone) {
    const status = hasAllNeeded()
      ? 'Átomos-alvo completos. Vá para a Bancada Molecular.'
      : `Agora colete seletivamente: ${missingText()}.`;
    box.innerHTML = `<h3>Hipótese correta: ${mol.formula}</h3><p class="small-text">${status}</p>`;
    return;
  }
  const opts = orderedOptions(`hypothesis:${mol.id}`, mol.hypothesis.options).map(opt => `<button class="option-btn" data-hypothesis="${opt}">${opt}</button>`).join('');
  box.innerHTML = `
    <h3>Hipótese molecular obrigatória</h3>
    <p class="small-text">${mol.prompt}</p>
    <p class="small-text"><strong>${mol.hypothesis.question}</strong></p>
    <div class="option-grid">${opts}</div>
  `;
  document.querySelectorAll('[data-hypothesis]').forEach(btn => btn.addEventListener('click', () => answerHypothesis(btn.dataset.hypothesis, btn)));
}

function answerHypothesis(choice, btn) {
  const mol = currentMolecule();
  state.stats.formulaAttempts += 1;
  if (choice === mol.hypothesis.answer) {
    state.hypothesisDone = true;
    state.score += 25;
    btn.classList.add('correct');
    setBen(`Boa hipótese! ${mol.formula} é a fórmula-alvo. Agora colete apenas os átomos que fazem sentido para essa molécula.`);
    toast('Hipótese correta. A coleta seletiva foi liberada. +25 pontos', 'good');
    generateMap();
  } else {
    state.stats.formulaErrors += 1;
    state.score -= 8; clampScore();
    btn.classList.add('wrong');
    setBen(`Ainda não. ${mol.hypothesis.hint}`);
    toast(`Hipótese incorreta. ${mol.hypothesis.hint}`, 'bad');
  }
  renderAll();
}

function setBen(text) {
  $('benText').textContent = text;
}

function movePlayer(dir) {
  if (!$('gameScreen').classList.contains('active')) return;
  const delta = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[dir];
  if (!delta) return;
  state.playerPos.x = Math.max(0, Math.min(state.gridSize - 1, state.playerPos.x + delta[0]));
  state.playerPos.y = Math.max(0, Math.min(state.gridSize - 1, state.playerPos.y + delta[1]));
  collectAtPosition();
  renderAll();
}

function collectAtPosition() {
  const idx = state.mapAtoms.findIndex(a => a.x === state.playerPos.x && a.y === state.playerPos.y);
  if (idx < 0) return;
  const atom = state.mapAtoms[idx];
  const mol = currentMolecule();
  if (!mol) return;
  if (!state.hypothesisDone) {
    setBen('Antes de coletar, formule a hipótese molecular. No laboratório, coleta sem objetivo vira tentativa aleatória.');
    toast('Responda à hipótese antes de coletar.', 'warn');
    return;
  }
  state.mapAtoms.splice(idx, 1);
  if (Object.prototype.hasOwnProperty.call(mol.needs, atom.symbol) && state.inventory[atom.symbol] < mol.needs[atom.symbol]) {
    state.inventory[atom.symbol] += 1;
    state.score += 10;
    state.stats.collectionCorrect += 1;
    setBen(`Boa coleta: ${atom.symbol} entra em ${mol.formula}. Progresso: ${missingText()}.`);
    toast(`Coleta correta: ${atom.symbol}. +10 pontos`, 'good');
    if (hasAllNeeded()) {
      state.score += 20;
      setBen(`Todos os átomos de ${mol.formula} foram coletados. Agora vá para a bancada e justifique a molécula.`);
      toast('Átomos-alvo completos. Bancada liberada. +20 pontos', 'good');
    }
  } else if (Object.prototype.hasOwnProperty.call(mol.needs, atom.symbol)) {
    state.score -= 4; clampScore();
    state.stats.collectionWrong += 1;
    setBen(`${atom.symbol} até faz parte de ${mol.formula}, mas você já coletou o suficiente. Excesso também é erro de fórmula.`);
    toast(`Excesso de ${atom.symbol}. Penalização leve: -4`, 'warn');
  } else {
    state.score -= 7; clampScore();
    state.stats.collectionWrong += 1;
    setBen(`${atom.symbol} não entra na fórmula ${mol.formula}. Pense no tipo de molécula antes de coletar.`);
    toast(`${atom.symbol} é distrator nesta missão. -7 pontos`, 'bad');
  }
  if (state.mapAtoms.length < 12) generateMap();
}

function renderBuilder() {
  const mol = currentMolecule();
  const content = $('builderContent');
  const gallery = `<div class="molecule-gallery">${MOLECULES.map(m => `<div class="mol-badge ${hasBuilt(m.id) ? 'done' : ''}"><strong>${m.formula}</strong><span>${m.name}${hasBuilt(m.id) ? ' ✓' : ''}</span></div>`).join('')}</div>`;
  if (!mol) {
    content.innerHTML = `${gallery}<div class="builder-step"><h3>Todas as moléculas foram construídas.</h3><p class="small-text">Agora conclua a Arena de Reações ou veja o relatório final.</p></div>`;
    return;
  }
  if (!state.hypothesisDone) {
    content.innerHTML = `${gallery}<div class="lock-card">Volte ao mapa e responda a hipótese molecular antes de construir ${mol.name}.</div>`;
    return;
  }
  if (!hasAllNeeded()) {
    content.innerHTML = `${gallery}<div class="lock-card">Ainda faltam átomos para ${mol.formula}: ${missingText()}.</div>`;
    return;
  }
  if (!state.countDone) {
    const opts = orderedOptions(`count:${mol.id}`, mol.count.options).map(opt => `<button class="option-btn" data-count="${opt}">${opt}</button>`).join('');
    content.innerHTML = `${gallery}<div class="builder-step"><h3>Etapa 1 — Contagem molecular</h3><p class="small-text">${mol.count.question}</p><div class="option-grid">${opts}</div></div>`;
    document.querySelectorAll('[data-count]').forEach(btn => btn.addEventListener('click', () => answerCount(btn.dataset.count, btn)));
    return;
  }
  if (!state.justificationDone) {
    const opts = orderedOptions(`justify:${mol.id}`, mol.justification.options).map(opt => `<button class="option-btn" data-justify="${opt}">${opt}</button>`).join('');
    content.innerHTML = `${gallery}<div class="builder-step"><h3>Etapa 2 — Justificativa química</h3><p class="small-text">${mol.justification.question}</p><div class="option-grid">${opts}</div></div>`;
    document.querySelectorAll('[data-justify]').forEach(btn => btn.addEventListener('click', () => answerJustification(btn.dataset.justify, btn)));
    return;
  }
  content.innerHTML = `${gallery}
    <div class="builder-step">
      <h3>Etapa 3 — Construção visual: ${mol.name} (${mol.formula})</h3>
      <p class="small-text">Confira a conectividade em 2D e, quando houver internet, explore a estrutura 3D interativa. O modelo 3D ajuda a visualizar geometria; a estrutura 2D reforça valência e conectividade.</p>
      <div class="molecule-viewer-grid">
        <div class="molecule-visual">
          <h4>Estrutura 2D corrigida</h4>
          ${moleculeSVG(mol.id)}
        </div>
        <div class="molecule-visual">
          <h4>Estrutura 3D interativa</h4>
          <div id="mol3dViewer" class="mol3d-viewer"></div>
          <p class="small-text">Arraste para girar; use scroll/pinça para aproximar. Se o CDN não carregar, use a estrutura 2D.</p>
        </div>
      </div>
      <div class="action-buttons"><button class="primary-btn" id="buildMolBtn">Construir ${mol.name} e avançar</button></div>
    </div>`;
  $('buildMolBtn').addEventListener('click', buildCurrentMolecule);
  setTimeout(() => render3DViewer(mol), 0);
}

function answerCount(choice, btn) {
  const mol = currentMolecule();
  state.stats.countAttempts += 1;
  if (choice === mol.count.answer) {
    state.countDone = true;
    state.score += 30;
    btn.classList.add('correct');
    setBen('Contagem correta. Agora explique a regra química que torna a molécula válida.');
    toast('Contagem correta. +30 pontos', 'good');
  } else {
    state.stats.countErrors += 1;
    state.score -= 10; clampScore();
    btn.classList.add('wrong');
    setBen(`Revise a contagem. ${mol.count.hint}`);
    toast(`Contagem incorreta. ${mol.count.hint}`, 'bad');
  }
  renderAll();
}

function answerJustification(choice, btn) {
  const mol = currentMolecule();
  state.stats.justificationAttempts += 1;
  if (choice === mol.justification.answer) {
    state.justificationDone = true;
    state.score += 35;
    btn.classList.add('correct');
    setBen('Justificativa correta. Agora você pode construir a molécula com sentido químico.');
    toast('Justificativa correta. +35 pontos', 'good');
  } else {
    state.stats.justificationErrors += 1;
    state.score -= 10; clampScore();
    btn.classList.add('wrong');
    setBen(`Ainda não. ${mol.justification.hint}`);
    toast(`Justificativa incorreta. ${mol.justification.hint}`, 'bad');
  }
  renderAll();
}

function buildCurrentMolecule() {
  const mol = currentMolecule();
  if (!mol || !state.countDone || !state.justificationDone || !hasAllNeeded()) return;
  state.built.push(mol.id);
  state.stats.moleculesBuilt += 1;
  state.score += 80;
  setBen(mol.success);
  toast(`${mol.name} construída! +80 pontos`, 'good');
  state.targetIndex += 1;
  resetForTarget();
  showTab('mapTab');
  renderAll();
}

function renderReactions() {
  const content = $('reactionContent');
  const list = REACTIONS.map(r => {
    const done = state.completedReactions.includes(r.id);
    const locked = !hasBuilt(r.prereq);
    return `<div class="reaction-card ${done ? 'done' : ''} ${locked ? 'locked' : ''}">
      <div><strong>${r.title}</strong><p>${r.equation} ${locked ? `• bloqueada: construa ${moleculeName(r.prereq)}` : done ? '• concluída' : '• disponível'}</p></div>
      <button class="secondary-btn" data-reaction="${r.id}" ${locked || done ? 'disabled' : ''}>Resolver</button>
    </div>`;
  }).join('');
  const active = state.selectedReactionId ? REACTIONS.find(r => r.id === state.selectedReactionId) : null;
  let step = '';
  if (active && !state.completedReactions.includes(active.id)) step = renderReactionStep(active);
  const doneAll = state.completedReactions.length === REACTIONS.length;
  content.innerHTML = `<div class="reaction-list">${list}</div>${step}${doneAll ? '<div class="builder-step"><h3>Reações concluídas!</h3><p class="small-text">Você finalizou a Arena de Reações desta versão.</p></div>' : ''}`;
  document.querySelectorAll('[data-reaction]').forEach(btn => btn.addEventListener('click', () => selectReaction(btn.dataset.reaction)));
  bindReactionButtons();
}

function moleculeName(id) {
  const mol = MOLECULES.find(m => m.id === id);
  return mol ? `${mol.name} (${mol.formula})` : id;
}

function selectReaction(id) {
  state.selectedReactionId = id;
  state.reactionAnswered = false;
  state.reactionJustified = false;
  state.lastFeedback = '';
  setBen('Resolva primeiro o produto ou tipo de reação. Depois justifique o raciocínio.');
  renderAll();
}

function renderReactionStep(r) {
  if (!state.reactionAnswered) {
    const opts = orderedOptions(`reaction:${r.id}:answer`, r.options).map(opt => `<button class="option-btn" data-reaction-answer="${opt}">${opt}</button>`).join('');
    return `<div class="reaction-step"><h3>${r.equation}</h3><p class="small-text">Escolha o produto ou tipo de reação esperado.</p><div class="option-grid">${opts}</div>${state.lastFeedback ? `<div class="feedback-box bad">${state.lastFeedback}</div>` : ''}</div>`;
  }
  const opts = orderedOptions(`reaction:${r.id}:why`, r.why.options).map(opt => `<button class="option-btn" data-reaction-why="${opt}">${opt}</button>`).join('');
  return `<div class="reaction-step"><h3>Justificativa obrigatória</h3><p class="small-text">${r.why.question}</p><div class="option-grid">${opts}</div>${state.lastFeedback ? `<div class="feedback-box">${state.lastFeedback}</div>` : ''}</div>`;
}

function bindReactionButtons() {
  document.querySelectorAll('[data-reaction-answer]').forEach(btn => btn.addEventListener('click', () => answerReaction(btn.dataset.reactionAnswer, btn)));
  document.querySelectorAll('[data-reaction-why]').forEach(btn => btn.addEventListener('click', () => answerReactionWhy(btn.dataset.reactionWhy, btn)));
}

function answerReaction(choice, btn) {
  const r = REACTIONS.find(x => x.id === state.selectedReactionId);
  if (!r || state.reactionAnswered) return;
  state.stats.reactionAttempts += 1;
  if (choice === r.answer) {
    state.score += 100;
    state.reactionAnswered = true;
    btn.classList.add('correct');
    state.lastFeedback = `Resposta correta. ${r.feedback}`;
    setBen('Correto. Agora justifique: o importante é saber por que essa resposta faz sentido.');
    toast('Reação correta. +100 pontos', 'good');
  } else {
    state.stats.reactionErrors += 1;
    state.score -= 18; clampScore();
    btn.classList.add('wrong');
    state.lastFeedback = `Ainda não. A resposta correta é ${r.answer}. ${r.feedback}`;
    setBen(state.lastFeedback);
    toast('Resposta de reação incorreta. Leia o feedback e tente novamente.', 'bad');
  }
  renderAll();
}

function answerReactionWhy(choice, btn) {
  const r = REACTIONS.find(x => x.id === state.selectedReactionId);
  if (!r || !state.reactionAnswered) return;
  state.stats.reactionJustificationAttempts += 1;
  if (choice === r.why.answer) {
    state.score += 45;
    state.completedReactions.push(r.id);
    state.selectedReactionId = null;
    state.reactionAnswered = false;
    state.reactionJustified = false;
    state.lastFeedback = '';
    setBen('Justificativa correta. Você não apenas acertou; você explicou o mecanismo.');
    toast('Justificativa correta. Reação concluída. +45 pontos', 'good');
  } else {
    state.stats.reactionJustificationErrors += 1;
    state.score -= 8; clampScore();
    btn.classList.add('wrong');
    state.lastFeedback = `Reveja a lógica. A justificativa correta é: “${r.why.answer}”`;
    setBen(state.lastFeedback);
    toast('Justificativa incorreta. Tente explicar novamente.', 'bad');
  }
  renderAll();
}

function requestHint() {
  const activeTab = document.querySelector('.tab.active')?.id;
  const mol = currentMolecule();
  state.stats.hintsUsed += 1;
  state.score -= 5; clampScore();
  let hint = 'Leia a missão e pense: qual informação química é indispensável para avançar?';
  if (activeTab === 'mapTab' && mol) hint = state.hypothesisDone ? `Alvo atual: ${mol.formula}. Faltando: ${missingText()}.` : mol.hypothesis.hint;
  if (activeTab === 'builderTab' && mol) hint = !state.countDone ? mol.count.hint : mol.justification.hint;
  if (activeTab === 'reactionTab') {
    const r = REACTIONS.find(x => x.id === state.selectedReactionId);
    hint = r ? `Pense no substrato: ${r.equation}. ${r.feedback}` : 'Escolha uma reação disponível. Reações bloqueadas dependem de moléculas construídas.';
  }
  setBen(hint);
  toast(`Dica do Ben: ${hint}`, 'warn');
  renderAll();
}

function renderMission() {
  const mol = currentMolecule();
  if (mol) {
    $('missionTitle').textContent = `Missão ${state.targetIndex + 1} — ${mol.name}`;
    $('missionText').textContent = mol.prompt;
    $('worldTitle').textContent = mol.world;
    $('worldSubtitle').textContent = mol.subtitle;
  } else {
    $('missionTitle').textContent = 'Moléculas concluídas';
    $('missionText').textContent = 'Use as moléculas construídas para finalizar as reações e gerar relatório.';
    $('worldTitle').textContent = 'Portal dos Mecanismos';
    $('worldSubtitle').textContent = 'Integração final: adição, substituição e eliminação.';
  }
  renderTargetPanel();
}

function renderStats() {
  $('playerLabel').textContent = state.player;
  $('classLabel').textContent = state.turma;
  $('scoreValue').textContent = state.score;
  $('phaseValue').textContent = Math.min(state.targetIndex + 1, MOLECULES.length);
  $('builtValue').textContent = `${state.built.length}/${MOLECULES.length}`;
  $('reactionValue').textContent = `${state.completedReactions.length}/${REACTIONS.length}`;
  const progress = Math.round(((state.built.length / MOLECULES.length) * 55) + ((state.completedReactions.length / REACTIONS.length) * 45));
  $('progressBar').style.width = `${Math.min(100, progress)}%`;
}

function renderResults() {
  if (isComplete() && !state.stats.finishedAt) {
    state.stats.finishedAt = new Date();
    saveRanking();
  }
  const totalErrors = state.stats.collectionWrong + state.stats.formulaErrors + state.stats.countErrors + state.stats.justificationErrors + state.stats.reactionErrors + state.stats.reactionJustificationErrors;
  const duration = state.stats.startedAt ? Math.max(1, Math.round(((state.stats.finishedAt || new Date()) - new Date(state.stats.startedAt)) / 1000)) : 0;
  const percent = Math.round(((state.built.length + state.completedReactions.length) / (MOLECULES.length + REACTIONS.length)) * 100);
  const medals = buildMedals().map(m => `<span class="badge">🏅 ${m}</span>`).join(' ');
  $('resultContent').innerHTML = `
    <div class="report-grid">
      <div class="report-card"><strong>${state.score}</strong><span>pontuação</span></div>
      <div class="report-card"><strong>${percent}%</strong><span>progresso</span></div>
      <div class="report-card"><strong>${totalErrors}</strong><span>erros formativos</span></div>
      <div class="report-card"><strong>${duration}s</strong><span>tempo</span></div>
    </div>
    <div class="builder-step"><h3>Medalhas</h3><p class="small-text">${medals || 'Finalize missões para desbloquear medalhas.'}</p></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Indicador</th><th>Valor</th><th>Interpretação pedagógica</th></tr></thead>
        <tbody>
          <tr><td>Coletas corretas</td><td>${state.stats.collectionCorrect}</td><td>Selecionou átomos coerentes com a fórmula-alvo.</td></tr>
          <tr><td>Coletas incorretas</td><td>${state.stats.collectionWrong}</td><td>Distratores ou excesso; útil para discutir fórmula molecular.</td></tr>
          <tr><td>Erros de fórmula</td><td>${state.stats.formulaErrors}</td><td>Dificuldade em relacionar nome, prefixo e fórmula.</td></tr>
          <tr><td>Erros de contagem</td><td>${state.stats.countErrors}</td><td>Dificuldade em composição molecular.</td></tr>
          <tr><td>Erros de justificativa/valência</td><td>${state.stats.justificationErrors}</td><td>Dificuldade em explicar por que a molécula é válida.</td></tr>
          <tr><td>Erros de reação</td><td>${state.stats.reactionErrors}</td><td>Dificuldade em prever produto ou tipo de reação.</td></tr>
          <tr><td>Erros de justificativa de reação</td><td>${state.stats.reactionJustificationErrors}</td><td>Dificuldade em explicar o mecanismo.</td></tr>
          <tr><td>Dicas usadas</td><td>${state.stats.hintsUsed}</td><td>Indicador de necessidade de scaffolding.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="action-buttons">
      <button class="primary-btn" id="exportCsvBtn">Exportar CSV</button>
      <button class="secondary-btn" id="copyReportBtn">Copiar resumo</button>
      <button class="secondary-btn" id="restartFromResultsBtn">Jogar novamente</button>
    </div>
    ${renderRanking()}
  `;
  $('exportCsvBtn').addEventListener('click', exportCsv);
  $('copyReportBtn').addEventListener('click', copyReport);
  $('restartFromResultsBtn').addEventListener('click', () => { resetGame(true); showTab('mapTab'); });
}

function buildMedals() {
  const medals = [];
  if (state.built.includes('metano')) medals.push('Mestre do Carbono');
  if (state.built.includes('etano') && state.built.includes('eteno')) medals.push('Construtor de Hidrocarbonetos');
  if (state.built.includes('etanol')) medals.push('Guardião do Grupo OH');
  if (state.built.includes('bromoetano')) medals.push('Caçador de Haletos');
  if (state.completedReactions.filter(id => ['add_hbr','hydration','class_add'].includes(id)).length >= 2) medals.push('Guardião dos Alcenos');
  if (state.completedReactions.length === REACTIONS.length) medals.push('Químico Orgânico Júnior');
  return medals;
}

function saveRanking() {
  const data = getRanking();
  data.push({ name: state.player, turma: state.turma, score: state.score, built: state.built.length, reactions: state.completedReactions.length, date: new Date().toLocaleString('pt-BR') });
  data.sort((a,b) => b.score - a.score);
  localStorage.setItem('benMolcraftV4Ranking', JSON.stringify(data.slice(0, 8)));
}

function getRanking() {
  try { return JSON.parse(localStorage.getItem('benMolcraftV4Ranking') || '[]'); }
  catch { return []; }
}

function renderRanking() {
  const rows = getRanking().map((r, i) => `<tr><td>#${i+1}</td><td>${r.name} — ${r.turma}</td><td>${r.score}</td><td>${r.built}/5 mol.; ${r.reactions}/6 reações</td><td>${r.date}</td></tr>`).join('');
  return `<div class="builder-step" style="margin-top:14px"><h3>Ranking local</h3><div class="table-wrap"><table><thead><tr><th>#</th><th>Aluno</th><th>Pontos</th><th>Progresso</th><th>Data</th></tr></thead><tbody>${rows || '<tr><td colspan="5">Nenhum resultado salvo ainda.</td></tr>'}</tbody></table></div></div>`;
}

function reportObject() {
  return {
    aluno: state.player,
    turma: state.turma,
    pontuacao: state.score,
    moleculas_construidas: `${state.built.length}/${MOLECULES.length}`,
    reacoes_concluidas: `${state.completedReactions.length}/${REACTIONS.length}`,
    coletas_corretas: state.stats.collectionCorrect,
    coletas_incorretas: state.stats.collectionWrong,
    erros_formula: state.stats.formulaErrors,
    erros_contagem: state.stats.countErrors,
    erros_justificativa_valencia: state.stats.justificationErrors,
    erros_reacao: state.stats.reactionErrors,
    erros_justificativa_reacao: state.stats.reactionJustificationErrors,
    dicas_usadas: state.stats.hintsUsed,
    medalhas: buildMedals().join('; '),
    data: new Date().toLocaleString('pt-BR')
  };
}

function exportCsv() {
  const obj = reportObject();
  const header = Object.keys(obj).join(',');
  const row = Object.values(obj).map(v => `"${String(v).replace(/"/g, '""')}"`).join(',');
  const blob = new Blob([header + '\n' + row], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `relatorio_ben_mundo_molecular_${state.player.replace(/\s+/g, '_')}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

async function copyReport() {
  const obj = reportObject();
  const text = Object.entries(obj).map(([k,v]) => `${k}: ${v}`).join('\n');
  try {
    await navigator.clipboard.writeText(text);
    toast('Resumo copiado para a área de transferência.', 'good');
  } catch {
    toast('Não foi possível copiar automaticamente. Use Exportar CSV.', 'warn');
  }
}

function renderAll() {
  renderStats();
  renderMission();
  renderHypothesis();
  renderGrid();
  renderBuilder();
  renderReactions();
  renderResults();
}

function bindEvents() {
  $('startBtn').addEventListener('click', startGame);
  $('aboutBtn').addEventListener('click', () => showScreen('aboutScreen'));
  $('backFromAbout').addEventListener('click', () => showScreen('startScreen'));
  $('resetBtn').addEventListener('click', () => { resetGame(true); showTab('mapTab'); toast('Jogo reiniciado.', 'warn'); });
  $('hintBtn').addEventListener('click', requestHint);
  $('mapTabBtn').addEventListener('click', () => showTab('mapTab'));
  $('builderTabBtn').addEventListener('click', () => showTab('builderTab'));
  $('reactionTabBtn').addEventListener('click', () => showTab('reactionTab'));
  $('resultsTabBtn').addEventListener('click', () => showTab('resultTab'));
  document.querySelectorAll('.move-pad button').forEach(btn => btn.addEventListener('click', () => movePlayer(btn.dataset.dir)));
  window.addEventListener('keydown', (e) => {
    if (!$('gameScreen').classList.contains('active')) return;
    const k = e.key.toLowerCase();
    const map = { arrowup: 'up', w: 'up', arrowdown: 'down', s: 'down', arrowleft: 'left', a: 'left', arrowright: 'right', d: 'right' };
    if (map[k]) { e.preventDefault(); movePlayer(map[k]); }
  });
}

bindEvents();
resetGame(false);
showTab('mapTab');

# Ben e o Mundo Molecular — v4 Corrigida

Protótipo HTML/CSS/JavaScript para GitHub Pages de um serious game de Química Orgânica com o mascote Ben.

## Ideia do jogo

O aluno avança por uma sequência pedagógica:

1. **Hipótese molecular** — prevê a fórmula correta antes de coletar.
2. **Coleta seletiva** — coleta apenas os átomos compatíveis com a molécula-alvo.
3. **Bancada molecular** — confirma contagem e justifica valência/grupo funcional.
4. **Arena de reações** — aplica moléculas construídas em reações de adição, substituição e eliminação.
5. **Relatório pedagógico** — exporta CSV com erros, dicas e progresso.

## Estrutura do pacote

```text
ben_mundo_molecular_v4_corrigida/
├── index.html
├── styles.css
├── script.js
├── README.md
├── LICENSE.txt
├── .nojekyll
└── assets/
    └── ben.jpg
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Aguarde o GitHub gerar o link público.

## O que há de novo na v4

- O aluno não pode coletar antes de responder à hipótese molecular.
- Átomos errados são tratados como distratores e geram feedback químico.
- A bancada exige contagem e justificativa antes da construção.
- Reações ficam bloqueadas até que a molécula necessária seja construída.
- Cada reação exige resposta e justificativa.
- O jogo salva ranking local no navegador.
- O relatório final pode ser exportado em CSV.
- Alternativas de resposta agora são embaralhadas por sessão, evitando que a resposta correta fique sempre na mesma posição.
- A estrutura 2D do eteno foi corrigida e agora é renderizada em SVG, não em ASCII.
- A bancada inclui visualização 3D interativa via 3Dmol.js carregado por CDN; se não houver internet, a estrutura 2D continua funcionando.

## Conteúdo químico da versão

### Moléculas

- Metano — CH₄
- Etano — C₂H₆
- Eteno — C₂H₄
- Etanol — C₂H₆O
- Bromoetano — C₂H₅Br

### Reações

- Eteno + HBr → bromoetano
- Eteno + H₂O/H⁺ → etanol
- Bromoetano + OH⁻ → etanol
- Bromoetano + base forte → eteno
- Classificação de adição
- Classificação de eliminação

## Próximas melhorias sugeridas

- Adicionar desenho drag-and-drop real da molécula.
- Incluir animações de mecanismo com setas curvas.
- Criar modo professor com exportação consolidada da turma.
- Adicionar banco de questões editável em JSON.
- Adicionar fases sobre álcoois, aromáticos, carbonilas e espectroscopia.
- Adicionar áudio opcional e acessibilidade com leitura de tela.

## Observação

Este projeto é uma criação educacional original inspirada em jogos de blocos/voxel, sem uso de nomes, texturas ou assets oficiais de Minecraft.

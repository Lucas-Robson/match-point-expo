# Arranque do Dia 1 — MatchPoint

## Objetivo das primeiras 90 minutos

Antes de dividir o trabalho, a equipe deve confirmar:

- todos possuem acesso ao repositório;
- todos clonaram a `develop` atualizada;
- Node.js e dependências funcionam;
- `npm run export:web` passa em cada computador;
- cada pessoa leu `AGENTS.md` e os dois manuais;
- a versão P0 de `docs/CONTRATOS_DE_DADOS.md` foi aceita;
- ninguém possui chave, senha ou conta real dentro do repositório;
- as quatro primeiras Issues estão atribuídas.

## Sequência

### 08:30–08:45 — Alinhamento

1. confirmar responsáveis e ausências;
2. revisar os 21 requisitos P0;
3. confirmar que P1 e P2 não serão iniciados;
4. escolher quem acompanhará a matriz durante o dia.

### 08:45–09:15 — Ambiente

Cada pessoa executa:

```text
git switch develop
git pull
npm ci
npm run export:web
```

Cada integrante cria somente a primeira branch do seu módulo.

### 09:15–10:00 — Contratos

Renato apresenta e congela:

- tipos de usuário;
- formatos de atleta, responsável, parceiro e oportunidade;
- candidatura, status e transições;
- Match Score e elegibilidade;
- respostas de sucesso e erro;
- estratégia `memory` e `firebase`.

Mudanças posteriores seguem pedido entre áreas.

## Fatia vertical até 12:00

O primeiro objetivo integrado não é concluir todas as telas. É comprovar a comunicação entre módulos:

```text
sessão fictícia ou real
      ↓
oportunidade do repositório
      ↓
candidatura criada
      ↓
status atualizado
      ↓
histórico consultado
```

Pode usar o adaptador em memória oficial, mas todos devem consumir as mesmas interfaces. Nenhuma tela cria seu próprio formato temporário.

O adaptador oficial está em `src/repositories/memory/index.js`. Antes de consumir o repositório, execute:

```text
npm run check:contracts
```

## Contas e dados de demonstração

O arquivo `src/data/demoSeed.js` contém identidades e dados totalmente fictícios:

```text
atleta.adulto@matchpoint.example
atleta.menor@matchpoint.example
responsavel@matchpoint.example
treinador@matchpoint.example
instituicao@matchpoint.example
```

Regras:

- nenhuma senha fica no Git;
- se as contas forem criadas no Firebase Authentication, a senha temporária é compartilhada fora do repositório;
- os dados podem ser recriados sem afetar usuários reais;
- não usar CPF, endereço, telefone ou documento real;
- a demonstração deve possuir oportunidade compatível e incompatível.

## Issues iniciais

### Maria

```text
[P0][Maria] Autenticação, idade e fluxo de responsável
RF01, RF04, RF05, RF06 e RF07
```

### Marcelo

```text
[P0][Marcelo] Perfil, consulta de oportunidades e candidatura
RF03, RF10, RF11, RF15, RF16 e RF17
```

### Laura

```text
[P0][Laura] Gerenciamento de oportunidades e candidatos
RF09, RF18 e RF21
```

### Renato

```text
[P0][Renato] Sessão, regras, Match Score e histórico
RF02, RF12, RF13, RF14 e RF22
```

## Política de bloqueio

Depois de 45 minutos sem avanço:

1. marcar a Issue como `blocked`;
2. informar dependência, pessoa responsável e tentativa realizada;
3. continuar com o mock oficial se o contrato estiver disponível;
4. não alterar o contrato localmente;
5. retomar somente após commit, autorização ou decisão registrada.

## Encerramento às 17:30

- abrir todas as Pull Requests do dia;
- revisar dependências entre módulos;
- integrar somente builds aprovados;
- executar a fatia vertical;
- atualizar os 21 itens P0;
- registrar o primeiro bloqueio do Dia 2, se existir.

# Plano de trabalho — área da Maria

Este documento registra o planejamento, as decisões alinhadas e o andamento do
trabalho da área da Maria no MatchPoint. Será atualizado durante a execução.

## Escopo

Responsável: **Maria — Identidade, cadastro e experiência compartilhada**.

Requisitos atribuídos à Maria no ciclo P0:

| Requisito | Entrega |
| --- | --- |
| RF01 | Cadastro, login e recuperação de senha integrados ao contrato de autenticação. |
| RF04 | Idade calculada a partir da data de nascimento, sem campo manual de idade. |
| RF05 | Identificação automática de atleta menor de 18 anos. |
| RF06 | Cadastro e vínculo autorizado de responsável legal para atleta menor. |
| RF07 | Responsável administra somente os atletas vinculados a ele. |
| RF24 | Operações comunicam carregamento, confirmação, sucesso e erro. |
| RF25 | Listas sem resultados apresentam orientação clara. |

Também fazem parte da área os componentes reutilizáveis, tema e consistência
visual, respeitando os limites para estilos locais de outras áreas.

## Decisões alinhadas

- O responsável cria a própria conta antes do cadastro do atleta.
- O responsável gera um convite/código; o atleta informa esse código para
  solicitar o vínculo.
- Em `src/screens/athlete-area/**`, Maria cuida do fluxo de cadastro. Marcelo
  define e implementa os dados e o comportamento do perfil esportivo associado
  ao RF03.

## Estado observado

- As telas atuais de login, recuperação e cadastro são majoritariamente
  apresentações visuais e navegação; os formulários ainda precisam de validação
  e integração funcional.
- Já existem componentes básicos de botão, campo e estrutura de tela em
  `src/components/ui/`.
- O repositório em memória já expõe operações de idade, identificação de menor,
  vínculo e atualização como responsável.
- O mecanismo de convite/código ainda não está definido no contrato nem na
  implementação observada.
- A implementação de autenticação em memória é demonstrativa: não valida
  senhas reais nem oferece persistência de conta.
- A configuração local `.env` seleciona `firebase`, mas a fábrica em
  `src/repositories/index.js` ainda só implementa `memory` e lança erro para
  `firebase`.
- Não foi localizada uma tela própria para o responsável consultar e administrar
  os atletas vinculados.

## Plano de execução

1. **Alinhar dependências com Renato**
   - Definir contrato e implementação do convite/código: emissão, validação,
     uso único ou validade, erros e confirmação do vínculo.
   - Definir o acesso/rota para a área de administração do responsável.
   - Confirmar o adaptador de autenticação que as telas devem consumir.
   - Não alterar contratos, Firebase, rotas ou arquivos controlados sem o
     alinhamento e a autorização do responsável.
2. **Implementar RF01**
   - Tornar funcionais cadastro, login e recuperação de senha.
   - Validar os campos e apresentar carregamento, resultado e erros do contrato.
3. **Implementar RF04 e RF05**
   - Reutilizar as operações de idade existentes e determinar automaticamente
     se o atleta é menor.
   - Bloquear a conclusão do cadastro de menor até haver vínculo válido.
4. **Implementar RF06**
   - Permitir que o atleta menor informe o código gerado pelo responsável e
     concluir somente após a confirmação do vínculo.
   - Apresentar erros recuperáveis para código inválido ou vínculo recusado.
5. **Implementar RF07**
   - Exibir ao responsável somente atletas vinculados e permitir as ações
     autorizadas pelo contrato.
   - Garantir autorização no serviço/repositório, não apenas ocultando ações na
     interface.
6. **Implementar RF24 e RF25**
   - Criar ou completar componentes compartilhados de carregamento, sucesso,
     erro, confirmação e estado vazio.
   - Aplicá-los primeiro aos fluxos da área da Maria e disponibilizá-los às
     outras áreas conforme combinado.
7. **Validar**
   - Testar cadastro adulto, cadastro de menor, código inválido, vínculo
     confirmado e tentativa de acesso a atleta não vinculado.
   - Executar `npm run check:contracts`, `npm run progress -- --check` e
     `npm run export:web`.

## Limites de arquivos

Áreas sob responsabilidade da Maria, conforme o manual:

```text
assets/**
src/components/**
src/theme/**
src/screens/OpeningScreen.js
src/screens/LoginScreen.js
src/screens/ProfileChoiceScreen.js
src/screens/Recovery*.js
src/screens/signup/**
src/screens/athlete-area/**
```

`App.js`, `src/screens/index.js`, `src/data/**`, dependências e
`src/theme/styles.js` são controlados. Qualquer mudança necessária nesses
arquivos deve seguir o processo de autorização do projeto. O trabalho não deve
assumir a implementação do Firebase ou de rotas pertencentes ao Renato.

## Registro de andamento

### 2026-10-15 — Planejamento inicial

- Lidos `AGENTS.md`, o manual de colaboração, o manual do projeto de três dias,
  os contratos de dados e o painel de progresso.
- Conferidos os arquivos de login, cadastro, área inicial do atleta, recuperação
  de senha, componentes de interface e repositório em memória.
- Alinhados o cadastro prévio do responsável, o convite/código e a divisão da
  tela `athlete-area` entre o fluxo de cadastro da Maria e os dados do perfil
  esportivo do Marcelo.
- Criado este documento a pedido do usuário.
- Nenhum código funcional foi alterado. Os requisitos de Maria permanecem
  `não_iniciado` no painel de progresso.
- Próxima ação: resolver com Renato as dependências de contrato, autenticação e
  acesso à administração antes de iniciar RF06/RF07.

### 2026-10-15 — Verificação das dependências de Renato

- O painel `docs/PROGRESSO.md` continua marcando RF02, RF12, RF13, RF14 e RF22
  de Renato como `Não iniciado`.
- `src/repositories/index.js` continua sem adaptador Firebase; com
  `EXPO_PUBLIC_DATA_PROVIDER=firebase`, `createRepositories` lança erro.
- Conclusão: Maria pode iniciar trabalho de interface e validação independente
  do Firebase usando o adaptador em memória, desde que a inicialização local não
  dependa da variável `firebase`. A integração real de RF01 e os fluxos de
  vínculo/administração de RF06/RF07 ainda dependem do alinhamento e das
  entregas de Renato.
- A verificação não altera o status dos requisitos; todos continuam
  `não_iniciado`.

### 2026-10-15 — Nova checagem após implementação reportada

- Conferidos o estado do Git, os commits recentes, o painel individual de
  Renato, `src/repositories/index.js` e as pastas de repositórios e serviços.
- Não há implementação Firebase visível nesta cópia/branch: só existem a
  fábrica e o adaptador em memória, e os requisitos de Renato continuam
  `não_iniciado`.
- Com `EXPO_PUBLIC_DATA_PROVIDER=firebase`, `createRepositories()` ainda lança
  `Provedor de dados ainda não configurado: firebase`.
- Isso indica que a implementação reportada pode ainda não ter sido integrada
  ou atualizada nesta cópia do projeto; não confirma que o trabalho de Renato
  não exista em outra branch ou ambiente.

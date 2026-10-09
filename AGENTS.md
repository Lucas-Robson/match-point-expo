# Instruções obrigatórias para IAs — MatchPoint

Estas regras se aplicam a qualquer IA que leia, analise ou altere este repositório.

## Antes de fazer qualquer alteração

1. Leia integralmente `docs/MANUAL_DE_COLABORACAO.md`.
2. Se a tarefa envolver dados, autenticação, API ou banco, leia também `docs/CONTRATOS_DE_DADOS.md`.
3. Identifique a área responsável e os arquivos autorizados pela solicitação.
4. Verifique o estado atual dos arquivos antes de editar e preserve mudanças existentes.
5. Declare quais arquivos pretende alterar quando o trabalho ultrapassar uma única tela ou componente.

Se a solicitação conflitar com este documento, siga a solicitação explícita do usuário, mas informe claramente o conflito e o impacto.

## Responsáveis e limites

| Responsável | Área | Escopo principal |
| --- | --- | --- |
| Maria | Acesso e interface compartilhada | `assets/**`, `src/components/**`, `src/theme/**`, acesso, cadastro e área esportiva inicial |
| Marcelo | Jornada do atleta | telas do atleta, oportunidades, candidaturas, Match Score, perfil e notificações |
| Laura | Jornada dos parceiros | `src/screens/partner/**`, treinador, instituição, oportunidades e candidatos |
| Renato | Núcleo e dados | `App.js`, configuração, dependências, navegação, contratos, banco, segurança e integração |

O mapeamento completo de arquivos está no manual.

## Arquivos controlados

Não altere estes arquivos sem autorização explícita na tarefa:

```text
App.js
index.js
app.json
package.json
package-lock.json
src/screens/index.js
src/data/**
src/theme/styles.js
```

Não instale, remova ou atualize dependências sem autorização do Renato.

## Conduta obrigatória

- altere somente os arquivos necessários para a tarefa;
- não faça refatorações, renomeações ou formatações em massa;
- não mova arquivos de outra área;
- não apague código aparentemente sem uso sem confirmar sua finalidade;
- estilos específicos devem ficar próximos da feature; estilos globais pertencem à Maria;
- telas nunca devem importar diretamente o SDK do Firebase;
- integrações de dados devem passar por contratos e repositórios;
- nunca exponha chaves, senhas, tokens ou dados pessoais;
- não sobrescreva mudanças locais de outra pessoa;
- se precisar ultrapassar os limites da área, pare e registre a dependência ou o pedido entre áreas;
- quando houver ambiguidade relevante, explique o bloqueio em vez de assumir uma alteração ampla.

## Uso de Git e GitHub

- uma tarefa por branch;
- branches de tarefa partem de `develop`;
- não faça commit diretamente em `main` ou `develop`;
- use os padrões de branch e commit definidos no manual;
- não use comandos destrutivos para descartar trabalho existente;
- não copie código manualmente entre branches quando a dependência deve chegar por Pull Request;
- revise `git status` e `git diff` antes de entregar.

## Validação mínima

Depois de alterar código executável, rode:

```text
npm run export:web
```

Se a validação não puder ser executada ou falhar, informe o comando, a falha e os arquivos afetados. Mudanças apenas em documentação não exigem exportação do aplicativo.

## Entrega da IA

Ao concluir, informe:

- resultado alcançado;
- arquivos alterados;
- validações executadas;
- limitações ou dependências restantes;
- qualquer mudança que precise da aprovação de outra área.

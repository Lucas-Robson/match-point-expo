# Contratos de dados — MatchPoint

Status: rascunho para aprovação da equipe antes da implementação do banco.

## Objetivo

Este documento define a linguagem comum entre as telas e o futuro banco de dados. Ele evita que componentes dependam diretamente de nomes de coleções, consultas ou detalhes do Firebase.

As interfaces definitivas deverão ser implementadas em `src/domain/` e consumidas por repositórios. Até o banco estar pronto, os mesmos contratos podem ser atendidos por dados simulados.

## Regras

- IDs são strings geradas pelo serviço de dados;
- datas circulam na aplicação em formato ISO 8601 e são formatadas apenas na interface;
- campos obrigatórios e opcionais devem ser validados antes da gravação;
- telas não conhecem nomes de coleções do Firebase;
- nenhuma senha é armazenada nos documentos de usuário;
- dados pessoais só podem ser acessados por perfis autorizados;
- alterações incompatíveis exigem registro de decisão e aprovação das áreas consumidoras.

## Entidades iniciais

### Usuário

```text
id
email
tipo: atleta | treinador | instituicao | responsavel | administrador
nome
telefone?
fotoUrl?
criadoEm
atualizadoEm
```

### Atleta

```text
id
usuarioId
responsavelId?
dataNascimento
cpf?
localizacao?
biografia?
modalidade
categoria?
posicao?
maoDominante?
equipeAtual?
tempoDePratica?
ranking?
torneiosDisputados?
titulos?
perfilCompleto
```

### Parceiro

Representa treinador ou instituição.

```text
id
usuarioId
tipo: treinador | instituicao
nomeExibicao
documento?
descricao?
localizacao?
verificado
```

### Oportunidade

```text
id
criadorId
titulo
descricao
modalidade
categoria
localizacao
instituicao?
beneficio?
requisitos[]
inicioInscricoes?
fimInscricoes
status: rascunho | ativa | encerrada | em_analise
criadoEm
atualizadoEm
```

### Candidatura

```text
id
oportunidadeId
atletaId
status: iniciada | inscrita | documentos_enviados | em_analise | aprovada | rejeitada
matchScore?
documentos[]
historico[]
criadoEm
atualizadoEm
```

### Documento da candidatura

```text
id
tipo
nome
arquivoUrl
status: pendente | enviado | validado | rejeitado
enviadoEm?
```

### Evento do histórico

```text
id
status
descricao?
data
responsavelId?
```

### Match Score

```text
percentualTotal
criterios[]:
  nome
  percentual
calculadoEm
versaoDoCalculo
```

## Interfaces esperadas dos repositórios

### Autenticação

```text
entrar(email, senha)
sair()
recuperarSenha(email)
obterSessaoAtual()
```

### Usuários e perfis

```text
obterUsuario(id)
atualizarUsuario(id, dados)
obterPerfilAtleta(id)
atualizarPerfilAtleta(id, dados)
obterPerfilParceiro(id)
atualizarPerfilParceiro(id, dados)
```

### Oportunidades

```text
listarOportunidades(filtros)
obterOportunidade(id)
criarOportunidade(dados)
atualizarOportunidade(id, dados)
encerrarOportunidade(id)
listarOportunidadesDoParceiro(parceiroId, filtros)
```

### Candidaturas

```text
criarCandidatura(oportunidadeId, atletaId, dados)
obterCandidatura(id)
listarCandidaturasDoAtleta(atletaId, filtros)
listarCandidatosDaOportunidade(oportunidadeId, filtros)
atualizarStatusDaCandidatura(id, status)
enviarDocumento(candidaturaId, documento)
```

### Match Score

```text
calcularMatchScore(atletaId, oportunidadeId)
obterMatchScore(atletaId, oportunidadeId)
```

## Estados obrigatórios para a interface

Toda operação assíncrona deve permitir que a tela trate:

```text
carregando
sucesso com dados
sucesso sem dados
erro recuperável
erro de permissão
```

## Próximas decisões

Antes da implementação do Firebase, a equipe deve aprovar:

- campos obrigatórios de cada tipo de cadastro;
- relação entre atleta menor de idade e responsável;
- permissões de treinador e instituição;
- documentos aceitos e regras de armazenamento;
- transições válidas de status de candidatura;
- fórmula e versionamento do Match Score;
- política de exclusão e retenção de dados;
- necessidade de perfil administrativo.

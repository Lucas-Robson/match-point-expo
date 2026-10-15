import assert from 'node:assert/strict'
import { APPLICATION_STATUS, calculateAge, isMinor } from '../src/domain/contracts.js'
import { createMemoryRepositories } from '../src/repositories/memory/index.js'

const repositories = createMemoryRepositories()

assert.equal(calculateAge('2000-10-10', new Date('2026-10-09T12:00:00Z')), 25)
assert.equal(calculateAge('2000-10-09', new Date('2026-10-09T12:00:00Z')), 26)
assert.equal(isMinor('2011-08-20', new Date('2026-10-09T12:00:00Z')), true)

const login = await repositories.authentication.entrar('atleta.menor@matchpoint.example', 'demo-local')
assert.equal(login.ok, true)

const activeOpportunities = await repositories.opportunities.listarOportunidades({ status: 'ativa' })
assert.equal(activeOpportunities.ok, true)
assert.equal(activeOpportunities.data.length, 2)

const eligible = await repositories.match.avaliarElegibilidade('atleta-menor', 'oportunidade-bolsa-tenis')
assert.equal(eligible.ok, true)
assert.equal(eligible.data.elegivel, true)

const ineligible = await repositories.match.avaliarElegibilidade('atleta-menor', 'oportunidade-futebol-incompativel')
assert.equal(ineligible.ok, true)
assert.equal(ineligible.data.elegivel, false)

const application = await repositories.applications.criarCandidatura(
  'oportunidade-bolsa-tenis',
  'atleta-menor',
  { responsavelId: 'usuario-atleta-menor' },
)
assert.equal(application.ok, true)

const duplicate = await repositories.applications.criarCandidatura(
  'oportunidade-bolsa-tenis',
  'atleta-menor',
)
assert.equal(duplicate.ok, false)
assert.equal(duplicate.codigo, 'CANDIDATURA_DUPLICADA')

const underReview = await repositories.applications.atualizarStatusDaCandidatura(
  application.data.id,
  APPLICATION_STATUS.UNDER_REVIEW,
  'usuario-instituicao',
)
assert.equal(underReview.ok, true)

const approved = await repositories.applications.atualizarStatusDaCandidatura(
  application.data.id,
  APPLICATION_STATUS.APPROVED,
  'usuario-instituicao',
)
assert.equal(approved.ok, true)
assert.equal(approved.data.historico.length, 3)

console.log('Contratos P0 em memória verificados com sucesso.')

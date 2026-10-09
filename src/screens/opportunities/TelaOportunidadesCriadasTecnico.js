import React from 'react'
import { OpportunitiesList } from './OpportunitiesList'

export function TelaOportunidadesCriadasTecnico(props) {
  return <OpportunitiesList {...props} role="trainer" created />
}

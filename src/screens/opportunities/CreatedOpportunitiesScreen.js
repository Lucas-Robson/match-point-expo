import React from 'react'
import { OpportunitiesList } from './OpportunitiesList'

export function CreatedOpportunitiesScreen(props) {
  return <OpportunitiesList {...props} role="institution" created />
}

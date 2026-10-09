import React from 'react'
import { PartnerHome } from './PartnerHome'

export function InstitutionHomeScreen(props) {
  return <PartnerHome {...props} role="institution" initials="In" name="Instituição" activeCount="31" candidateCount="1300" bannerPressable={false} />
}

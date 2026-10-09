import React from 'react'
import { PartnerHome } from './PartnerHome'

export function TrainerHomeScreen(props) {
  return <PartnerHome {...props} role="trainer" initials="Tr" name="Treinador" activeCount="04" candidateCount="12" />
}

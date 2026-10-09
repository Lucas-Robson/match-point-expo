import React from 'react'
import { SignupForm } from './SignupForm'
import { assets } from '../../theme/assets'

const config = {
  accent: 'Instituição',
  background: assets.signupInstitution,
  fields: ['Nome da Instituição', 'Tipo: empresa, clube, academia, etc...', 'CNPJ', 'Localização', 'Senha', 'Confirme sua senha'],
  next: 'homeInstitution',
}

export function InstitutionSignupScreen(props) {
  return <SignupForm {...props} config={config} />
}

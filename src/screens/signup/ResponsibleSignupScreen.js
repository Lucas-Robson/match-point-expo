import React from 'react'
import { SignupForm } from './SignupForm'
import { assets } from '../../theme/assets'

const config = {
  accent: 'Responsável',
  background: assets.signupResponsible,
  fields: ['Nome completo', 'Parentesco com o atleta.', 'CPF', 'Telefone', 'Senha', 'Confirme a senha'],
  next: 'athleteArea1',
}

export function ResponsibleSignupScreen(props) {
  return <SignupForm {...props} config={config} />
}

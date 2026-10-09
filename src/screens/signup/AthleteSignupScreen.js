import React from 'react'
import { SignupForm } from './SignupForm'
import { assets } from '../../theme/assets'

const config = {
  accent: 'Atleta',
  background: assets.signupAthlete,
  fields: ['Nome completo', 'Endereço de email', 'Data de nascimento', 'Senha', 'Confirme a senha'],
  isAthlete: true,
  next: 'athleteArea1',
}

export function AthleteSignupScreen(props) {
  return <SignupForm {...props} config={config} />
}

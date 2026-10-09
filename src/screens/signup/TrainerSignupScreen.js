import React from 'react'
import { SignupForm } from './SignupForm'
import { assets } from '../../theme/assets'

const config = {
  accent: 'Treinador',
  background: assets.signupTrainer,
  fields: ['Nome completo', 'Endereço de email', 'CPF', 'Senha', 'Confirme a senha'],
  next: 'homeTrainer',
}

export function TrainerSignupScreen(props) {
  return <SignupForm {...props} config={config} />
}

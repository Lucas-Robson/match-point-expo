import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Button } from '../components/ui/Button'
import { Field } from '../components/ui/Field'
import { Shell } from '../components/ui/Shell'
import { assets } from '../theme/assets'
import { styles } from '../theme/styles'

export function LoginScreen({ go, back }) {
  return (
    <Shell background={assets.court} back={back}>
      <Image source={assets.logo} style={styles.loginLogo} resizeMode="contain" />
      <View style={[styles.card, styles.loginCard]}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.helper}>Não possui conta? <Text style={styles.semibold} onPress={() => go('choice')}>Clique Aqui</Text></Text>
        <View style={styles.formGap} />
        <Field placeholder="Seu@gmail.com" />
        <Field placeholder="Senha" secureTextEntry />
        <Pressable onPress={() => go('recovery1')}><Text style={styles.link}>Esqueci minha senha</Text></Pressable>
        <Button onPress={() => {}}>Entrar</Button>
        <Text style={styles.remember}>□  Me mantenha conectado</Text>
      </View>
    </Shell>
  )
}

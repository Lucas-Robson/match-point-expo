import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { Button } from '../../components/ui/Button'
import { Shell } from '../../components/ui/Shell'
import { BLUE } from '../../theme/colors'
import { styles } from '../../theme/styles'

export function SignupForm({ config, go, back }) {
  const { accent, background, fields, isAthlete = false, next } = config

  return (
    <Shell background={background} back={back} logo>
      <View style={styles.signupWrap}>
        <Text style={styles.signupTitle}>Cadastro<Text style={styles.signupAccent}>{accent}</Text></Text>
        <View style={styles.signupFields}>
          {fields.map(field => (
            <TextInput
              key={field}
              placeholder={field}
              placeholderTextColor={BLUE}
              secureTextEntry={field.toLowerCase().includes('senha')}
              style={styles.signupInput}
            />
          ))}
        </View>
        <Pressable onPress={() => isAthlete && go('signupResponsible')}>
          <Text style={styles.privacy}>□  Aceito as políticas de Privacidade</Text>
        </Pressable>
        <Button onPress={() => go(next)}>Entrar</Button>
        {isAthlete && (
          <Pressable onPress={() => go('signupResponsible')}>
            <Text style={styles.minorLink}>Cadastro de responsável</Text>
          </Pressable>
        )}
      </View>
    </Shell>
  )
}

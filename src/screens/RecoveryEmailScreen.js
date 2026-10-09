import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../components/ui/Button'
import { Field } from '../components/ui/Field'
import { Shell } from '../components/ui/Shell'
import { assets } from '../theme/assets'
import { styles } from '../theme/styles'

export function RecoveryEmailScreen({ go, back }) {
  return (
    <Shell background={assets.recovery1} back={back} logo>
      <View style={[styles.card, styles.recoveryCard, styles.recoveryOne]}>
        <Text style={styles.title}>Recuperar <Text style={styles.greenTitle}>senha</Text></Text>
        <Text style={styles.recoveryCopy}>Insira o endereço de e-mail usado ao{`\n`}registrar a conta. Você receberá um link{`\n`}de redefinição.</Text>
        <View style={styles.fieldTop} />
        <Field placeholder="Seu@gmail.com" />
        <Button onPress={() => go('recovery2')}>Confirmar</Button>
      </View>
    </Shell>
  )
}

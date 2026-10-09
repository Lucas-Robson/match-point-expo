import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { Button } from '../../components/ui/Button'
import { Shell } from '../../components/ui/Shell'
import { assets } from '../../theme/assets'
import { BLUE } from '../../theme/colors'
import { styles } from '../../theme/styles'

const fieldsByStep = {
  1: ['Nome completo', 'Categoria', 'Mão dominante', 'Clube atual (opcional)', 'Resultados esportivos'],
  2: ['Objetivos', 'Necessidades', 'Dias e períodos disponíveis', 'Possibilidade de viagem', 'Distância máxima', 'Resumo do responsável (opcional)'],
}

export function AthleteAreaForm({ step, go, back }) {
  const next = step === 1 ? 'athleteArea2' : 'homeAthlete'

  return (
    <Shell background={assets.athleteArea} back={back}>
      <View style={styles.areaPanel}>
        <Text style={styles.areaTitle}>Área do <Text style={styles.signupAccent}>Atleta</Text></Text>
        <Text style={styles.areaStep}>{step} de 2</Text>
        <View style={styles.areaRule} />
        <View style={styles.areaFields}>
          {fieldsByStep[step].map(field => (
            <TextInput key={field} placeholder={field} placeholderTextColor={BLUE} style={styles.areaInput} />
          ))}
        </View>
        <Button onPress={() => go(next)}>{step === 1 ? 'Continuar' : 'Concluir cadastro'}</Button>
      </View>
    </Shell>
  )
}

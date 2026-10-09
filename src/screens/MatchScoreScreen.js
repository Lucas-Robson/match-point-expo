import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { BackButton } from '../components/ui/BackButton'
import { BottomNav } from '../components/navigation/BottomNav'
import { Button } from '../components/ui/Button'
import { assets } from '../theme/assets'
import { styles } from '../theme/styles'

const matchReasons = [
  'Desempenho esportivo',
  'Histórico acadêmico',
  'Objetivos alinhados',
  'Perfil técnico',
  'Experiência competitiva',
]

export function MatchScoreScreen({ go, back }) {
  return (
    <View style={styles.flowScreen}>
      <View style={styles.flowHeader}>
        <BackButton onPress={back} />
        <Image source={assets.monogram} style={styles.flowHeaderMark} resizeMode="contain" />
      </View>

      <ScrollView style={styles.flowBody} contentContainerStyle={styles.matchContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.matchTitle}>Match Score</Text>
        <View style={styles.matchCircle}>
          <Text style={styles.matchPercent}>94%</Text>
        </View>
        <Text style={styles.matchCaption}>Compatibilidade Alta</Text>

        <Text style={styles.matchSectionTitle}>Por que você combina?</Text>
        <View style={styles.matchReasons}>
          {matchReasons.map(reason => (
            <View key={reason}>
              <View style={styles.matchReasonHeading}>
                <Text style={styles.matchReasonLabel}>{reason}</Text>
                <Text style={styles.matchReasonValue}>90%</Text>
              </View>
              <View style={styles.matchTrack}>
                <View style={styles.matchFill} />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.flowAction}>
          <Button wide onPress={() => go('opportunityDetail')}>Ver oportunidade</Button>
        </View>
      </ScrollView>
      <BottomNav go={go} active="opportunities" />
    </View>
  )
}

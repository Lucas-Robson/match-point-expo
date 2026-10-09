import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { BackButton } from '../components/ui/BackButton'
import { BottomNav } from '../components/navigation/BottomNav'
import { Button } from '../components/ui/Button'
import { BLUE } from '../theme/colors'
import { styles } from '../theme/styles'

const timeline = [
  ['Inscrição realizada', '12/06/2026', true],
  ['Documentos enviados', '12/06/2026', true],
  ['Em análise', 'Desde 16/06/2026', true],
  ['Resultado final', 'Aguardando', false],
]

const documents = ['Currículo esportivo', 'Histórico escolar', 'Vídeo de apresentação', 'Comprovante de residência']

export function ApplicationStatusScreen({ go, back }) {
  return (
    <View style={styles.statusScreen}>
      <BackButton onPress={back} />
      <View style={styles.statusHeaderCopy}>
        <Text style={styles.statusOpportunityTitle}>Bolsa de Estudos</Text>
        <Text style={styles.statusOpportunitySubtitle}>Tênis - Nível Universitário</Text>
      </View>
      <Text style={styles.statusBadge}>Em análise</Text>

      <ScrollView style={styles.statusBody} contentContainerStyle={styles.statusBodyContent} showsVerticalScrollIndicator={false}>
        <View style={styles.statusTimelineCard}>
          <Text style={styles.statusSectionTitle}>Status da candidatura</Text>
          {timeline.map(([label, date, done], index) => (
            <View key={label} style={styles.statusStep}>
              {index < timeline.length - 1 && <View style={styles.statusStepLine} />}
              <View style={[styles.statusStepIcon, !done && styles.statusStepIconPending]}>
                {done && <Ionicons name="checkmark" size={15} color={BLUE} />}
              </View>
              <Text style={[styles.statusStepLabel, index === 2 && styles.statusStepCurrent]}>{label}</Text>
              <Text style={styles.statusStepDate}>{date}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.statusDocumentsTitle}>Documentos enviados</Text>
        {documents.map(item => <Text key={item} style={styles.statusDocument}>{item}</Text>)}

        <View style={styles.statusAction}>
          <Button wide variant="blue" onPress={() => go('opportunitiesAthlete')}>Ver oportunidades</Button>
        </View>
      </ScrollView>
      <BottomNav go={go} active="opportunities" />
    </View>
  )
}

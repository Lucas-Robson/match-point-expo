import React from 'react'
import { Text, View } from 'react-native'
import { BackButton } from '../components/ui/BackButton'
import { BottomNav } from '../components/navigation/BottomNav'
import { Button } from '../components/ui/Button'
import { styles } from '../theme/styles'

const timeline = ['✓ Inscrição realizada', '✓ Documentos enviados', '✓ Em análise', '○ Resultado final']
const documents = ['Currículo esportivo', 'Histórico escolar', 'Vídeo de apresentação', 'Comprovante de residência']

export function ApplicationDetailScreen({ go, back }) {
  return (
    <View style={styles.detailScreen}>
      <BackButton onPress={back} />
      <Text style={styles.detailHeading}>Bolsa de Estudos</Text>
      <Text style={styles.profileRole}>Tênis - Nível Universitário</Text>
      <Text style={styles.statusBadge}>Em análise</Text>
      <View style={styles.detailBody}>
        <Text style={styles.sectionTitle}>Status da candidatura</Text>
        {timeline.map((item, index) => (
          <Text key={item} style={styles.timeline}>{item}　　　　　{index < 2 ? '12/06/2026' : index === 2 ? 'Desde 16/06/2026' : 'Aguardando'}</Text>
        ))}
        <Text style={styles.sectionTitle}>Documentos enviados</Text>
        {documents.map(item => <Text key={item} style={styles.document}>{item}</Text>)}
        <Button wide onPress={() => go('opportunitiesAthlete')}>Ver oportunidades</Button>
      </View>
      <BottomNav go={go} active="opportunities" />
    </View>
  )
}

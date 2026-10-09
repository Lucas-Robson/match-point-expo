import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { BackButton } from '../components/ui/BackButton'
import { BottomNav } from '../components/navigation/BottomNav'
import { Button } from '../components/ui/Button'
import { assets } from '../theme/assets'
import { BLUE } from '../theme/colors'
import { styles } from '../theme/styles'

const facts = [
  ['school-outline', 'Categoria', 'Universitário'],
  ['git-network-outline', 'Vagas', '3'],
  ['briefcase-outline', 'Benefício', 'Bolsa integral'],
]

export function OpportunityDetailScreen({ go, back }) {
  return (
    <View style={styles.flowScreen}>
      <View style={styles.flowHeader}>
        <BackButton onPress={back} />
        <Image source={assets.monogram} style={styles.flowHeaderMark} resizeMode="contain" />
      </View>

      <ScrollView style={styles.opportunityDetailScroll} contentContainerStyle={styles.opportunityDetailContent} showsVerticalScrollIndicator={false}>
        <Image source={assets.arenaSuzy} style={styles.opportunityHero} resizeMode="cover" />
        <View style={styles.opportunityIntro}>
          <View style={styles.opportunityHeadingRow}>
            <View>
              <Text style={styles.opportunityDetailTitle}>Bolsa de Estudos</Text>
              <Text style={styles.opportunityDetailSubtitle}>Tênis - Sub 18</Text>
            </View>
            <View style={styles.opportunityScore}>
              <Text style={styles.opportunityScoreLabel}>Match{`\n`}Score</Text>
              <Text style={styles.opportunityScoreValue}>94%</Text>
            </View>
          </View>

          <View style={styles.institutionRow}>
            <Ionicons name="home" size={25} color={BLUE} />
            <View>
              <Text style={styles.opportunityFactLabel}>Instituição</Text>
              <Text style={styles.institutionName}>Arena Suzy - Sub 18</Text>
              <Text style={styles.institutionName}>Suzano - SP</Text>
            </View>
          </View>
        </View>

        <View style={styles.opportunityAboutCard}>
          <Text style={styles.opportunitySectionTitle}>Sobre a oportunidade</Text>
          <Text style={styles.opportunityBodyCopy}>Programa de bolsa para jovens atletas com destaque esportivo e bom desempenho acadêmico. A oportunidade oferece estrutura completa para o desenvolvimento dentro e fora das quadras.</Text>
        </View>

        <View style={styles.opportunityFactsCard}>
          {facts.map(([icon, label, value]) => (
            <View key={label} style={styles.opportunityFact}>
              <Ionicons name={icon} size={22} color={BLUE} />
              <View>
                <Text style={styles.opportunityFactLabel}>{label}</Text>
                <Text style={styles.opportunityFactValue}>{value}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.requirementsBlock}>
          <Text style={styles.opportunitySectionTitle}>Requisitos</Text>
          <Text style={styles.opportunityBodyCopy}>• Idade entre 17 e 19 anos{`\n`}• Ranking nacional Top 200{`\n`}• Média escolar mínima 7,0</Text>
          <Text style={styles.deadline}>Inscrições até 20/05/2025</Text>
        </View>

        <View style={styles.flowAction}>
          <Button wide onPress={() => go('applicationInfo')}>Quero me candidatar</Button>
        </View>
      </ScrollView>
      <BottomNav go={go} active="opportunities" />
    </View>
  )
}

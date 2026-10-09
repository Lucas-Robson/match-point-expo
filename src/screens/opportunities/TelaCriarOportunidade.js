import React from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { BackButton } from '../../components/ui/BackButton'
import { BottomNav } from '../../components/navigation/BottomNav'
import { Button } from '../../components/ui/Button'
import { assets } from '../../theme/assets'
import { styles } from '../../theme/styles'

const campos = ['Título da oportunidade', 'Modalidade', 'Categoria', 'Localização']

export function TelaCriarOportunidade({ go, back }) {
  return (
    <View style={styles.createOpportunityScreen}>
      <View style={styles.createOpportunityHeader}>
        <View style={styles.createOpportunityStripe} />
        <BackButton onPress={back} />
        <Image source={assets.monogram} style={styles.createOpportunityMark} resizeMode="contain" />
      </View>

      <ScrollView
        style={styles.createOpportunityPanel}
        contentContainerStyle={styles.createOpportunityContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.createOpportunityTitle}>Criar oportunidade</Text>
        <Text style={styles.createOpportunitySubtitle}>Informações</Text>

        <View style={styles.createOpportunityFields}>
          {campos.map(campo => (
            <View key={campo} style={styles.createOpportunityFieldGroup}>
              <Text style={styles.createOpportunityLabel}>{campo}</Text>
              <TextInput accessibilityLabel={campo} style={styles.createOpportunityInput} />
            </View>
          ))}
        </View>

        <View style={styles.createOpportunityAction}>
          <Button wide onPress={() => go('oportunidadesCriadasTecnico')}>Criar Oportunidade</Button>
        </View>
      </ScrollView>
      <BottomNav go={go} role="trainer" active="opportunities" />
    </View>
  )
}

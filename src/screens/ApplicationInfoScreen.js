import React from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { BackButton } from '../components/ui/BackButton'
import { BottomNav } from '../components/navigation/BottomNav'
import { Button } from '../components/ui/Button'
import { assets } from '../theme/assets'
import { styles } from '../theme/styles'

const fields = [
  ['Nome completo', 'name'],
  ['Data de nascimento', 'birthdate'],
  ['CPF', 'cpf'],
  ['E-mail', 'email'],
  ['Telefone', 'phone'],
]

export function ApplicationInfoScreen({ go, back }) {
  return (
    <View style={styles.flowScreen}>
      <View style={styles.flowHeader}>
        <BackButton onPress={back} />
        <Image source={assets.monogram} style={styles.flowHeaderMark} resizeMode="contain" />
      </View>

      <ScrollView style={styles.flowBody} contentContainerStyle={styles.applicationFormContent} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <Text style={styles.applicationFormTitle}>Bolsa de Estudos</Text>
        <Text style={styles.applicationFormSubtitle}>Tênis - Sub 18</Text>
        <View style={styles.applicationProgressTrack}>
          <View style={styles.applicationProgressFill} />
          <View style={styles.applicationProgressDot} />
        </View>

        <Text style={styles.applicationFormSection}>Dados pessoais</Text>
        {fields.map(([label, key]) => (
          <View key={key} style={styles.applicationFieldGroup}>
            <Text style={styles.applicationFieldLabel}>{label}</Text>
            <TextInput
              accessibilityLabel={label}
              autoCapitalize={key === 'email' ? 'none' : 'sentences'}
              keyboardType={key === 'email' ? 'email-address' : ['cpf', 'phone'].includes(key) ? 'numeric' : 'default'}
              style={styles.applicationFieldInput}
            />
          </View>
        ))}

        <View style={styles.flowAction}>
          <Button wide onPress={() => go('applicationStatus')}>Próximo</Button>
        </View>
      </ScrollView>
      <BottomNav go={go} active="opportunities" />
    </View>
  )
}

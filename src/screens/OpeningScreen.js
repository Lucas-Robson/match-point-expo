import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/ui/Button'
import { assets } from '../theme/assets'
import { styles } from '../theme/styles'

export function OpeningScreen({ go }) {
  return (
    <View style={styles.full}>
      <View style={styles.openingHero}>
        <Image source={assets.opening} resizeMode="cover" style={StyleSheet.absoluteFillObject} />
        <Image source={assets.logo} style={styles.openingLogo} resizeMode="contain" />
      </View>
      <View style={styles.openingCard}>
        <View>
          <Text style={styles.openingTitle}>O que você{`\n`}deseja fazer?</Text>
          <Text style={styles.openingSubtitle}>Sua próxima oportunidade{`\n`}começa aqui.</Text>
        </View>
        <View style={styles.openingActions}>
          <Button variant="blue" wide onPress={() => go('login')}>Login</Button>
          <Button wide onPress={() => go('choice')}>Cadastro</Button>
        </View>
      </View>
    </View>
  )
}

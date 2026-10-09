import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { BackButton } from '../components/ui/BackButton'
import { BottomNav } from '../components/navigation/BottomNav'
import { assets } from '../theme/assets'
import { styles } from '../theme/styles'

export function WomenInSportScreen({ go, back }) {
  return (
    <View style={styles.women}>
      <BackButton onPress={back} />
      <Image source={assets.monogram} style={styles.notificationMark} />
      <Text style={styles.womenTitle}>Mulheres no Esporte</Text>
      <ScrollView contentContainerStyle={styles.womenList}>
        <View style={styles.womenFeature}>
          <Image source={assets.court} style={styles.womenImage} />
          <Text style={styles.featureTitle}>Descubra{`\n`}aqui a sua{`\n`}próxima{`\n`}oportunidade</Text>
          <Text style={styles.featureTag}>Oportunidades</Text>
        </View>
        <View style={styles.womanCard}>
          <Image source={assets.serena} style={styles.womanPhoto} resizeMode="contain" />
          <Text style={styles.womanText}>O legado{`\n`}de <Text style={styles.signupAccent}>Serena{`\n`}Williams</Text></Text>
          <Text style={styles.womanMore}>Ver mais</Text>
        </View>
        <View style={styles.womanCard}>
          <Image source={assets.aryna} style={styles.womanPhoto} resizeMode="contain" />
          <Text style={[styles.womanText, { left: 8 }]}>A liderança{`\n`}de <Text style={styles.signupAccent}>Aryna{`\n`}Sabalenka</Text></Text>
          <Text style={styles.womanMore}>Ver mais</Text>
        </View>
      </ScrollView>
      <BottomNav go={go} />
    </View>
  )
}

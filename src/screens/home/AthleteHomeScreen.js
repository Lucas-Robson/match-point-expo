import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { BottomNav } from '../../components/navigation/BottomNav'
import { Header } from '../../components/Header'
import { StatIcon } from '../../components/StatIcon'
import { assets } from '../../theme/assets'
import { styles } from '../../theme/styles'

export function AthleteHomeScreen({ go }) {
  return (
    <View style={styles.home}>
      <Header initials="Ju" name="Juliana" subtitle="Atleta" go={go} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.homeScroll}>
        <View style={styles.topCards}>
          <View style={[styles.whiteCard, styles.performance]}>
            <View style={styles.cardHeading}><StatIcon>▥</StatIcon><Text style={styles.cardScript}>Seu desempenho</Text></View>
            <Text style={styles.smallBlue}>Ranking Regional</Text>
            <Text style={styles.bigNumber}>#24<Text style={styles.tiny}>  de 146</Text></Text>
            <View style={styles.statsRow}>
              <Text style={styles.smallBlue}>Vitórias{`\n`}<Text style={styles.statNumber}>3</Text></Text>
              <Text style={styles.smallBlue}>Derrotas{`\n`}<Text style={styles.statNumber}>1</Text></Text>
            </View>
          </View>
          <View style={[styles.whiteCard, styles.profileCardHome]}>
            <View style={styles.cardHeading}><StatIcon>♟</StatIcon><Text style={styles.cardScript}>Seu perfil</Text></View>
            <View style={styles.progressCircle}><Text style={styles.progressText}>82%</Text><Text style={styles.tiny}>completo</Text></View>
          </View>
        </View>

        <View style={[styles.whiteCard, styles.opportunityCard]}>
          <View style={styles.cardHeading}><StatIcon>★</StatIcon><Text style={styles.cardScript}>Oportunidades para você</Text></View>
          <View style={styles.opportunityRow}>
            <Image source={assets.arenaSuzy} style={styles.opportunityImage} />
            <View>
              <Text style={styles.oppTitle}>Bolsa de Estudos</Text>
              <Text style={styles.smallBlue}>▣  Arena Suzy - Sub 18</Text>
              <Text style={styles.smallBlue}>●  Suzano</Text>
            </View>
            <View style={styles.score}><Text style={styles.scoreLabel}>Match{`\n`}Score</Text><Text style={styles.scoreValue}>94%</Text></View>
          </View>
          <Pressable><Text style={styles.seeAll}>Ver todas</Text></Pressable>
        </View>

        <View style={[styles.whiteCard, styles.applications]}>
          <View style={styles.cardHeading}><StatIcon>▣</StatIcon><Text style={styles.cardScript}>Minhas candidaturas</Text><Text style={styles.seeAllRight}>Ver todos</Text></View>
          <View style={styles.applicationStats}>
            <Text style={styles.appStat}><Text style={styles.statNumber}>3</Text>{`\n`}Candidaturas</Text>
            <Text style={styles.appStat}><Text style={styles.statNumber}>1</Text>{`\n`}Em análise</Text>
            <Text style={styles.appStat}><Text style={styles.statNumber}>2</Text>{`\n`}Rejeitadas</Text>
          </View>
        </View>

        <Pressable onPress={() => go('women')} style={styles.heroBanner}>
          <Text style={styles.bannerTitle}>Mulheres no esporte</Text>
          <Text style={styles.bannerCopy}>Incentivando talentos.{`\n`}Transformando o futuro</Text>
          <Text style={styles.bannerCta}>Saiba mais</Text>
          <Image source={assets.athleteBanner} style={styles.bannerPerson} resizeMode="contain" />
        </Pressable>
      </ScrollView>
      <BottomNav go={go} />
    </View>
  )
}

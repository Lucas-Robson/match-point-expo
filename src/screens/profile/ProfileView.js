import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { BackButton } from '../../components/ui/BackButton'
import { BottomNav } from '../../components/navigation/BottomNav'
import { Button } from '../../components/ui/Button'
import { assets } from '../../theme/assets'
import { styles } from '../../theme/styles'

export function ProfileView({ role, go, back }) {
  const athlete = role === 'athlete'
  const institution = role === 'institution'

  if (athlete) {
    return (
      <View style={styles.athleteProfileScreen}>
        <View style={styles.athleteProfileHeader}>
          <BackButton onPress={back} />
          <View style={styles.athleteProfileIdentity}>
            <View style={styles.athleteProfileAvatar}>
              <Text style={styles.athleteProfileAvatarText}>Ju</Text>
            </View>
            <View>
              <Text style={styles.athleteProfileName}>Juliana Santos</Text>
              <Text style={styles.athleteProfileRole}>Atleta</Text>
            </View>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Editar perfil"
            style={({ pressed }) => [styles.fullProfileButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.fullProfileButtonText}>Editar perfil</Text>
          </Pressable>
        </View>

        <ScrollView
          style={styles.athleteProfileBody}
          contentContainerStyle={styles.athleteProfileContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.athleteInfoGrid}>
            <View style={styles.athleteInfoCard}>
              <Text style={styles.athleteInfoLabel}>Categoria</Text>
              <Text style={styles.athleteInfoValue}>Universitário</Text>
            </View>
            <View style={styles.athleteInfoCard}>
              <Text style={styles.athleteInfoLabel}>Idade</Text>
              <Text style={styles.athleteInfoValue}>21 anos</Text>
            </View>
            <View style={styles.athleteInfoCard}>
              <Text style={styles.athleteInfoLabel}>Localização</Text>
              <Text style={styles.athleteInfoValue}>Alto tietê</Text>
            </View>
            <View style={styles.athleteInfoCard}>
              <Text style={styles.athleteInfoLabel}>Torneios disputados</Text>
              <Text style={styles.athleteInfoValue}>23 torneios</Text>
            </View>
          </View>

          <View style={styles.athleteAboutCard}>
            <Text style={styles.athleteAboutTitle}>Sobre mim</Text>
            <Text style={styles.athleteAboutText}>Atleta de tênis há 10 anos, foco em{`\n`}desempenho e evolução constante.</Text>
          </View>

          <View style={styles.athleteStatsGrid}>
            <View style={styles.athleteStatCard}>
              <Text style={styles.athleteStatLabel}>Ranking MatchPoint</Text>
              <Text style={styles.athleteStatValue}>15º</Text>
            </View>
            <View style={styles.athleteStatCard}>
              <Text style={styles.athleteStatLabel}>Torneios disputados</Text>
              <Text style={styles.athleteStatValue}>28</Text>
            </View>
            <View style={styles.athleteStatCard}>
              <Text style={styles.athleteStatLabel}>Títulos</Text>
              <Text style={styles.athleteStatValue}>12</Text>
            </View>
          </View>
        </ScrollView>
        <BottomNav go={go} role="athlete" active="profile" />
      </View>
    )
  }

  return (
    <View style={styles.profileScreen}>
      <BackButton onPress={back} />
      <Image source={assets.monogram} style={styles.listMark} />
      <View style={styles.profileIdentity}>
        <View style={styles.avatar}><Text style={styles.avatarText}>{institution ? 'In' : 'Ju'}</Text></View>
        <View>
          <Text style={styles.profileName}>{institution ? 'Universidade do esporte' : 'Juliana Santos'}</Text>
          <Text style={styles.profileRole}>{institution ? 'Instituição' : athlete ? 'Atleta' : 'Treinador'}</Text>
        </View>
      </View>
      <View style={styles.profileBody}>
        <Text style={styles.sectionTitle}>{institution ? 'Informações' : 'Sobre mim'}</Text>
        {institution ? (
          <View style={styles.infoRows}>
            <Text style={styles.infoText}>CNPJ　　　　　　　　 02.961.362/0001-74</Text>
            <Text style={styles.infoText}>Tipo　　　　　　　　 Universidade</Text>
            <Text style={styles.infoText}>Localização　　　　　 São Paulo - SP</Text>
            <Text style={styles.infoText}>Site　　　　　　　　 www.santosfc.com.br</Text>
          </View>
        ) : (
          <>
            <View style={styles.profileGrid}>
              <Text style={styles.infoBox}>Categoria{`\n`}<Text style={styles.semibold}>Tênis Masculino</Text></Text>
              <Text style={styles.infoBox}>Idade{`\n`}<Text style={styles.semibold}>21 anos</Text></Text>
              <Text style={styles.infoBox}>Localização{`\n`}<Text style={styles.semibold}>Alto tietê</Text></Text>
              <Text style={styles.infoBox}>CREF{`\n`}<Text style={styles.semibold}>123321-G/SP</Text></Text>
            </View>
            <Text style={styles.sectionTitle}>Sobre mim</Text>
            <Text style={styles.about}>Atleta de tênis há 10 anos, foco em{`\n`}desempenho e evolução constante.</Text>
          </>
        )}
        <Button wide onPress={() => {}}>Editar perfil</Button>
      </View>
      <BottomNav go={go} role={role} active="profile" />
    </View>
  )
}

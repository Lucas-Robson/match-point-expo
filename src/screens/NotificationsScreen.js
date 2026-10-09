import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { BackButton } from '../components/ui/BackButton'
import { notices } from '../data/content'
import { assets } from '../theme/assets'
import { styles } from '../theme/styles'

export function NotificationsScreen({ back }) {
  return (
    <View style={styles.notifications}>
      <BackButton onPress={back} />
      <Image source={assets.monogram} style={styles.notificationMark} />
      <Text style={styles.notificationsTitle}>Notificações</Text>
      <Text style={styles.notificationsSubtitle}>Acompanhe atualizações{`\n`}importantes da sua conta</Text>
      <ScrollView contentContainerStyle={styles.noticeList}>
        {notices.map(([title, body], index) => (
          <View style={styles.notice} key={`${title}-${index}`}>
            <Text style={styles.noticeTitle}><Text style={styles.dot}>● </Text>{title}</Text>
            <Text style={styles.noticeBody}>{body}</Text>
            <Text style={styles.noticeTime}>◷ Há 2 horas</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/styles'

export function StatIcon({ children }) {
  return <View style={styles.statIcon}><Text style={styles.statIconText}>{children}</Text></View>
}

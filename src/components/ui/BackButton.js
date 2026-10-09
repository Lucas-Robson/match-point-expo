import React from 'react'
import { Pressable, Text } from 'react-native'
import { styles } from '../../theme/styles'

export function BackButton({ onPress, style }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel="Voltar" onPress={onPress} style={[styles.back, style]}>
      <Text style={styles.backText}>‹</Text>
    </Pressable>
  )
}

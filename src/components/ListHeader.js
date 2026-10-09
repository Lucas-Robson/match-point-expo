import React from 'react'
import { Image, Text, View } from 'react-native'
import { assets } from '../theme/assets'
import { styles } from '../theme/styles'
import { BackButton } from './ui/BackButton'

export function ListHeader({ title, back }) {
  return (
    <View style={styles.listHeader}>
      <BackButton onPress={back} />
      <Image source={assets.monogram} style={styles.listMark} />
      <Text style={styles.listTitle}>{title}</Text>
      <View style={styles.search}><Text style={styles.searchText}>⌕  Buscar oportunidades</Text></View>
    </View>
  )
}

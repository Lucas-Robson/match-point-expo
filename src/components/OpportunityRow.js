import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Reveal } from './motion'
import { assets } from '../theme/assets'
import { styles } from '../theme/styles'

export function OpportunityRow({ item, athlete = false, onPress, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Pressable onPress={onPress} style={styles.listCard}>
        <Image source={assets.arenaSuzy} style={styles.listThumb} />
        <View style={styles.listCopy}>
          <Text style={styles.listName}>{item[0]}</Text>
          <Text style={styles.listMeta}>♟  {item[1]}</Text>
          <Text style={styles.listMeta}>▣  Inscrições até 19/08/26</Text>
        </View>
        {athlete && (
          <View style={styles.matchBadge}>
            <Text style={styles.scoreLabel}>Match{`\n`}Score</Text>
            <Text style={styles.scoreValue}>{item[2]}</Text>
          </View>
        )}
      </Pressable>
    </Reveal>
  )
}

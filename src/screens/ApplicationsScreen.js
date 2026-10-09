import React from 'react'
import { ScrollView, View } from 'react-native'
import { BottomNav } from '../components/navigation/BottomNav'
import { ListHeader } from '../components/ListHeader'
import { OpportunityRow } from '../components/OpportunityRow'
import { opportunityRows } from '../data/content'
import { styles } from '../theme/styles'

export function ApplicationsScreen({ go, back }) {
  return (
    <View style={styles.listScreen}>
      <ListHeader title="Candidaturas" back={back} />
      <ScrollView contentContainerStyle={styles.listContent}>
        {opportunityRows.map((item, index) => (
          <OpportunityRow
            key={item[0]}
            item={item}
            delay={70 + index * 55}
            onPress={() => go('applicationDetail')}
          />
        ))}
      </ScrollView>
      <BottomNav go={go} active="applications" />
    </View>
  )
}

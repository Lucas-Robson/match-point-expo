import React from 'react'
import { Image, ImageBackground, SafeAreaView, View } from 'react-native'
import { assets } from '../../theme/assets'
import { styles } from '../../theme/styles'
import { BackButton } from './BackButton'

export function Shell({ background, children, back, logo = false }) {
  return (
    <ImageBackground source={background} resizeMode="cover" style={styles.full}>
      <View style={styles.dim} />
      <SafeAreaView style={styles.safe}>
        {back && <BackButton onPress={back} />}
        {logo && <Image source={assets.monogram} style={styles.monogram} resizeMode="contain" />}
        {children}
      </SafeAreaView>
    </ImageBackground>
  )
}

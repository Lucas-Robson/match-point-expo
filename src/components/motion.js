import React, { useEffect, useRef } from 'react'
import { Animated, Easing, Platform } from 'react-native'
import { styles } from '../theme/styles'

export const USE_NATIVE_DRIVER = Platform.OS !== 'web'

export function ScreenTransition({ children, direction = 1 }) {
  const progress = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 360,
      easing: Easing.bezier(0.22, 1, 0.36, 1),
      useNativeDriver: USE_NATIVE_DRIVER,
    }).start()
  }, [progress])

  return (
    <Animated.View
      style={[
        styles.screenTransition,
        {
          opacity: progress,
          transform: [
            { translateX: progress.interpolate({ inputRange: [0, 1], outputRange: [direction * 22, 0] }) },
            { scale: progress.interpolate({ inputRange: [0, 1], outputRange: [0.992, 1] }) },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  )
}

export function Reveal({ children, delay = 0 }) {
  const progress = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 440,
      delay,
      easing: Easing.bezier(0.22, 1, 0.36, 1),
      useNativeDriver: USE_NATIVE_DRIVER,
    }).start()
  }, [delay, progress])

  return (
    <Animated.View
      style={[
        styles.reveal,
        {
          opacity: progress,
          transform: [{ translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [14, 0] }) }],
        },
      ]}
    >
      {children}
    </Animated.View>
  )
}

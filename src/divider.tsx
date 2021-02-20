import { COLOR, useTheme } from 'native-x-theme'
import React, { useMemo } from 'react'
import { View } from 'react-native'

const dividerSizes = {
  normal: 1,
  large: 2,
  'x-large': 4,
}

type DividerProps = {
  color?: string
  size?: keyof typeof dividerSizes
  vertical?: boolean
}

export function Divider({
  color = COLOR.DIVIDER,
  size = 'normal',
  vertical = false,
}: DividerProps) {
  const { getBorderColor } = useTheme()
  const style = useMemo(() => {
    const borderColor = getBorderColor(color)
    return [
      borderColor,
      vertical
        ? { borderLeftWidth: dividerSizes[size], borderWith: 0, height: '100%' }
        : { borderBottomWidth: dividerSizes[size], borderWith: 0, width: '100%' },
    ]
  }, [color, getBorderColor, size, vertical])
  return <View style={style} />
}

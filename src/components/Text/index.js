import React, {useMemo} from 'react';
import { Text } from 'react-native';
import { getIsDarkMode } from '../../redux/system/selector';
import {colors, fonts} from '../../constants';

export default function CustomText({text, style}) {
    const isDark = getIsDarkMode();
      
    const textStyle = useMemo(() => {
      const styles = {
        fontSize: fonts.f13,
        fontWeight: '600',
        ...style,
        color: isDark ? colors.cFFFFFF : colors.c324c94,
      };
  
      return styles;
    }, [style, isDark]);
  
    return <Text style={textStyle}>{text}</Text>;
  }
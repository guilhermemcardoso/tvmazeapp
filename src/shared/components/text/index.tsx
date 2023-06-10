import React, {useMemo} from 'react';
import {Text as NativeText} from 'native-base';
import {TextProps} from 'react-native';
import {styles} from './styles';

type Props = TextProps & {
  size?: 'title' | 'subtitle' | 'body';
  variant?: 'primary' | 'secondary';
};

export default function Text({
  children,
  size = 'body',
  variant = 'primary',
  style,
  ...rest
}: Props) {
  const customStyle = useMemo(() => {
    if (style) {
      return [styles[size], style];
    }

    return [styles[size]];
  }, [style, size]);

  return (
    <NativeText color={`font.${variant}`} style={customStyle} {...rest}>
      {children}
    </NativeText>
  );
}

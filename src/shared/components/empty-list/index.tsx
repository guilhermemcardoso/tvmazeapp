import React from 'react';
import {View, useTheme} from 'native-base';
import {Text} from '~/shared/components';
import styles from './styles';

interface Props {
  title?: string;
  description?: string;
}

export default function EmptyList({
  title = 'Empty List',
  description = "We couldn't find any series at the moment. Please, check your internet connection and try again later.",
}: Props) {
  const theme = useTheme();

  return (
    <View bgColor={theme.colors.container.dark} style={styles.container}>
      <Text variant="secondary" style={styles.title} size="subtitle">
        {title}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

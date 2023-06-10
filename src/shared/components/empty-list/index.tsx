import React from 'react';
import {View, useTheme} from 'native-base';
import {Text} from '~/shared/components';
import styles from './styles';

export default function EmptyList() {
  const theme = useTheme();

  return (
    <View bgColor={theme.colors.container.dark} style={styles.container}>
      <Text variant="secondary" style={styles.title} size="subtitle">
        Empty List
      </Text>
      <Text style={styles.description}>
        We couldn't find any series at the moment. Please, check your internet
        connection and try again later.
      </Text>
    </View>
  );
}

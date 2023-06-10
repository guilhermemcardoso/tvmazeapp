import React from 'react';
import {Avatar, View, useTheme} from 'native-base';
import {Person} from '~/shared/types';
import {TouchableOpacity} from 'react-native';
import {Text} from '~/shared/components';
import styles from './styles';

interface Props {
  data: Person;
  onPress: (item: Person) => void;
}

export default function PersonItem({data, onPress}: Props) {
  const theme = useTheme();

  const onItemPress = () => {
    onPress(data);
  };

  return (
    <TouchableOpacity onPress={onItemPress}>
      <View bgColor={theme.colors.container.dark} style={styles.itemContainer}>
        <Avatar
          style={styles.image}
          source={
            data?.image?.medium
              ? {
                  uri: data.image.medium,
                }
              : require('~/assets/images/placeholder.png')
          }
          size="md"
        />
        <View style={styles.infoContainer}>
          <Text size="subtitle" style={styles.title}>
            {data.name}
          </Text>
          <Text>{data?.country?.name || data.country?.code}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

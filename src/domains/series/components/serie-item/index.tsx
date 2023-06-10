import React from 'react';
import {Image, View, useTheme} from 'native-base';
import {Serie} from '~/shared/types';
import {TouchableOpacity} from 'react-native';
import {IconButton, Text} from '~/shared/components';
import styles from './styles';

interface Props {
  data: Serie;
  onPress: (item: Serie) => void;
  onFavorite: (item: Serie) => void;
}

export default function SerieItem({data, onFavorite, onPress}: Props) {
  const theme = useTheme();

  const onFavoritePress = () => {
    onFavorite(data);
  };

  const onItemPress = () => {
    onPress(data);
  };

  return (
    <TouchableOpacity onPress={onItemPress}>
      <View bgColor={theme.colors.container.dark} style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{
            uri: data.image.medium,
          }}
          alt={data.name}
          size="xl"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data.name}</Text>
          <Text>{data.premiered}</Text>
        </View>
        <IconButton size={20} iconName="ios-heart" onPress={onFavoritePress} />
      </View>
    </TouchableOpacity>
  );
}

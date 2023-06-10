import React from 'react';
import {Image, View, useTheme} from 'native-base';
import {Serie} from '~/shared/types';
import {TouchableOpacity} from 'react-native';
import {Text} from '~/shared/components';
import styles from './styles';
import {getYearFromDate} from '~/shared/utils/dates';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  data: Serie;
  onPress: (item: Serie) => void;
  onDelete: (item: Serie) => void;
}

export default function FavoriteItem({data, onDelete, onPress}: Props) {
  const theme = useTheme();

  const onDeletePress = () => {
    onDelete(data);
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
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{data.name}</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text>{`"${data.type}"`}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text>{getYearFromDate(data.premiered)}</Text>
            <View style={styles.ratingContainer}>
              <Icon
                color={theme.colors.font.primary}
                name={'ios-star'}
                size={16}
              />
              <Text style={styles.rating}>{data.rating.average}</Text>
            </View>
          </View>
          <View borderColor="divider.primary" style={styles.favoriteContainer}>
            <TouchableOpacity
              onPress={onDeletePress}
              style={styles.removeFromFavoritesContainer}>
              <Icon
                color={theme.colors.font.primary}
                name={'ios-trash-outline'}
                size={16}
              />
              <Text style={styles.removeFromFavorites}>
                Remove from Favorites
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

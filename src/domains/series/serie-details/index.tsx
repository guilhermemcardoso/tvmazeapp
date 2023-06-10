import React, {useEffect} from 'react';
import {Container, Header, IconButton, Text} from '~/shared/components';
import styles from './styles';
import {Image, ScrollView, View, useTheme} from 'native-base';
import {Routes} from '~/navigation/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthorizedStackParamList} from '~/navigation/stacks/authorized';
import {removeTagsFromString} from '~/shared/utils/format';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<
  AuthorizedStackParamList,
  Routes.SERIE_DETAILS
>;

const SerieDetails = ({route, navigation}: Props) => {
  const {serie} = route.params;
  const theme = useTheme();

  useEffect(() => {
    if (serie) {
      //TODO get episodes
    }
  }, [serie]);

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header
        LeftComponent={
          <IconButton
            size={26}
            iconName="ios-arrow-back"
            onPress={onBackPress}
          />
        }
        title={serie.name}
      />
      <ScrollView>
        <View bgColor="container.light" style={styles.mainContainer}>
          <Image
            style={styles.image}
            source={{
              uri: serie.image.medium,
            }}
            alt={serie.name}
            size="2xl"
          />
          <Text style={styles.title} size="title">
            {serie.name}
          </Text>
          <View style={styles.ratingContainer}>
            <Icon
              color={theme.colors.font.primary}
              name={'ios-star'}
              size={16}
            />
            <Text style={styles.rating}>{serie.rating.average}</Text>
          </View>
          <View style={styles.genreContainer}>
            <Text style={styles.genreLabel}>Genre: </Text>
            <Text>{serie.genres.join(', ')}</Text>
          </View>
          <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleLabel}>Schedule: </Text>
            <Text>{`${serie.schedule.days.join(', ')} at ${
              serie.schedule.time
            }`}</Text>
          </View>
          <Text style={styles.summary}>
            {removeTagsFromString(serie.summary)}
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default SerieDetails;

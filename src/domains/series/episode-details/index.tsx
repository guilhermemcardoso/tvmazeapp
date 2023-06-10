import React from 'react';
import {Container, Header, IconButton, Text} from '~/shared/components';
import styles from './styles';
import {Image, ScrollView, View} from 'native-base';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthorizedStackParamList} from '~/navigation/stacks/authorized';
import {Routes} from '~/navigation/routes';
import {removeTagsFromString} from '~/shared/utils/format';

type Props = NativeStackScreenProps<
  AuthorizedStackParamList,
  Routes.EPISODE_DETAILS
>;

const EpisodeDetails = ({route, navigation}: Props) => {
  const {episode} = route.params;

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
        title="Episode Details"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View bgColor="container.light" style={styles.mainContainer}>
          <Image
            style={styles.image}
            source={
              episode.image?.medium
                ? {
                    uri: episode.image?.medium,
                  }
                : require('~/assets/images/placeholder.png')
            }
            alt={episode.name}
            size="2xl"
          />
          <Text style={styles.title} size="title">
            {episode.name}
          </Text>
          <View style={styles.infoContainer}>
            <View style={styles.episodeContainer}>
              <Text style={styles.label}>Episode: </Text>
              <Text>{episode.number}</Text>
            </View>
            <View style={styles.episodeContainer}>
              <Text style={styles.label}>Season: </Text>
              <Text>{episode.season}</Text>
            </View>
          </View>
          <Text style={styles.summary}>
            {removeTagsFromString(episode.summary)}
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default EpisodeDetails;

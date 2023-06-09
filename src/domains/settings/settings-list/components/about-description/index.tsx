import React from 'react';
import {View} from 'native-base';
import Text from '~/shared/components/text';
import styles from './styles';

const AboutDescription = () => {
  return (
    <View>
      <Text style={styles.description}>
        This App was developed using the MazeTV API.
      </Text>
      <Text style={styles.version}>Version 0.1.0</Text>
    </View>
  );
};

export default AboutDescription;

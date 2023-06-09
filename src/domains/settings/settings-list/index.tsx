import React from 'react';
import {useSettings} from '~/hooks/use-settings';
import {Container, Header} from '~/shared/components';
import styles from './styles';
import {Switch, View} from 'native-base';
import {SettingsItem} from './components';

const Settings = () => {
  const {theme, setTheme, pinEnabled, setPinEnabled} = useSettings();

  const onToggleDarkTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const onTogglePinEnabled = () => {
    setPinEnabled(!pinEnabled);
  };

  const onChangePinPress = () => {};

  return (
    <Container>
      <Header title="Settings" />
      <View bgColor="container.dark" style={styles.listContainer}>
        <SettingsItem
          title={'Dark theme'}
          pressable={false}
          RightComponent={
            <Switch
              onTrackColor="primary.pure"
              value={theme === 'dark'}
              onToggle={onToggleDarkTheme}
            />
          }
        />
        <SettingsItem
          title={'Enable PIN'}
          pressable={false}
          RightComponent={
            <Switch
              onTrackColor="primary.pure"
              value={pinEnabled}
              onToggle={onTogglePinEnabled}
            />
          }
        />
        <SettingsItem
          title={'Change PIN'}
          pressable
          onPress={onChangePinPress}
        />
      </View>
      {/* <InfoModal
        open={showAboutModal}
        buttonLabel="CLOSE"
        title="About"
        onPress={onCloseAboutModal}>
        <AboutDescription />
      </InfoModal> */}
    </Container>
  );
};

export default Settings;

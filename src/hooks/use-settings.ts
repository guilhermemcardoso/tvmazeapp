import {getKey, setKey} from '~/services/local-storage';
import {StorageKeys} from '~/services/local-storage/constants';
import {useSettingsStore} from '~/store/settings-store';
import {Theme} from '~/types/theme';

export function useSettings() {
  const setPinEnabledState = useSettingsStore(state => state.setPinEnabled);
  const setThemeState = useSettingsStore(state => state.setTheme);
  const theme = useSettingsStore(state => state.theme);
  const pinEnabled = useSettingsStore(state => state.pinEnabled);

  const loadSettings = async () => {
    const themeValue = await getKey(StorageKeys.THEME);
    const pinEnabledValue = await getKey(StorageKeys.PIN_ENABLED);

    setThemeState(themeValue ? (themeValue as Theme) : 'dark');
    setPinEnabledState(pinEnabledValue ? JSON.parse(pinEnabledValue) : true);
  };

  const setPinEnabled = async (value: boolean) => {
    setPinEnabledState(value);
    setKey(StorageKeys.PIN_ENABLED, JSON.stringify(value));
  };
  const setTheme = async (value: Theme) => {
    setThemeState(value);
    setKey(StorageKeys.THEME, value);
  };

  return {
    loadSettings,
    setPinEnabled,
    setTheme,
    pinEnabled,
    theme,
  };
}

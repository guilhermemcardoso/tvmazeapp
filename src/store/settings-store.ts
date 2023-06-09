import {create} from 'zustand';
import {Theme} from '~/types/theme';

interface SettingsState {
  theme: Theme;
  pinEnabled: boolean;
  setTheme: (theme: Theme) => void;
  setPinEnabled: (enabled: boolean) => void;
}

export const useSettingsStore = create<SettingsState>(set => ({
  theme: 'dark',
  pinEnabled: false,
  setTheme: async theme => {
    set(state => ({
      ...state,
      theme: theme,
    }));
  },
  setPinEnabled: async enabled => {
    set(state => ({
      ...state,
      pinEnabled: enabled,
    }));
  },
}));

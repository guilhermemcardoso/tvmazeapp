import {Tabs} from '~/navigation/routes';

export function getIconName(focused: boolean, tabName: string) {
  switch (tabName) {
    case Tabs.SERIES:
      return focused ? 'ios-film' : 'ios-film-outline';
    case Tabs.FAVORITES:
      return focused ? 'ios-heart' : 'ios-heart-outline';
    case Tabs.PEOPLE:
      return focused ? 'ios-person-circle' : 'ios-person-circle-outline';
    case Tabs.SETTINGS:
      return focused ? 'ios-settings' : 'ios-settings-outline';
    default:
      return focused ? 'ios-film' : 'ios-film-outline';
  }
}

export function getTabName(tabName: string) {
  switch (tabName) {
    case Tabs.SERIES:
      return 'Series';
    case Tabs.FAVORITES:
      return 'Favorites';
    case Tabs.PEOPLE:
      return 'People';
    case Tabs.SETTINGS:
      return 'Settings';
    default:
      return '';
  }
}

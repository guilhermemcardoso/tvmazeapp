import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 8 : 16,
    marginBottom: Platform.OS === 'ios' ? 68 : 102,
    borderRadius: 8,
    padding: 8,
  },
});

export default styles;

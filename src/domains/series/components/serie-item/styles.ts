import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 8,
    marginBottom: 8,
  },
  image: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  infoContainer: {
    padding: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default styles;

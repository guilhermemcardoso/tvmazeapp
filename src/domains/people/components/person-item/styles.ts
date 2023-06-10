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
    resizeMode: 'contain',
    margin: 8,
  },
  infoContainer: {
    flex: 1,
    padding: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginBottom: 2,
    marginRight: 8,
  },
});

export default styles;

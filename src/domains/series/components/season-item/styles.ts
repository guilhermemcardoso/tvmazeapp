import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  itemContainer: {
    width: 128,
    marginRight: 8,
    borderRadius: 8,
  },
  itemName: {
    padding: 6,
    flex: 1,
    flexWrap: 'wrap',
    height: 48,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  imageContainer: {
    height: 128,
    width: 128,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'contain',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 204,
    marginHorizontal: 16,
  },
  itemContainer: {
    width: 128,
    marginRight: 8,
    borderRadius: 8,
  },
  itemName: {
    padding: 4,
    flex: 1,
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  imageContainer: {
    height: 128,
    width: 128,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'contain',
  },
});

export default styles;

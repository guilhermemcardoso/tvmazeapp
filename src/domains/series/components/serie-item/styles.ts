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
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    padding: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    paddingBottom: 8,
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 16,
  },
  favoriteContainer: {
    borderTopWidth: 1,
    width: '100%',
    alignItems: 'flex-end',
  },
  rating: {
    fontSize: 12,
    marginLeft: 8,
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginBottom: 2,
    marginRight: 8,
  },
  addedToFavorites: {
    fontStyle: 'italic',
  },
  addToFavoritesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
  },
  addToFavorites: {
    marginLeft: 8,
  },
});

export default styles;

import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 8 : 16,
    marginBottom: Platform.OS === 'ios' ? 68 : 102,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8,
    padding: 8,
  },
  image: {
    borderRadius: 8,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  genreContainer: {
    marginHorizontal: 16,
    marginBottom: 8,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  genreLabel: {
    fontWeight: 'bold',
  },
  scheduleContainer: {
    marginHorizontal: 16,
    marginBottom: 8,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  scheduleLabel: {
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  rating: {
    marginLeft: 8,
  },
  summary: {
    margin: 16,
    marginTop: 0,
  },
});

export default styles;

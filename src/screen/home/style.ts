import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  viewContent: {
    flex: 1,
    marginTop: 105,
  },
  viewCheck: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1DB863',
    backgroundColor: '#1DB863',
    height: 16,
    width: 16,
    borderRadius: 4,
  },
  viewNoCheck: {
    borderWidth: 2,
    borderColor: '#B2B2B2',
    backgroundColor: '#ffff',
    height: 16,
    width: 16,
    borderRadius: 4,
  },
});

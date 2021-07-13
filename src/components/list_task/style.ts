import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  textTask: {
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    zIndex: 1,
  },
  viewCheckItem: {
    position: 'absolute',
    left: 150,
    zIndex: 2,
    backgroundColor: '#1DB863',
    borderBottomColor: '#1DB863',
    borderBottomWidth: 2,
    width: '30%',
    height: 2,
  },
});

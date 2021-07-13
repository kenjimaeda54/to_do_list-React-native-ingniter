import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#800080',
    height: 150,
    width: '100%',
  },
  viewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    height: '100%',
  },
  textSubTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    lineHeight: 20,
    color: '#fff',
  },
  viewFooter: {
    marginTop: -20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    width: '75%',
    borderRadius: 5,
    height: 56,
    color: '#666666',
    paddingHorizontal: 20,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Inter-Medium',
  },
  buttonFooter: {
    borderLeftWidth: 2,
    borderLeftColor: '#EBEBEB',
    borderRadius: 5,
    backgroundColor: '#fff',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    width: 53,
    marginLeft: -7,
  },
});

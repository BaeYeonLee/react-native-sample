import { StyleSheet } from 'react-native'

const variable = {
  COLOR_BLACK: '#222222',
  COLOR_PRIMARY: '#503AEE',
}

const style = StyleSheet.create({
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseInput: {
    width: '100%',
    borderColor: variable.COLOR_BLACK, 
    borderBottomWidth: 1,
    padding: 8,
  },
  iconCheck: {
    width: 7,
    height: 12,
    borderLeftWidth: 2, 
    borderTopWidth: 2,
    borderColor: '#E3E3E3',
    transform: [{ rotate: '225deg' }]
  },
  isChecked: {
    borderColor: '#503AEE',
  },
})

export default {
  ...variable,
  style
};
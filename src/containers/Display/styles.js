import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

export default StyleSheet.create({
  displayContainer: {
    flex: 1,
    backgroundColor: colors.IOS_SYSTEM_GRAY_4_LIGHT,
    justifyContent: 'flex-end',
  },
  displayText: {
    fontSize: 52,
    paddingHorizontal: 50,
    paddingBottom: 20,
    letterSpacing: 1.05,
    textAlign: 'right',
    color: colors.IOS_SYSTEM_GRAY_4_DARK,
  },
});

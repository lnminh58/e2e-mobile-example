import {Platform} from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const getTestIdProps = testId => {
  const testID = testId.toLowerCase().replace(/\s+/g, '_');

  return isAndroid
    ? {accessible: true, accessibilityLabel: testID, testID}
    : {testID};
};

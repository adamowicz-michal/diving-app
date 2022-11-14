import { StyleSheet, Button, View, Text } from 'react-native';

function CalculateMODScreen({ showMainScreen }) {
  return (
    <View>
      <Button title="Go Back" onPress={showMainScreen} />
      <Text>Calculate Modn Screen</Text>
    </View>
  );
}

export default CalculateMODScreen;

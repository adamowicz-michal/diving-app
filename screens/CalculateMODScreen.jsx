import { StyleSheet, View, Text } from 'react-native';
import ReturnButton from '../components/ReturnButton';

function CalculateMODScreen({ showMainScreen }) {
  return (
    <View style={styles.container}>
      <ReturnButton onPress={showMainScreen} />
      <Text>Calculate Modn Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 40,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
});

export default CalculateMODScreen;

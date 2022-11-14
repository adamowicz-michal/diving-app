import { StyleSheet, View, Text } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function MainScreen({ showCalculateMODScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>DIVING APP</Text>

      <PrimaryButton onPress={showCalculateMODScreen}>
        Calculate MOD
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  heading: {
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 34,
    letterSpacing: 2,
    color: '#fff',
  },
});

export default MainScreen;

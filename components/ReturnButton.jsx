import { StyleSheet, View, Text, Pressable } from 'react-native';

function ReturnButton({ onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: '#5f35ac' }}
      >
        <Text style={styles.buttonText}>X</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    alignSelf: 'flex-start',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonInnerContainer: {},
  buttonText: {
    color: '#333',
    fontSize: 20,
  },
});

export default ReturnButton;

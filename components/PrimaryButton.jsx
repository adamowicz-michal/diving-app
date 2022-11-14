import { StyleSheet, View, Text, Pressable } from 'react-native';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: '#5f35ac' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 100,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default PrimaryButton;

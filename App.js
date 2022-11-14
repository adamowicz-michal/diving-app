import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/images/background.png')}
      resizeMode="cover"
      style={styles.imageContainer}
      imageStyle={styles.backgroundImage}
    >
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text>Diving App</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    opacity: 0.75,
  }
});

import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import MainScreen from './screens/MainScreen';
import CalculateMODScreen from './screens/CalculateMODScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(<MainScreen showCalculateMODScreen={showCalculateMODScreen} />);

  function showMainScreen() {
    setCurrentScreen(<MainScreen showCalculateMODScreen={showCalculateMODScreen} />);
  }

  function showCalculateMODScreen() {
    setCurrentScreen(<CalculateMODScreen showMainScreen={showMainScreen} />);
  }

  return (
    <ImageBackground
      source={require('./assets/images/background.png')}
      resizeMode="cover"
      style={styles.imageContainer}
      imageStyle={styles.backgroundImage}
    >
      <StatusBar style="light" />
      <View style={styles.container}>
        {currentScreen}
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

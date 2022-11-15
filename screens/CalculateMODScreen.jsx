import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PrimaryButton from '../components/PrimaryButton';
import ReturnButton from '../components/ReturnButton';

function CalculateMODScreen({ showMainScreen }) {
  const [selectedFO, setSelectedFO] = useState('21');
  const [selectedPPO, setSelectedPPO] = useState('1.2');
  const [MOD, setMOD] = useState();
  const [EAD, setEAD] = useState();

  function handleTextChange(updatedText) {
    setSelectedFO(updatedText);
  }

  async function calculateMOD() {
    const chosenFO = parseInt(selectedFO);
    const chosenPPO = parseFloat(selectedPPO);

    if (isNaN(chosenFO) || isNaN(chosenPPO) || chosenFO < 21 || chosenFO > 40) {
      Alert.alert('Invalid FO2', 'Please pick FO2; between 21% - 40%', [
        { text: 'Ok', style: 'destructive' },
      ]);
      return;
    }

    const newMOD = Math.floor((10 * chosenPPO) / (chosenFO / 100) - 10);
    setMOD(newMOD);

    const newEad = Math.floor(
      ((1 - chosenFO / 100) / 0.79) * (newMOD + 10) - 10
    );
    setEAD(newEad);
  }

  return (
    <View style={styles.screenContainer}>
      <ReturnButton onPress={showMainScreen} />
      <Text style={styles.description}>Calculate MOD</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>FO&#8322; - (21% - 40%)</Text>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={selectedFO}
            onChangeText={handleTextChange}
          />
          <Text style={styles.inputText}>%</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>PPO</Text>

        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedPPO}
            onValueChange={(itemValue) => setSelectedPPO(itemValue)}
          >
            <Picker.Item style={styles.pickerItem} label="1.2" value={1.2} />
            <Picker.Item style={styles.pickerItem} label="1.4" value={1.4} />
            <Picker.Item style={styles.pickerItem} label="1.6" value={1.6} />
          </Picker>
        </View>
      </View>

      <View style={styles.calcButton}>
        <PrimaryButton onPress={calculateMOD}>Calculate</PrimaryButton>
      </View>

      {MOD && EAD && (
        <View>
          <Text style={styles.output}>MOD: {MOD}m</Text>
          <Text style={styles.output}>EAD: {EAD}m</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 40,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  description: {
    marginBottom: 8,
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  inputText: {
    fontSize: 16,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 100,
    height: 55,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
  },
  input: {
    width: 50,
    height: 40,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
  },
  picker: {
    width: 100,
    height: 'auto',
  },
  pickerItem: {
    fontSize: 16,
  },
  calcButton: {
    marginBottom: 30,
  },
  output: {
    marginBottom: 14,
    fontSize: 26,
  },
});

export default CalculateMODScreen;

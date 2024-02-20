import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TextInput, Image, Keyboard, TouchableWithoutFeedback } from 'react-native'

export default function MeasurementsScreen() {

  const [weight, setWeight] = React.useState('')
  const [chest, setChest] = React.useState('')
  const [waist, setWaist] = React.useState('')
  const [hips, setHips] = React.useState('')
  const [height, setHeight] = React.useState('')

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View >
          <Text style={styles.title}>Your measurements</Text>
          <View>
            <Text style={styles.inputName}>Height</Text>
            <TextInput  
            style={styles.input}
            onChangeText={setHeight}
            placeholder="Height (cm)"
            keyboardType="numeric"
            value={height} />
          </View>
          <View>
            <Text style={styles.inputName}>Weight</Text>
            <TextInput  
            style={styles.input}
            onChangeText={setWeight}
            placeholder="Weight (kg)"
            keyboardType="numeric"
            value={weight} />
          </View>
          <View>
            <Text style={styles.inputName}>Chest</Text>
            <TextInput  
            style={styles.input}
            onChangeText={setChest}
            placeholder="Chest (kg)"
            keyboardType="numeric"
            value={chest} />
          </View>
          <View>
            <Text style={styles.inputName}>Waist</Text>
            <TextInput  
            style={styles.input}
            onChangeText={setWaist}
            placeholder="Waist (kg)"
            keyboardType="numeric"
            value={waist} />
          </View>
          <View>
            <Text style={styles.inputName}>Hips</Text>
            <TextInput  
            style={styles.input}
            onChangeText={setHips}
            placeholder="Hips (kg)"
            keyboardType="numeric"
            value={hips} />
          </View>
          <View style={styles.imgContainer}>
            <Image source={{
            uri: 'https://cdn.grupoelcorteingles.es/statics/manager/contents/images/uploads/2022/09/Bked9M-Cyo.png',
          }}
          style={styles.image}
        />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  inputName: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 10,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignContent: 'center',
    padding: 20,
    color: '#1B262C',
    textDecorationLine: 'underline',
    textDecorationColor: '#0F4C75'
  },
  imgContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
})
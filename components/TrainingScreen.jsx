import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, ImageBackground } from 'react-native'
import * as Progress from 'react-native-progress'
import Week from './Week'

export default function TrainingScreen() {

  const [percent, setPercent] = useState(0)
  const [pressedDiets, setPressedDiets] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  })
  const [pressedExercises, setPressedExercises] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  })

  const numberOfWeeks = 8
  const weeksArray = Array.from(Array(numberOfWeeks).keys())

  const updatePercent = () => {
      const totalPercent = calculateTotalPercent()
      setPercent(totalPercent)
  }

  const calculateTotalPercent = () => {
      let total = 0
      for (let weekNumber = 1; weekNumber <= numberOfWeeks; weekNumber++) {
          const dietPressed = pressedDiets[weekNumber] || false
          const exercisePressed = pressedExercises[weekNumber] || false
          console.log(`Week ${weekNumber}: Diet Pressed - ${dietPressed}, Exercise Pressed - ${exercisePressed}`)
          if (dietPressed && exercisePressed) {
              total += (100/numberOfWeeks)
          } else if (dietPressed || exercisePressed) {
              total += ((100/numberOfWeeks)/2)
          } else {
            total += 0
          }
      }
      console.log('Total:', total)
      return total
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.content}>
        <View style={styles.startImag}>
          <ImageBackground
            source={{
              uri: 'https://media.revistagq.com/photos/5d8109d11a3ff40008b26a1a/16:9/w_2560%2Cc_limit/entrneamiento%2520perso.jpg'
            }}
            style={styles.backgroundImage}
            >
            <View style={styles.divBar}>
              <Text style={styles.title}>SUMMARY OF YOUR TRAINING</Text>
              <Progress.Bar 
              progress={percent/100}
              width={350} 
              height={10}
              color={'#0F4C75'}
              style={styles.progressBar}/>
              <Text style={styles.percent}>{percent}% Completed</Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          {weeksArray.map((weekNumber) => (
              <Week 
              key={weekNumber} 
              weekNumber={weekNumber + 1}
              updatePercent={updatePercent}
              pressedDiets={pressedDiets}
              pressedExercises={pressedExercises}
              setPressedDiets={setPressedDiets}
              setPressedExercises={setPressedExercises}
              />
          ))}
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  startImag: {
    height: 400,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },
  content: {
    backgroundColor: '#0F4C75',
  },
  divBar: {
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    marginHorizontal: 5,
    backgroundColor: 'rgba(27, 38, 44, 0.9)',
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 5,
  },
  progressBar: {
    alignSelf: 'center',
    margin: 5,
  },
  percent: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5,
    alignSelf: 'center',
  },
})
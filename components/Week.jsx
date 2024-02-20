import React, { useEffect } from 'react'
import { StyleSheet, View, Text, ImageBackground, Pressable } from 'react-native'

export default function Week({ weekNumber, updatePercent, pressedDiets, pressedExercises, setPressedDiets, setPressedExercises}) {

    const handlePressDiet = () => {
        const updatedDiets = { ...pressedDiets, [weekNumber]: !pressedDiets[weekNumber] }
        setPressedDiets(updatedDiets)
        updatePercent()
        
    }

    const handlePressExercise = () => {
        const updatedExercises = { ...pressedExercises, [weekNumber]: !pressedExercises[weekNumber] }
        setPressedExercises(updatedExercises)
        updatePercent()
    }

    useEffect(() => {
        updatePercent();
    }, [pressedDiets, pressedExercises]);


  return (
    <View style={styles.weekProgress}>
        <Text style={styles.weekDiv}>Week {weekNumber}</Text>
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <Pressable
                    onPress={handlePressDiet}
                    style={styles.wrapperCustom}>
                    <ImageBackground
                        source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/dieta-fodmap-pros-contras-elle-1660415938.jpg' }}
                        style={[styles.checkbox, { opacity: (pressedDiets[weekNumber] === true) ? 1 : 0.5 }]}
                    />
                                            {console.log('diet:',pressedDiets[weekNumber])}
                </Pressable>
                <Pressable
                    onPress={handlePressExercise}
                    style={styles.wrapperCustom}>
                     <ImageBackground
                        source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/12-ejercicios-para-abdominales-elle-1632239590.jpg' }}
                        style={[styles.checkbox, { opacity: (pressedExercises[weekNumber] === true) ? 1 : 0.5 }]}
                    />
                                                                {console.log('exercise',pressedExercises[weekNumber])}

                </Pressable>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    weekProgress: {
        borderWidth: 1,
        borderRadius: 10,
        height: 160,
        marginHorizontal: 5,
        backgroundColor: 'rgba(27, 38, 44, 0.7)',
        margin: 5,
    },
    weekDiv: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        margin: 10,
    },
    checkbox: {
        width: 180,
        height: 100,
        padding: 10,
    },
    wrapperCustom: {
        padding: 6,
    },
})
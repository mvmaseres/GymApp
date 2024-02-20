import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, ImageBackground  } from 'react-native'

export default function HomeScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView >
          <View >
            <Text style={styles.title}>Start achieving your goals</Text>
          </View>
          <View>
            <Image source={{
              uri: 'https://correr.fit/wp-content/uploads/mujersinfondocolores-1-1024x1024.png'
            }}
            style={styles.image}
            />
          </View>
          <View>
            <View style={styles.activity}>
              <ImageBackground
                source={{
                  uri: 'https://as1.ftcdn.net/v2/jpg/03/32/12/28/1000_F_332122807_niegnafTOdmqwRS2FL1kF8hmYusF5CHi.jpg'
                }}
                style={styles.backgroundImage}
              >
                <Text style={styles.text}>MyDiet</Text>
              </ImageBackground>
            </View>

            <View style={styles.activity}>
              <ImageBackground
                  source={{
                    uri: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/01/20/16742237085113.jpg'
                  }}
                  style={styles.backgroundImage}
                >
                <Text style={styles.text}>Stay in shape</Text>
              </ImageBackground>
            </View>

            <View style={styles.activity}>
              <ImageBackground
                    source={{
                      uri: 'https://img.freepik.com/premium-photo/middleaged-woman-home-engaged-fitness-fog-uses-laptop-online-group-activities_321831-8475.jpg'
                    }}
                    style={styles.backgroundImage}
                  >
                <Text style={styles.text}>Online activities</Text>
              </ImageBackground>
            </View>

            <View style={styles.activity}>
              <ImageBackground
                      source={{
                        uri: 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/11/24/el-nuevo-ejercicio-fisico-de-atencion-plena-para-reducir-la-presion-arterial-y-evitar-el-sedentarismo.jpeg'
                      }}
                      style={styles.backgroundImage}
                    >
                <Text style={styles.text}>Clases On Demand</Text>
              </ImageBackground>
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
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      alignSelf: 'center',
      textAlign: 'center',
      padding: 20,
      color: '#1B262C',
    },
    image: {
      width: 400,
      height: 400,
      alignSelf: 'center',
      marginBottom: 40,
    },
    activity: {
      borderWidth: 1,
      borderRadius: 10,
      height: 250,
      marginBottom: 10,
      marginHorizontal: 5,
      overflow: 'hidden',
    },
    text: {
      alignSelf: 'center',
      fontSize: 30,
      fontWeight: 'bold', 
      color: '#1B262C',
      backgroundColor: 'rgba(187, 225, 250, 0.5)',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      borderRadius: 10,
      overflow: 'hidden',
    },
  })
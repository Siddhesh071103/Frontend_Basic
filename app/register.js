import { StyleSheet, Text, View,ImageBackground,Image, Pressable, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons, AntDesign, Ionicons} from "@expo/vector-icons";

const image = require('../assets/blue-smoke-collection-white-background.jpg')
const rimage = require('../assets/20944201.jpg')

const Register = ({navigation}) => {
  return (
        <ImageBackground source={image} resizeMode="cover" style={styles.bg}>
        <Image style={{width: 200,height: 200, marginBottom: 30}} source={rimage}/>
          <View style={{ marginTop: 5 }} />
            <Text style={{ fontSize: 17, color: 'black' }}>Register to your account</Text>
            <View style={{ marginTop: 20 }} />
              <View
                  style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      backgroundColor: "white",
                      paddingVertical: 5,
                      borderRadius: 10,
                      marginTop: 30,
                      borderWidth: 2,
                  borderColor: '#007FFF',
                  }}
              >
                  <Ionicons
                      style={{ marginLeft: 8 }}
                      name="person-sharp"
                      size={25}
                      color="black"
                  />
                  <TextInput
                      autoCorrect={false}
                      placeholder="Enter your name"
                      placeholderTextColor={"grey"}
                      style={{
                          color: "black",
                          marginVertical: 10,
                          width: 300,
                      }}
                  />
              </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    backgroundColor: "white",
                    paddingVertical: 5,
                    borderRadius: 10,
                    marginTop: 30,
                    borderWidth: 2,
                  borderColor: '#007FFF',
                }}
            >
                <MaterialIcons
                    style={{ marginLeft: 8 }}
                    name="email"
                    size={25}
                    color="black"
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Enter your email"
                    placeholderTextColor={"grey"}
                    style={{
                        color: "black",
                        marginVertical: 10,
                        width: 300,
                    }}
                />
            </View>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    backgroundColor: "white",
                    paddingVertical: 5,
                    borderRadius: 10,
                    marginTop: 30,
                    borderWidth: 2,
                  borderColor: '#007FFF',
                }}
            >
                <AntDesign
                    style={{ marginLeft: 8 }}
                    name="lock1"
                    size={25}
                    color="black"
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    placeholderTextColor={"grey"}
                    style={{
                        color: "black",
                        marginVertical: 10,
                        width: 300,
                    }}
                />
            </View>
            <View style={{ marginTop: 50 }} />
          <TouchableOpacity style={{ width: 150, borderRadius: 50, borderColor: 'blue', backgroundColor: '#007FFF', marginLeft: 'auto', marginRight: 'auto', padding: 10 }}>
                <Text style={{ fontSize: 15, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>REGISTER</Text>
            </TouchableOpacity>
            <Pressable
                onPress={() => navigation.replace('Login')}
                style={{ marginTop: 12 }}
            >
                <Text style={{ textAlign: "center", color: "blue", fontSize: 16 }}>
                   Already have an account? Sign in
                </Text>
            </Pressable>
        </ImageBackground>
    )
}

export default Register

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
    },
})
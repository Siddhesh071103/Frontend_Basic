import { ImageBackground, StyleSheet, Text, View, TextInput, Image, Pressable} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons,AntDesign } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

const image = require('../assets/blue-smoke-collection-white-background.jpg')
const limage = require('../assets/4957136.jpg')

const Login = ({navigation}) => {
    const router = useRouter();

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.bg}>
    <Image style={{ width: 200, height: 200, marginBottom: 30 }} source={limage} />
    <View style={{marginTop: 5}}/>
    <Text style={{fontSize: 17,color: 'black'}}>Login to your account</Text>
    <View style={{marginTop: 20}}/>
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
          <View
              style={{
                  marginTop: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
              }}
          >
              <Text>Keep me logged in</Text>

              <Text 
                  style={{ color: "#007FFF", fontWeight: "500", marginLeft:60 }}>
                  Forgot Password?
              </Text>
          </View>
          <View style={{ marginTop: 50 }} />
          <TouchableOpacity onPress={() => navigation.replace('Screen')} style={{ width: 150, borderRadius: 50,borderColor: 'blue', backgroundColor: '#007FFF',marginLeft: 'auto', marginRight:'auto', padding: 10}}>
        <Text style={{fontSize: 15,textAlign: 'center', color: 'black',fontWeight: 'bold'}}>LOGIN</Text>
    </TouchableOpacity>
          <Pressable
              onPress={() => navigation.replace('Register')}
              style={{ marginTop: 12 }}
          >
              <Text style={{ textAlign: "center", color: "blue", fontSize: 16 }}>
                  Don't have an account? Sign Up
              </Text>
          </Pressable>
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
    },
})
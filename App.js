import { Settings, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import login from './app/login';
import register from './app/register';
import screen from './app/screen'
import profile from './(tabs)/profile';
import settings from './(tabs)/settings';
import additional from './(tabs)/additional';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator 
          initialRouteName='Register'
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name='Login' component={login} />
        <Stack.Screen name='Register' component={register} />
        <Stack.Screen name='Screen' component={screen} />
        <Stack.Screen name='Profile' component={profile} />
        <Stack.Screen name='Settings' component={settings} />
        <Stack.Screen name='Additional' component={additional} />
      </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
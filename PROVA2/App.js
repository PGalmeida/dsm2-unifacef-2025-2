import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MyCommitmentsScreen from './screens/MyCommitmentsScreen';
import TeamCommitmentsScreen from './screens/TeamCommitmentsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Meus Compromissos" component={MyCommitmentsScreen} />
        <Stack.Screen name="Compromissos da Equipe" component={TeamCommitmentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
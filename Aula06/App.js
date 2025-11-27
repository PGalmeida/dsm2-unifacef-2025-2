import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BasicExample from './screens/BasicExample';
import FormValidation from './screens/FormValidation'
import UserForm from './screens/UserForm'
import UserView from './screens/UserView'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Exemplo Básico" component={BasicExample} />
        <Stack.Screen name="Validação de Formulário" component={FormValidation} />
        <Stack.Screen name="Cadastro Completo" component={UserForm} />
        <Stack.Screen name="Detalhes do Usuário" component={UserView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

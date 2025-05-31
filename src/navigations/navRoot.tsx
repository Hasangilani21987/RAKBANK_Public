import Result from '../screens/Resullts/result';
import Quesstionare from '../screens/Quesstionare/quesstionare';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="quesstionare"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="result" component={Result} />
      <Stack.Screen name="quesstionare" component={Quesstionare} />
    </Stack.Navigator>
  );
};

export default RootStack;
